export abstract class DataUtilities {
    /**
     * Returns an array of distinct element from a given iterable source.
     * @param iterable Collection of items
     * @param selector A method that will be used to return a key which will be used to determine the distinctness. If not provided,
     *                 then the item itself will be used as the key.
     * @param comparator A method that will be used to compare the equality of the selector keys.
     * @return An array of distinct items.
     * @throws An error if the iterable is null or undefined.
     */
    public static distinct<TElement, TKey>(
        iterable: Iterable<TElement>,
        selector?: (item: TElement) => TKey,
        comparator?: (key1: TKey, key2: TKey) => boolean
    ): Array<TElement> {
        selector ??= (item: TElement): TKey => item as unknown as TKey;
        comparator ??= (key1: TKey, key2: TKey): boolean => Object.is(key1, key2);
        const distinctList: TElement[] = [];
        for (const item of iterable) {
            let exists = false;
            for (const distinctItem of distinctList) {
                if (comparator(selector(item), selector(distinctItem))) {
                    exists = true;
                    break;
                }
            }
            if (!exists) {
                distinctList.push(item);
            }
        }
        return distinctList;
    }
}

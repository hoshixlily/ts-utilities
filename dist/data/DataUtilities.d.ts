export declare abstract class DataUtilities {
    private constructor();
    /**
     * Returns an array of distinct element from a given iterable source.
     * @param iterable Collection of items
     * @param selector A method that will be used to return a key which will be used to determine the distinctness. If not provided,
     *                 then the item itself will be used as the key.
     * @param comparator A method that will be used to compare the equality of the selector keys.
     * @return An array of distinct items.
     * @throws An error if the iterable is null or undefined.
     */
    static distinct<TElement, TKey>(iterable: Iterable<TElement>, selector?: (item: TElement) => TKey, comparator?: (key1: TKey, key2: TKey) => boolean): Array<TElement>;
}

export abstract class NumberUtilities {
    /**
     * Generates a random number between the given min-max intervals. The interval bounds, min and max, are inclusive.
     * @param min Smallest value that the generated random number can take
     * @param max Greatest value that the generated random number can take
     * @return A randomly generated number whose value is between [min, max].
     */
    public static generateRandomNumber(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    /**
     * Generates a random number between the given min-max intervals. The interval bounds, min and max, are inclusive.
     * @param min Smallest value that the generated random number can take
     * @param max Greatest value that the generated random number can take
     * @param count The count of random numbers to be generated
     */
    public static generateRandomNumberList(min: number, max: number, count: number): number[] {
        return [...Array(count)].map(() => NumberUtilities.generateRandomNumber(min, max));
    }

    /**
     * Generates a list of random numbers that are unique. If the required count is bigger than
     * the numbers of all possible numbers that can be generated between the given min and max values,
     * then the resulting list will have less elements than the required size.
     * @param min Smallest value that the generated random number can take
     * @param max Greatest value that the generated random number can take
     * @param count The count of random numbers to be generated
     * @return A list of randomly-generated unique numbers
     */
    public static generateUniqueRandomNumberList(min: number, max: number, count: number): number[] {
        if (count >= max - min + 1) {
            return [...Array(max - min + 1).keys()].map(v => v + min);
        }
        const numbers: number[] = [];
        const numberDict: Record<number, boolean> = {};
        let i = Math.min(count, max - min + 1);
        while (i > 0) {
            const int = NumberUtilities.generateRandomNumber(min, max);
            if (!numberDict[int]) {
                numberDict[int] = true;
                numbers.push(int);
                --i;
            }
        }
        return numbers;
    }

    /**
     * Checks if a given value is a numerical value. This method will return true for numerical strings such as "123" or "2.54"
     * @param value The value which will be tested whether it is numeric or not.
     * @return true if value is numeric, false otherwise.
     */
    public static isNumeric(value: string | number): boolean {
        return !isNaN(parseFloat(value as string)) && isFinite(value as number);
    }

    /**
     * Finds the maximum item in an iterable source.
     * @param iterable The data source
     * @param selector A selector method which will return a key that will be used for comparison.
     * @return The item which has the maximum value according to the selector method, or null if iterable is empty.
     * @throws An exception if iterable is null or undefined.
     */
    public static max<TElement>(iterable: Iterable<TElement>, selector?: (item: TElement) => number): TElement | null {
        const iterator = iterable[Symbol.iterator]();
        let iteratorItem = iterator.next();
        let maxItem: TElement;
        if (iteratorItem.done) {
            return null;
        }
        maxItem = iteratorItem.value;
        while (!iteratorItem.done) {
            if (selector) {
                const value = selector(iteratorItem.value);
                const maxValue = selector(maxItem);
                if (value > maxValue) {
                    maxItem = iteratorItem.value;
                }
            } else {
                if (iteratorItem.value > maxItem) {
                    maxItem = iteratorItem.value;
                }
            }
            iteratorItem = iterator.next();
        }
        return maxItem;
    }

    /**
     * Finds the minimum item in an iterable source.
     * @param iterable The data source
     * @param selector A selector method which will return a key that will be used for comparison.
     * @return The item which has the minimum value according to the selector method, or null if iterable is empty.
     * @throws An exception if iterable is null or undefined.
     */
    public static min<TElement>(iterable: Iterable<TElement>, selector?: (item: TElement) => number): TElement | null {
        const iterator = iterable[Symbol.iterator]();
        let iteratorItem = iterator.next();
        let minItem: TElement;
        if (iteratorItem.done) {
            return null;
        }
        minItem = iteratorItem.value;
        while (!iteratorItem.done) {
            if (selector) {
                const value = selector(iteratorItem.value);
                const minValue = selector(minItem);
                if (value < minValue) {
                    minItem = iteratorItem.value;
                }
            } else {
                if (iteratorItem.value < minItem) {
                    minItem = iteratorItem.value;
                }
            }
            iteratorItem = iterator.next();
        }
        return minItem;
    }
}

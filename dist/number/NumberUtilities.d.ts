export declare abstract class NumberUtilities {
    private constructor();
    /**
     * Generates a random number between the given min-max intervals. The interval bounds, min and max, are inclusive.
     * @param min Smallest value that the generated random number can take
     * @param max Greatest value that the generated random number can take
     * @return A randomly generated number whose value is between [min, max].
     */
    static generateRandomNumber(min: number, max: number): number;
    /**
     * Generates a random number between the given min-max intervals. The interval bounds, min and max, are inclusive.
     * @param min Smallest value that the generated random number can take
     * @param max Greatest value that the generated random number can take
     * @param count The count of random numbers to be generated
     */
    static generateRandomNumberList(min: number, max: number, count: number): number[];
    /**
     * Generates a list of random numbers that are unique. If the required count is bigger than
     * the numbers of all possible numbers that can be generated between the given min and max values,
     * then the resulting list will have less elements than the required size.
     * @param min Smallest value that the generated random number can take
     * @param max Greatest value that the generated random number can take
     * @param count The count of random numbers to be generated
     * @return A list of randomly-generated unique numbers
     */
    static generateUniqueRandomNumberList(min: number, max: number, count: number): number[];
    /**
     * Checks if a given value is a numerical value. This method will return true for numerical strings such as "123" or "2.54"
     * @param value The value which will be tested whether it is numeric or not.
     * @return true if value is numeric, false otherwise.
     */
    static isNumeric(value: string | number): boolean;
    /**
     * Finds the maximum item in an iterable source.
     * @param iterable The data source
     * @param selector A selector method which will return a key that will be used for comparison.
     * @return The item which has the maximum value according to the selector method, or null if iterable is empty.
     * @throws An exception if iterable is null or undefined.
     */
    static max<TElement>(iterable: Iterable<TElement>, selector?: (item: TElement) => number): TElement | null;
    /**
     * Finds the minimum item in an iterable source.
     * @param iterable The data source
     * @param selector A selector method which will return a key that will be used for comparison.
     * @return The item which has the minimum value according to the selector method, or null if iterable is empty.
     * @throws An exception if iterable is null or undefined.
     */
    static min<TElement>(iterable: Iterable<TElement>, selector?: (item: TElement) => number): TElement | null;
}

export declare abstract class StringUtilities {
    private constructor();
    /**
     * Generates a random string with the given length. If the characters parameter is provided,
     * the string will be formed based on that characters. Otherwise, it will use [a-zA-Z0-9] values.
     * Taken from: https://stackoverflow.com/a/1349426
     * @param length The length of the generated string
     * @param characters The characters from which the string will be generated.
     * @return A randomly generated string.
     */
    static generateRandomString(length: number, characters?: string): string;
}

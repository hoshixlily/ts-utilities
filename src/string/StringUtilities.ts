export abstract class StringUtilities {
    /**
     * Generates a random string with the given length. If the characters parameter is provided,
     * the string will be formed based on that characters. Otherwise, it will use [a-zA-Z0-9] values.
     * Taken from: https://stackoverflow.com/a/1349426
     * @param length The length of the generated string
     * @param characters The characters from which the string will be generated.
     * @return A randomly generated string.
     */
    public static generateRandomString(length: number, characters?: string): string {
        let result: string[] = [];
        characters ??= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
        }
        return result.join("");
    }
}

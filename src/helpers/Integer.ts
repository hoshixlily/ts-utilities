export class Integer {
    /**
     * Decode a number from a string. Taken from Java's Integer.decode() method.
     * @param numStr The string to decode.
     * @return The decoded number.
     * @throws Error if the string is empty.
     * @throws Error if the sign character is in the wrong position.
     */
    public static decode(numStr: string): number {
        let radix = 10;
        let index = 0;
        let negative = false;
        let result: number;

        if (numStr.length === 0) {
            throw new Error("Empty string");
        }
        const firstChar = numStr.charAt(0);
        if (firstChar === "-") {
            negative = true;
            index++;
        } else if (firstChar === "+") {
            index++;
        }
        if (numStr.startsWith("0x", index) || numStr.startsWith("0X", index)) {
            index += 2;
            radix = 16;
        } else if (numStr.startsWith("#")) {
            index++;
            radix = 16;
        } else if (numStr.startsWith("0", index) && numStr.length > 1 + index) {
            index++;
            radix = 8;
        }
        if (numStr.startsWith("-", index) || numStr.startsWith("+", index)) {
            throw new Error("Sign character in wrong position");
        }
        try {
            result = parseInt(numStr.substring(index), radix);
            result = negative ? -result : result;
        } catch (e: unknown) {
            const constant = negative ? "-" + numStr.substring(index) : numStr.substring(index);
            result = parseInt(constant, radix);
        }
        return result;
    }
}

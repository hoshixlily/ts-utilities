export declare class Integer {
    /**
     * Decode a number from a string. Taken from Java's Integer.decode() method.
     * @param numStr The string to decode.
     * @return The decoded number.
     * @throws Error if the string is empty.
     * @throws Error if the sign character is in the wrong position.
     */
    static decode(numStr: string): number;
}

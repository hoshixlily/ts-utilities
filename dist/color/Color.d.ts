import { RGB, RGBA } from "./RGB";
/**
 * A simple class for representing colors.<br/>
 * Most of the logic for this class was taken from the <b>java.awt.Color</b> class.
 */
export declare class Color {
    private static readonly Factor;
    static readonly Black: Color;
    static readonly Blue: Color;
    static readonly Cyan: Color;
    static readonly DarkGray: Color;
    static readonly Gray: Color;
    static readonly Green: Color;
    static readonly LightGray: Color;
    static readonly Magenta: Color;
    static readonly Orange: Color;
    static readonly Pink: Color;
    static readonly Red: Color;
    static readonly White: Color;
    static readonly Yellow: Color;
    private readonly value;
    readonly hex: string;
    constructor();
    constructor(red: number, green: number, blue: number, alpha?: number);
    private static checkHexValidity;
    private static convertNumberToHex;
    private static convertToLongHex;
    private static decode;
    private static testColorValueRange;
    /**
     * Creates a color object from the given hex string. This method will throw an error if the given hex string is invalid.
     * @param hexColor The hex string from which the color object will be created.
     * @return A color object which represents the color given by the hexColor parameter.
     * @throws An exception if the given hexColor parameter is not a valid color string.
     */
    static createFromHexString(hexColor: string): Color;
    /**
     * Creates and returns a brighter version of this color by using an arbitrary factor.
     * @return A new color object that is brighter than this color.
     */
    brighter(): Color;
    /**
     * Creates and returns a darker version of this color by using an arbitrary factor.
     * @return A new color object that is darker than this color.
     */
    darker(): Color;
    /**
     * Checks if this color has the same rgb value with the given color.
     * @param color true if colors have the same rgb value, false otherwise.
     */
    equals(color: Color): boolean;
    /**
     * Returns the alpha value of the color.
     * @returns the alpha value of the color
     */
    getAlpha(): number;
    /**
     * Returns the blue value of the color.
     * @returns the blue value of the color
     */
    getBlue(): number;
    /**
     * Returns the green value of the color.
     * @returns the green value of the color
     */
    getGreen(): number;
    /**
     * Returns the hex string version of this color. Returned string will have a leading # symbol.
     * @return the hex string version of this color
     */
    getHex(): string;
    /**
     * Returns the red value of the color.
     * @returns the red value of the color
     */
    getRed(): number;
    /**
     * Returns the integer value of this color.
     * @return the integer value of this color.
     */
    getRGB(): number;
    /**
     * Returns an object which contains the values of red, green, blue and alpha components of this color.
     * @return an object containing the R,G,B,A values of the color
     */
    getRGBAComponents(): RGBA;
    /**
     * Returns an object which contains the values of red, green and blue components of this color.
     * @return an object containing the R,G,B values of the color
     */
    getRGBComponents(): RGB;
}

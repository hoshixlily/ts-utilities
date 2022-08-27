import { Integer } from "../helpers/Integer";
import { RGB, RGBA } from "./RGB";

/**
 * A simple class for representing colors.<br/>
 * Most of the logic for this class was taken from the <b>java.awt.Color</b> class.
 */
export class Color {
    private static readonly Factor: number = 0.7;

    public static readonly Black = new Color(0, 0, 0);
    public static readonly Blue = new Color(0, 0, 255);
    public static readonly Cyan = new Color(0, 255, 255);
    public static readonly DarkGray = new Color(64, 64, 64);
    public static readonly Gray = new Color(128, 128, 128);
    public static readonly Green = new Color(0, 255, 0);
    public static readonly LightGray = new Color(192, 192, 192);
    public static readonly Magenta = new Color(255, 0, 255);
    public static readonly Orange = new Color(255, 200, 0);
    public static readonly Pink = new Color(255, 175, 175);
    public static readonly Red = new Color(255, 0, 0);
    public static readonly White = new Color(255, 255, 255);
    public static readonly Yellow = new Color(255, 255, 0);

    private readonly value: number = 0;
    public readonly hex: string = "";

    public constructor();
    public constructor(red: number, green: number, blue: number, alpha?: number);
    public constructor(red: number = 0, green: number = 0, blue: number = 0, alpha: number = 1) {
        this.value = ((alpha & 0xff) << 24) | ((red & 0xff) << 16) | ((green & 0xff) << 8) | ((blue & 0xff) << 0);
        this.hex = `#${Color.convertNumberToHex(red)}${Color.convertNumberToHex(green)}${Color.convertNumberToHex(
            blue
        )}`.toUpperCase();
        Color.testColorValueRange(red, green, blue, alpha);
    }

    private static checkHexValidity(hex: string): void {
        const hashedHex = hex.startsWith("#") ? hex : "#" + hex;
        if (hashedHex.length === 4 || hashedHex.length === 7) {
            return;
        }
        throw new Error("Invalid hex format");
    }

    private static convertNumberToHex(num: number): string {
        const hex = num.toString(16);
        return hex.length === 1 ? `0${hex}` : hex;
    }

    private static convertToLongHex(shortHex: string): string {
        const hasHash = shortHex.startsWith("#");
        const hexWithoutHash = hasHash ? shortHex.substring(1) : shortHex;
        if (hexWithoutHash.length !== 3) {
            throw new Error("Invalid hex");
        }
        const longHex = `${hexWithoutHash.charAt(0).repeat(2)}${hexWithoutHash.charAt(1).repeat(2)}${hexWithoutHash
            .charAt(2)
            .repeat(2)}`;
        return hasHash ? `#${longHex}` : longHex;
    }

    private static decode(colorString: string): Color {
        const intValue = Integer.decode(colorString);
        return new Color((intValue >> 16) & 0xff, (intValue >> 8) & 0xff, intValue & 0xff);
    }

    private static testColorValueRange(red: number, green: number, blue: number, alpha: number): void {
        let rangeError = false;
        let badComponentString = "";
        if (alpha < 0 || alpha > 255) {
            rangeError = true;
            badComponentString = `${badComponentString} Alpha`;
        }
        if (red < 0 || red > 255) {
            rangeError = true;
            badComponentString = `${badComponentString} Red`;
        }
        if (green < 0 || green > 255) {
            rangeError = true;
            badComponentString = `${badComponentString} Green`;
        }
        if (blue < 0 || blue > 255) {
            rangeError = true;
            badComponentString = `${badComponentString} Blue`;
        }
        if (rangeError) {
            throw new Error("Color parameter outside of expected range: " + badComponentString);
        }
    }

    /**
     * Creates a color object from the given hex string. This method will throw an error if the given hex string is invalid.
     * @param hexColor The hex string from which the color object will be created.
     * @return A color object which represents the color given by the hexColor parameter.
     * @throws An exception if the given hexColor parameter is not a valid color string.
     */
    public static createFromHexString(hexColor: string): Color {
        Color.checkHexValidity(hexColor);
        if (!hexColor.startsWith("#")) {
            hexColor = "#" + hexColor;
        }
        const hex = hexColor.length === 7 ? hexColor : Color.convertToLongHex(hexColor);
        return Color.decode(hex);
    }

    /**
     * Creates and returns a brighter version of this color by using an arbitrary factor.
     * @return A new color object that is brighter than this color.
     */
    public brighter(): Color {
        let red = this.getRed();
        let green = this.getGreen();
        let blue = this.getBlue();
        let alpha = this.getAlpha();
        const i = Math.trunc(1.0 / (1.0 - Color.Factor));

        if (red === 0 && green === 0 && blue === 0) {
            return new Color(i, i, i, alpha);
        }
        if (red > 0 && red < i) {
            red = i;
        }
        if (green > 0 && green < i) {
            green = i;
        }
        if (blue > 0 && blue < i) {
            blue = i;
        }
        return new Color(
            Math.min(Math.trunc(red / Color.Factor), 255),
            Math.min(Math.trunc(green / Color.Factor), 255),
            Math.min(Math.trunc(blue / Color.Factor), 255),
            alpha
        );
    }

    /**
     * Creates and returns a darker version of this color by using an arbitrary factor.
     * @return A new color object that is darker than this color.
     */
    public darker(): Color {
        return new Color(
            Math.max(Math.trunc(this.getRed() * Color.Factor), 0),
            Math.max(Math.trunc(this.getGreen() * Color.Factor), 0),
            Math.max(Math.trunc(this.getBlue() * Color.Factor), 0),
            this.getAlpha()
        );
    }

    /**
     * Checks if this color has the same rgb value with the given color.
     * @param color true if colors have the same rgb value, false otherwise.
     */
    public equals(color: Color): boolean {
        return color instanceof Color && color.getRGB() === this.getRGB();
    }

    /**
     * Returns the alpha value of the color.
     * @returns the alpha value of the color
     */
    public getAlpha(): number {
        return (this.getRGB() >> 24) & 0xff;
    }

    /**
     * Returns the blue value of the color.
     * @returns the blue value of the color
     */
    public getBlue(): number {
        return (this.getRGB() >> 0) & 0xff;
    }

    /**
     * Returns the green value of the color.
     * @returns the green value of the color
     */
    public getGreen(): number {
        return (this.getRGB() >> 8) & 0xff;
    }

    /**
     * Returns the hex string version of this color. Returned string will have a leading # symbol.
     * @return the hex string version of this color
     */
    public getHex(): string {
        return this.hex;
    }

    /**
     * Returns the red value of the color.
     * @returns the red value of the color
     */
    public getRed(): number {
        return (this.getRGB() >> 16) & 0xff;
    }

    /**
     * Returns the integer value of this color.
     * @return the integer value of this color.
     */
    public getRGB(): number {
        return this.value;
    }

    /**
     * Returns an object which contains the values of red, green, blue and alpha components of this color.
     * @return an object containing the R,G,B,A values of the color
     */
    public getRGBAComponents(): RGBA {
        return new RGBA(this.getRed(), this.getGreen(), this.getBlue(), this.getAlpha());
    }

    /**
     * Returns an object which contains the values of red, green and blue components of this color.
     * @return an object containing the R,G,B values of the color
     */
    public getRGBComponents(): RGB {
        return new RGB(this.getRed(), this.getGreen(), this.getBlue());
    }
}

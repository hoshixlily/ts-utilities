import { Color } from "./Color";
export declare abstract class ColorUtilities {
    /**
     * Generates a gradient palette using the given startColor and endColor values. The size of the palette is determined by the
     * colorCount parameter.
     * @param startColor Left side color of the palette. It can be a color object or a valid hex string.
     * @param endColor Right side color of the palette. It can be a color object or a valid hex string.
     * @param colorCount The number of colors elements of the palette
     * @return An array of color objects which represents the colors of the palette
     * @throws An exception if the given colors are invalid.
     */
    static generateGradientPalette(startColor: Color | string, endColor: Color | string, colorCount: number): Color[];
    /**
     * Generates a random color.
     * @return A color object which represents the randomly-generated color.
     */
    static generateRandomColor(): Color;
    /**
     * Generates a list of random colors.
     * @param size Number of colors to be generated.
     * @return An array of randomly-created Color objects.
     */
    static generateRandomColorList(size: number): Color[];
}

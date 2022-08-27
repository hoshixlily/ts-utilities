import { Color } from "./Color";

export abstract class ColorUtilities {
    /**
     * Generates a gradient palette using the given startColor and endColor values. The size of the palette is determined by the
     * colorCount parameter.
     * @param startColor Left side color of the palette. It can be a color object or a valid hex string.
     * @param endColor Right side color of the palette. It can be a color object or a valid hex string.
     * @param colorCount The number of colors elements of the palette
     * @return An array of color objects which represents the colors of the palette
     * @throws An exception if the given colors are invalid.
     */
    public static generateGradientPalette(
        startColor: Color | string,
        endColor: Color | string,
        colorCount: number
    ): Color[] {
        const startRGB =
            typeof startColor === "string"
                ? Color.createFromHexString(startColor).getRGBComponents()
                : startColor.getRGBComponents();
        const endRGB =
            typeof endColor === "string"
                ? Color.createFromHexString(endColor).getRGBComponents()
                : endColor.getRGBComponents();
        let alpha = 0.0;
        const palette: Color[] = [];

        palette.push(endColor instanceof Color ? endColor : Color.createFromHexString(endColor));
        for (let pi = 1; pi < colorCount - 1; ++pi) {
            alpha += 1.0 / colorCount;
            const r = Math.trunc(startRGB.RED * alpha + (1 - alpha) * endRGB.RED);
            const g = Math.trunc(startRGB.GREEN * alpha + (1 - alpha) * endRGB.GREEN);
            const b = Math.trunc(startRGB.BLUE * alpha + (1 - alpha) * endRGB.BLUE);
            const color = new Color(r, g, b);
            palette.push(color);
        }
        palette.push(startColor instanceof Color ? startColor : Color.createFromHexString(startColor));
        return palette.reverse();
    }

    /**
     * Generates a random color.
     * @return A color object which represents the randomly-generated color.
     */
    public static generateRandomColor(): Color {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return Color.createFromHexString(color);
    }

    /**
     * Generates a list of random colors.
     * @param size Number of colors to be generated.
     * @return An array of randomly-created Color objects.
     */
    public static generateRandomColorList(size: number): Color[] {
        const colors: Color[] = [];
        for (let cx = 0; cx < size; ++cx) {
            colors.push(ColorUtilities.generateRandomColor());
        }
        return colors;
    }
}

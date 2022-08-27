/**
 * Represents an RGB color.
 */
export class RGB {
    /**
     * The blue value of the color.
     */
    public readonly BLUE: number = 0;

    /**
     * The green value of the color.
     */
    public readonly GREEN: number = 0;

    /**
     * The red value of the color.
     */
    public readonly RED: number = 0;

    public constructor(r: number, g: number, b: number) {
        this.ensureRGBValueIsInRange(r);
        this.ensureRGBValueIsInRange(g);
        this.ensureRGBValueIsInRange(b);
        this.RED = r;
        this.GREEN = g;
        this.BLUE = b;
    }

    protected ensureRGBValueIsInRange(value: number): void {
        if (value < 0 || value > 255) {
            throw new Error(`RGB value must be between 0 and 255. Value: ${value}`);
        }
    }
}

/**
 * Represents an RGBA color.
 */
export class RGBA extends RGB {
    /**
     * The alpha value of the color.
     */
    public readonly ALPHA: number = 0;

    public constructor(r: number, g: number, b: number, a: number) {
        super(r, g, b);
        super.ensureRGBValueIsInRange(a);
        this.ALPHA = a;
    }
}

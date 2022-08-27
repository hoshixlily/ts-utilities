/**
 * Represents an RGB color.
 */
export declare class RGB {
    /**
     * The blue value of the color.
     */
    readonly BLUE: number;
    /**
     * The green value of the color.
     */
    readonly GREEN: number;
    /**
     * The red value of the color.
     */
    readonly RED: number;
    constructor(r: number, g: number, b: number);
    protected ensureRGBValueIsInRange(value: number): void;
}
/**
 * Represents an RGBA color.
 */
export declare class RGBA extends RGB {
    /**
     * The alpha value of the color.
     */
    readonly ALPHA: number;
    constructor(r: number, g: number, b: number, a: number);
}

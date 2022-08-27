export abstract class MathUtilities {
    private constructor() {}

    /**
     * Converts degrees to radians
     * @param degree The degree value that will be converted to radians.
     * @return The radian equal of the given degree
     */
    public static degreeToRadian(degree: number): number {
        return degree * (Math.PI / 180.0);
    }

    /**
     * Converts radians to degrees
     * @param radian The radian value that will be converted to degrees.
     * @return The degree equal of the given radian
     */
    public static radianToDegree(radian: number): number {
        return radian * (180.0 / Math.PI);
    }
}

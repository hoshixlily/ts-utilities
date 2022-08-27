import { describe, it } from "mocha";
import { expect } from "chai";
import { MathUtilities } from "../../src/math/MathUtilities";

describe("MathUtils", () => {
    describe("#degreeToRadian()", () => {
        it("should convert degrees to radians", () => {
            expect(MathUtilities.degreeToRadian(0)).to.eq(0);
            const rad90 = parseFloat(MathUtilities.degreeToRadian(90).toFixed(10));
            const rad180 = parseFloat(MathUtilities.degreeToRadian(180).toFixed(10));
            const rad270 = parseFloat(MathUtilities.degreeToRadian(270).toFixed(10));
            expect(rad90).to.eq(1.5707963268);
            expect(rad180).to.eq(3.1415926536);
            expect(rad270).to.eq(4.7123889804);
        });
    });
    describe("#degreeToRadian()", () => {
        it("should convert radians to degrees", () => {
            expect(MathUtilities.degreeToRadian(0)).to.eq(0);
            const rad1 = parseFloat(MathUtilities.radianToDegree(1.5707963268).toFixed(0));
            const rad3 = parseFloat(MathUtilities.radianToDegree(3.1415926536).toFixed(0));
            const rad4 = parseFloat(MathUtilities.radianToDegree(4.7123889804).toFixed(0));
            expect(rad1).to.eq(90);
            expect(rad3).to.eq(180);
            expect(rad4).to.eq(270);
        });
    });
});

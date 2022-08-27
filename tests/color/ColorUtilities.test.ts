import { describe, it } from "mocha";
import { expect } from "chai";
import { Color } from "../../src/color/Color";
import { ColorUtilities } from "../../src/color/ColorUtilities";

describe("ColorUtils", () => {
    const isValidColor = (r: number, g: number, b: number) =>
        r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255;
    describe("#generateGradientPalette()", () => {
        it("should generate a gradient palette with given size", () => {
            const size = 8;
            const palette = ColorUtilities.generateGradientPalette(
                new Color(255, 255, 255),
                Color.createFromHexString("#000"),
                size
            );
            const results = palette.map(p => isValidColor(p.getRed(), p.getGreen(), p.getBlue()));
            const expectedResults = new Array(size).fill(true);
            expect(palette.length).to.eq(8);
            expect(results).to.deep.equal(expectedResults);
        });
        it("should generate a gradient palette from hex strings", () => {
            const size = 8;
            const palette = ColorUtilities.generateGradientPalette("#000000", "#F68A01", size);
            const results = palette.map(p => isValidColor(p.getRed(), p.getGreen(), p.getBlue()));
            const expectedResults = new Array(size).fill(true);
            expect(palette.length).to.eq(8);
            expect(results).to.deep.equal(expectedResults);
        });
        it("should have given colors as its start and end colors", () => {
            const size = 10;
            const palette = ColorUtilities.generateGradientPalette("#000", "#FFF", size);
            const first = palette[0];
            const last = palette[palette.length - 1];
            expect(first.hex.toUpperCase()).to.eq("#000000");
            expect(last.hex.toUpperCase()).to.eq("#FFFFFF");
        });
    });
    describe("#generateRandomColor()", () => {
        it("should generate a random Color instance", () => {
            const randomColor = ColorUtilities.generateRandomColor();
            const rgb = randomColor.getRGBComponents();
            expect(rgb.RED).to.be.lessThanOrEqual(255).and.to.be.greaterThanOrEqual(0);
            expect(rgb.GREEN).to.be.lessThanOrEqual(255).and.to.be.greaterThanOrEqual(0);
            expect(rgb.BLUE).to.be.lessThanOrEqual(255).and.to.be.greaterThanOrEqual(0);
        });
    });
    describe("#generateRandomColorList()", () => {
        it("should generate a list of randomly-generated colors", () => {
            const randomColorList = ColorUtilities.generateRandomColorList(20);
            expect(randomColorList.length).to.eq(20);
        });
    });
});

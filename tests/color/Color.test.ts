import { describe, it } from "mocha";
import { expect } from "chai";
import { Color } from "../../src/color/Color";

describe("Color", () => {
    describe("#brighter()", () => {
        it("should return a brighter version of the color", () => {
            const color = new Color(16, 101, 61);
            const brighterColor = color.brighter();
            const rgb = brighterColor.getRGBComponents();
            expect(rgb.RED).to.eq(22);
            expect(rgb.GREEN).to.eq(144);
            expect(rgb.BLUE).to.eq(87);
        });
        it("should return black as black with same alpha value", () => {
            const black1 = new Color(0, 0, 0, 100);
            const black2 = new Color(0, 0, 0, 222);
            const brightBlack1 = black1.brighter();
            const brightBlack2 = black2.brighter();
            expect(brightBlack1.equals(new Color(3, 3, 3, 100))).to.be.true;
            expect(brightBlack2.equals(new Color(3, 3, 3, 222))).to.be.true;
        });
        it("should handle low values", () => {
            const lowRed = new Color(1, 222, 134);
            const lowGreen = new Color(222, 1, 134);
            const lowBlue = new Color(222, 134, 1);
            expect(lowRed.brighter().getRed()).to.eq(4);
            expect(lowGreen.brighter().getGreen()).to.eq(4);
            expect(lowBlue.brighter().getBlue()).to.eq(4);
        });
    });
    describe("#constructor()", () => {
        it("should create black color as default", () => {
            expect(new Color().equals(Color.Black)).to.be.true;
        });
        it("should throw error if one or more of the red, green, blue, alpha values is invalid", () => {
            expect(() => new Color(333, 12, 211)).to.throw;
            expect(() => new Color(33, 1112, 211)).to.throw;
            expect(() => new Color(73, 12, 2117)).to.throw;
            expect(() => new Color(333, 12, 211)).to.throw;
            expect(() => new Color(0, 37, 72, 999)).to.throw;
        });
    });
    describe("#createFromHexString()", () => {
        it("should create Color class instances from hex color string", () => {
            const hexColors = ["#FF0000", "#00FF00", "#0000FF", "#800080", "#00A9FF", "#00a86b"];
            const decodedColors = hexColors.map(hc => Color.createFromHexString(hc));
            expect([decodedColors[0].getRed(), decodedColors[0].getGreen(), decodedColors[0].getBlue()]).to.deep.equal([
                255, 0, 0
            ]);
            expect([decodedColors[1].getRed(), decodedColors[1].getGreen(), decodedColors[1].getBlue()]).to.deep.equal([
                0, 255, 0
            ]);
            expect([decodedColors[2].getRed(), decodedColors[2].getGreen(), decodedColors[2].getBlue()]).to.deep.equal([
                0, 0, 255
            ]);
            expect([decodedColors[3].getRed(), decodedColors[3].getGreen(), decodedColors[3].getBlue()]).to.deep.equal([
                128, 0, 128
            ]);
            expect([decodedColors[4].getRed(), decodedColors[4].getGreen(), decodedColors[4].getBlue()]).to.deep.equal([
                0, 169, 255
            ]);
            expect([decodedColors[5].getRed(), decodedColors[5].getGreen(), decodedColors[5].getBlue()]).to.deep.equal([
                0, 168, 107
            ]);
        });
        it("should work without # symbol", () => {
            const hex = "0000FF";
            const rgb = Color.createFromHexString(hex).getRGBComponents();
            expect([rgb.RED, rgb.GREEN, rgb.BLUE]).to.deep.equal([0, 0, 255]);
        });
        it("should work with short hex format", () => {
            const hex = "#ABC";
            const rgb = Color.createFromHexString(hex).getRGBComponents();
            expect([rgb.RED, rgb.GREEN, rgb.BLUE]).to.deep.equal([170, 187, 204]);
        });
        it("should work with short hex format and without # symbol", () => {
            const hex = "ABC";
            const rgb = Color.createFromHexString(hex).getRGBComponents();
            expect([rgb.RED, rgb.GREEN, rgb.BLUE]).to.deep.equal([170, 187, 204]);
        });
        it("should throw error if hex string is not a valid color", () => {
            expect(() => Color.createFromHexString("#GGG")).to.throw;
            expect(() => Color.createFromHexString("#F")).to.throw;
            expect(() => Color.createFromHexString("#AB")).to.throw;
            expect(() => Color.createFromHexString("#FABC")).to.throw;
            expect(() => Color.createFromHexString("#12345")).to.throw;
            expect(() => Color.createFromHexString("#FFFFFW")).to.throw;
        });
    });
    describe("#darker()", () => {
        it("should return a darker version of the color", () => {
            const color = new Color(16, 101, 61);
            const darkerColor = color.darker();
            const rgb = darkerColor.getRGBComponents();
            expect(rgb.RED).to.eq(11);
            expect(rgb.GREEN).to.eq(70);
            expect(rgb.BLUE).to.eq(42);
        });
    });
    describe("#equals()", () => {
        it("should return true for same colors", () => {
            const color1 = new Color(132, 114, 21);
            const color2 = new Color(132, 114, 21);
            expect(color1.equals(color2)).to.be.true;
        });
        it("should return false for different colors", () => {
            const color1 = Color.createFromHexString("#ABCDEF");
            const color2 = Color.createFromHexString("#ABCDEE");
            expect(color1.equals(color2)).to.be.false;
        });
    });
    describe("#getBlue()", () => {
        it("should return the blue value of the color", () => {
            const color = Color.createFromHexString("#EADDA0");
            const blue = color.getBlue();
            expect(blue).to.eq(160);
        });
    });
    describe("#getGreen()", () => {
        it("should return the green value of the color", () => {
            const color = Color.createFromHexString("#C90F55");
            const blue = color.getGreen();
            expect(blue).to.eq(15);
        });
    });
    describe("#getHex()", () => {
        it("should return hex string of the color", () => {
            const yellowHex = Color.Yellow.getHex();
            expect(yellowHex).to.eq("#FFFF00");
            expect(yellowHex).to.eq(Color.Yellow.hex);
        });
    });
    describe("#getRed()", () => {
        it("should return the red value of the color", () => {
            const color = Color.createFromHexString("#1041CA");
            const blue = color.getRed();
            expect(blue).to.eq(16);
        });
    });
    describe("#getRGBAComponents()", () => {
        it("should return an object containing RGBA values of the color", () => {
            const color = new Color(0, 168, 107, 99);
            const rgba = color.getRGBAComponents();
            expect(rgba.RED).to.eq(0);
            expect(rgba.GREEN).to.eq(168);
            expect(rgba.BLUE).to.eq(107);
            expect(rgba.ALPHA).to.eq(99);
        });
    });
    describe("#getRGBComponents()", () => {
        it("should return an object containing RGB values of the color", () => {
            const color = Color.createFromHexString("#FF00FF");
            const rgb = color.getRGBComponents();
            expect(rgb.RED).to.eq(255);
            expect(rgb.GREEN).to.eq(0);
            expect(rgb.BLUE).to.eq(255);
        });
    });
});

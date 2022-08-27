import { describe, it } from "mocha";
import { expect } from "chai";
import { NumberUtilities } from "../../src/number/NumberUtilities";
import { DataUtilities } from "../../src/data/DataUtilities";

describe("NumberUtilities", () => {
    describe("#generateRandomNumber()", () => {
        it("should generate random numbers between the given interval", () => {
            const randomNumberList: number[] = [];
            for (let nx = 0; nx < 100; ++nx) {
                randomNumberList.push(NumberUtilities.generateRandomNumber(1, 100));
            }
            for (let tx = 0; tx < randomNumberList.length; ++tx) {
                expect(randomNumberList[tx]).to.be.greaterThanOrEqual(1).and.lessThanOrEqual(100);
            }
        });
        it("should generate the same number when intervals are equal", () => {
            const randomNumberList: number[] = [];
            for (let nx = 0; nx < 50; ++nx) {
                randomNumberList.push(NumberUtilities.generateRandomNumber(44, 44));
            }
            for (let tx = 0; tx < randomNumberList.length; ++tx) {
                expect(randomNumberList[tx]).to.eq(44);
            }
        });
    });
    describe("#generateRandomNumberList()", () => {
        it("should generate a list of random numbers between the given interval", () => {
            const randomNumberList = NumberUtilities.generateRandomNumberList(1, 100, 150);
            const distinctNumberList = DataUtilities.distinct(randomNumberList);
            expect(randomNumberList.length).to.eq(150);
            expect(distinctNumberList.length).to.lessThan(150);
            expect(NumberUtilities.min(randomNumberList)).to.greaterThanOrEqual(1);
            expect(NumberUtilities.max(randomNumberList)).to.lessThanOrEqual(100);
        });
    });
    describe("#generateUniqueRandomNumbers()", () => {
        it("should generate a list of unique numbers", () => {
            const randomNumbers = NumberUtilities.generateUniqueRandomNumberList(1, 100, 100);
            const distinctNumbers = DataUtilities.distinct(randomNumbers);
            expect(randomNumbers.length).to.eq(100);
            expect(distinctNumbers.length).to.eq(100);
            expect(NumberUtilities.min(distinctNumbers)).to.eq(1);
            expect(NumberUtilities.max(distinctNumbers)).to.eq(100);
        });
        it("should generate a list of unique numbers #2", () => {
            const randomNumbers = NumberUtilities.generateUniqueRandomNumberList(93, 313, 20);
            const distinctNumbers = DataUtilities.distinct(randomNumbers);
            expect(randomNumbers.length).to.eq(20);
            expect(distinctNumbers.length).to.eq(20);
        });
        it("should have less than given count if there are not enough possible numbers to create", () => {
            const randomNumbers = NumberUtilities.generateUniqueRandomNumberList(25, 75, 999);
            const distinctNumbers = DataUtilities.distinct(randomNumbers);
            expect(randomNumbers.length).to.not.eq(999);
            expect(randomNumbers.length).to.eq(51);
            expect(distinctNumbers.length).to.eq(51);
        });
    });
    describe("#isNumeric()", () => {
        it("should return true if value is numeric", () => {
            const isNumeric1 = NumberUtilities.isNumeric(10);
            const isNumeric2 = NumberUtilities.isNumeric(2.71);
            const isNumeric3 = NumberUtilities.isNumeric(3.54e1);
            const isNumeric4 = NumberUtilities.isNumeric(-10);
            const isNumeric5 = NumberUtilities.isNumeric(-2.71);
            const isNumeric6 = NumberUtilities.isNumeric(-3.54e1);
            expect(isNumeric1).to.be.true;
            expect(isNumeric2).to.be.true;
            expect(isNumeric3).to.be.true;
            expect(isNumeric4).to.be.true;
            expect(isNumeric5).to.be.true;
            expect(isNumeric6).to.be.true;
        });
        it("should return true if the value is a numerical string", () => {
            const resultList = ["1", "1.4", "113.2021e+118", "0", "-4"].map(v => NumberUtilities.isNumeric(v));
            expect(resultList.includes(false)).to.be.false;
        });
        it("should return false if value is non-numeric", () => {
            const resultList = ["A", "+", "?", NaN, Infinity].map(v => NumberUtilities.isNumeric(v));
            expect(resultList.includes(true)).to.be.false;
        });
    });
    describe("#max()", () => {
        it("should return null if array is empty", () => {
            expect(NumberUtilities.max([])).to.be.null;
        });
        it("should pick the maximum element from a number array", () => {
            const list = [4, 35, 11, 10, 2, 0, 21, -9];
            const max = NumberUtilities.max(list);
            expect(max).to.eq(35);
        });
        it("should pick the maximum element from an object array", () => {
            const list = [
                { v1: 10, v2: 51, v3: "A" },
                { v1: -1, v2: 99, v3: "B" },
                { v1: 44, v2: 34, v3: "C" },
                { v1: 87, v2: 76, v3: "D" },
                { v1: 66, v2: -9, v3: "E" },
                { v1: 29, v2: 50, v3: "F" }
            ];
            const maxV1 = NumberUtilities.max(list, e => e.v1);
            const maxV2 = NumberUtilities.max(list, e => e.v2);
            expect(maxV1 === list[3]).to.be.true;
            expect(maxV2 === list[1]).to.be.true;
        });
    });
    describe("#min()", () => {
        it("should return null if array is empty", () => {
            expect(NumberUtilities.min([])).to.be.null;
        });
        it("should pick the minimum element from a number array", () => {
            const list = [4, 35, 11, 10, 2, 0, 21, -9];
            const max = NumberUtilities.min(list);
            expect(max).to.eq(-9);
        });
        it("should pick the minimum element from an object array", () => {
            const list = [
                { v1: 10, v2: 51, v3: "A" },
                { v1: -1, v2: 99, v3: "B" },
                { v1: 44, v2: 34, v3: "C" },
                { v1: 87, v2: 76, v3: "D" },
                { v1: 66, v2: -9, v3: "E" },
                { v1: 29, v2: 50, v3: "F" }
            ];
            const maxV1 = NumberUtilities.min(list, e => e.v1);
            const maxV2 = NumberUtilities.min(list, e => e.v2);
            expect(maxV1 === list[1]).to.be.true;
            expect(maxV2 === list[4]).to.be.true;
        });
    });
});

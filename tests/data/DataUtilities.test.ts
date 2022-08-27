import { describe, it } from "mocha";
import { expect } from "chai";
import { DataUtilities } from "../../src/data/DataUtilities";

describe("DataUtils", () => {
    describe("#distinct()", () => {
        it("should return an array of distinct values", () => {
            const array1 = [1, 1, 2, 3, 2, 3, 4];
            const array2 = [1, 1, 1];
            const array3 = [0];
            const array4 = [] as number[];
            const result1 = DataUtilities.distinct(array1);
            const result2 = DataUtilities.distinct(array2);
            const result3 = DataUtilities.distinct(array3);
            const result4 = DataUtilities.distinct(array4);
            expect(result1).to.deep.equal([1, 2, 3, 4]);
            expect(result2.length).to.eq(1);
            expect(result2[0]).to.eq(1);
            expect(result3.length).to.eq(1);
            expect(result3[0]).to.eq(0);
            expect(result4).to.be.empty;
        });
        it("should return an array of distinct objects determined by a key", () => {
            const list = [
                { v1: 0, v2: "A", v3: true },
                { v1: 0, v2: "a", v3: false },
                { v1: 0, v2: "B", v3: true },
                { v1: 0, v2: "B", v3: false },
                { v1: 1, v2: "A", v3: true },
                { v1: 1, v2: "A", v3: false },
                { v1: 1, v2: "B", v3: true },
                { v1: 1, v2: "B", v3: false }
            ];
            const dv1 = DataUtilities.distinct(list, i => i.v1);
            const dv2 = DataUtilities.distinct(
                list,
                i => i.v2,
                (s1, s2) => s1.toLowerCase() === s2.toLowerCase()
            );
            const dv3 = DataUtilities.distinct(
                list,
                i => i.v3,
                (b1, b2) => b1 === b2
            );
            expect(dv1).to.deep.equal([list[0], list[4]]);
            expect(dv2).to.deep.equal([list[0], list[2]]);
            expect(dv3).to.deep.equal([list[0], list[1]]);
        });
    });
});

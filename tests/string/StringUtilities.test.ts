import { describe, it } from "mocha";
import { expect } from "chai";
import { StringUtilities } from "../../src/string/StringUtilities";

describe("StringUtilities", () => {
    describe("#generateRandomString()", () => {
        it("should generate a random string with given length", () => {
            const randomStr = StringUtilities.generateRandomString(43);
            expect(randomStr.length).to.eq(43);
        });
        it("should use given base characters to create the random string", () => {
            const randomStr = StringUtilities.generateRandomString(100, "ABC123");
            expect(randomStr.includes("D")).to.be.false;
        });
    });
});

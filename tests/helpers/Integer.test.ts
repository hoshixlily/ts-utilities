import { describe, it } from "mocha";
import { expect } from "chai";
import { Integer } from "../../src/helpers/Integer";

describe("Integer", () => {
    describe("#decode()", () => {
        it("should throw error if hex string is empty", () => {
            expect(() => Integer.decode("")).to.throw(Error);
        });
        it("should throw error if sign character is in wrong position", () => {
            expect(() => Integer.decode("++2")).to.throw();
            expect(() => Integer.decode("--7")).to.throw();
        });
        it("should decode negative number string", () => {
            expect(Integer.decode("-33")).to.eq(-33);
        });
        it("should decode positive number string", () => {
            expect(Integer.decode("+33")).to.eq(33);
        });
        it("should decode base-16 number string", () => {
            expect(Integer.decode("0xFF")).to.eq(255);
            expect(Integer.decode("0xFF00")).to.eq(65280);
            expect(Integer.decode("0xAE")).to.eq(174);
        });
        it("should decode numbers starting with 0", () => {
            expect(Integer.decode("0101")).to.eq(65);
        });
        it("should decode hex string", () => {
            const hex = "#FF0000";
            const decodedNum = Integer.decode(hex);
            expect(decodedNum).to.eq(16711680);
        });
    });
});

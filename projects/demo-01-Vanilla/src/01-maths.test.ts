import { add } from "./01-maths.js";

describe("add", () => {

    test("should add two positive numbers", () => {
        const r = add(2, 3);
        expect(r).toBe(5);
    });
    test("should add two negative numbers", () => {
        const r = add(-2, -3);
        expect(r).toBe(-5);
    });
    test("should add a positive and a negative number", () => {
        const r = add(2, -3);
        expect(r).toBe(-1);
    });

})

import { sumMul } from "./lesson_1_1";
describe("sumMul", () => {
    it('returns sum and product of a and b', () => {
        expect(sumMul(1, 2)).toBe(`Сумма = 3; Произведение = 2.`);
    });
});
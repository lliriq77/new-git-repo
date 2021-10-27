import { sumMul } from "./lesson_1_1";
describe("sumMul", () => {
    it('returns sum = 3 and product = 2 of a = 1 and b = 2', () => {
        expect(sumMul(1, 2)).toBe(`Сумма = 3; Произведение = 2.`);
    });
});
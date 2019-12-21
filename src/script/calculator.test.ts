import * as Calculator from "./calculator";

test("adds 1 + 2 to equal 3", () => {
  expect(Calculator.add(1, 2)).toBe(3);
});

test("reduce 3 - 1 to equal 2", () => {
  expect(Calculator.reduce(1, 3)).toBe(2);
});

test("multiplication 2 * 3 to equal 6", () => {
  expect(Calculator.multiplication(2, 3)).toBe(6);
});

test("division 6 / 3 to equal 2", () => {
  expect(Calculator.division(3, 6)).toBe(2);
});

test("12 3 to equal 123", () => {
  expect(Calculator.makeNumber(12, 3)).toBe(123);
});

test("1 + 2 × 3 - 4 ÷ 5 to equal 3", () => {
  expect(Calculator.parseString2Formula("1 + 2 × 3 - 4")).toBe(3);
});

test("[1 + 2 × 3 - 4 ÷ 5] to equal 1 2 + 3 × 4 - 5 ÷", () => {
  expect(
    Calculator.arrange2RPN(["1", "+", "2", "×", "3", "-", "4", "÷", "5"])
  ).toMatchObject([1, 2, "+", 3, "×", 4, "-", 5, "÷"]);
});

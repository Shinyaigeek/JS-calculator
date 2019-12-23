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
  ).toMatchObject(["1", "2", "+", "3", "×", "4", "-", "5", "÷"]);
});

test("1 + ( 2 × ( 3 + ( 4 - 5 ) ) - 6 ) × 7 to equal to -13", () => {
  expect(
    Calculator.parseString2Formula("1 + ( 2 × ( 3 + ( 4 - 5 ) ) - 6 ) × 7")
  ).toBe(-13);
});

test("( ( 3 + 5 ) × 9 ) - 2 to equal to 70", () => {
  expect(Calculator.parseString2Formula("( ( 3 + 5 ) × 9 ) - 2")).toBe(70);
});

test("( ( 3 + 5 ) × 9 ) - ( 4 ÷ 2 ) to equal to 70", () => {
  expect(Calculator.parseString2Formula("( ( 3 + 5 ) × 9 ) - ( 4 ÷ 2 )")).toBe(70);
});

test("2 * 3 to equal to 8", () => {
  expect(Calculator.pow(2, 3)).toBe(8);
});

test("2 * 3 * 4 to equal to 4096", () => {
  expect(Calculator.calcPow("2^3^4")).toBe(4096);
});

test("3! equal to 6", () => {
  expect(Calculator.calcFactorial("3!"))
})

test("sin( π / 2 ) equal to 1", () => {
  expect(Calculator.calcSinFromMcLExpansion(Math.PI / 4)).toBe(0.707)
})

test("cos( π ) equal to -1", () => {
  expect(Calculator.calcCosFromMcLExpansion(Math.PI)).toBe(-1)
})

test("sin( 3 × π / 4 ) equal to 0.707", () => {
  expect(Calculator.parseString2Formula("sin( 3 × π ÷ 4 )")).toBe(0.707)
})

test("2 × sin( 3 × π ÷ 4 ) + ( 1 + 1 ) × cos( 5 × π ÷ ( 1 + 3 ) ) equal to 0.707", () => {
  expect(Calculator.parseString2Formula("2 × sin( 3 × π ÷ 4 ) + ( 1 + 1 ) × cos( 5 × π ÷ ( 1 + 3 ) )")).toBe(0)
})

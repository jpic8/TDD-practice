const calculator = require("../code/calculator");

test("4 + 2 = 6", () => {
  expect(calculator.add(4, 2)).toBe(6);
});
test("4 - 2 = 2", () => {
  expect(calculator.subtract(4, 2)).toBe(2);
});
test("4 * 2 = 8", () => {
  expect(calculator.multiply(4, 2)).toBe(8);
});
test("4 / 2 = 2", () => {
  expect(calculator.divide(4, 2)).toBe(2);
});

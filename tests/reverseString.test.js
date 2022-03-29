const reverseString = require("../code/reverseString");

test("hello becomes olleh", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("hello world becomes dlrow olleh", () => {
  expect(reverseString("hello world")).toBe("dlrow olleh");
});

test("abc becomes cba", () => {
  expect(reverseString("abc")).toBe("cba");
});

test("xyz becomes zyx", () => {
  expect(reverseString("xyz")).toBe("zyx");
});

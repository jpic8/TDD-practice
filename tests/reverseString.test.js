const reverseString = require("../code/reverseString");

test("hello becomes olleh", () => {
  expect(reverseString("hello")).toBe("olleh");
});

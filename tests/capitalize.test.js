const capitalize = require("../code/capitalize");

test("hello becomes Hello", () => {
  expect(capitalize("hello")).toBe("Hello");
});

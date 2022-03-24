const caesarCipher = require("../code/caesarCipher");

test("hello becomes ifmmp", () => {
  expect(caesarCipher("hello")).toBe("ifmmp");
});

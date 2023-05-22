const wordle = require("./wordle");

test("it can return five zeros when there are no matches", () => {
  const guess = "child";
  const target = "ropes";
  expect(wordle(guess, target)).toBe("00000");
});

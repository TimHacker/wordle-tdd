const wordle = require("./wordle");

test("it can return five zeros when there are no matches", () => {
  const guess = "child";
  const target = "ropes";
  expect(wordle(guess, target)).toBe("00000");
});

// Next time:
// We need to work if that's the best test to learn. (or should we do 00001)
// Make it green!

test("it can return five twos when everything matches (all the letters are in the correct position)", () => {
  const guess = "ropes";
  const target = "ropes";
  expect(wordle(guess, target)).toBe("22222");
});

// Homework

test("it can return four zeros and a one with single character match, wrong position", () => {
  const guess = "ropes";
  const target = "salty";
  expect(wordle(guess, target)).toBe("00001");
});

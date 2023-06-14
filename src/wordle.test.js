const wordle = require("./wordle");

test("it can return five zeros when there are no matches", () => {
  const guess = "child";
  const target = "ropes";
  expect(wordle(guess, target)).toBe("00000");
});

// Next time:
// We need to work if that's the best test to learn. (or should we do 00001)
// Make it green!

test("it can return five twos when everything matches (all the correct characters are in the correct position)", () => {
  const guess = "ropes";
  const target = "ropes";
  expect(wordle(guess, target)).toBe("22222");
});

test("it can return four zeros and a two with single character match, correct position (final character)", () => {
  const guess = "ropes";
  const target = "azyms";
 expect(wordle(guess, target)).toBe("00002");
});

// https://blog.codeleak.pl/2021/12/parameterized-tests-with-jest.html
// it.each([
//   [[21, 2], 42],
//   [[3, 7, 2], 42],
//   [[42, NaN], NaN],
//   [[42, Infinity], Infinity],
// ])
// 
test("it can return four zeros and a one with single character match, wrong position", () => {
  const guess = "ropes";
  const target = "salty";
  expect(wordle(guess, target)).toBe("00001");
});

test("it can return 2 correct positions and 1 not in the right position", () => {
  const guess = "braid";
  const target = "break";
  expect(wordle(guess, target)).toBe("22100");
});

test("it can return 1 correct positions and 2 not in the right position", () => {
  const guess = "sores";
  const target = "brass";
  expect(wordle(guess, target)).toBe("10102");
});
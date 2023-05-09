import { hello, fancyEs6Stuff } from "./index";

function wait(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

test("hello world", () => {
  expect(hello()).toBe("world");
});

test("async support", async () => {
  await wait(10);

  expect(true).toBe(true);
});

test("ES6 support", () => {
  expect(fancyEs6Stuff(["a", "b", "c"], [1, 2, 3])).toEqual([
    "a",
    "b",
    "c",
    1,
    2,
    3
  ]);
});

const getLargestEvenNumber = require("./largestEvenNumber.js");

test("return -1 if array has no even number", () => {
  expect(getLargestEvenNumber([1, 3, 5, 9, 11])).toBe(-1);
});
test("return 8 if input array is [1,2,3,4,5,6,7,8]", () => {
  expect(getLargestEvenNumber([1, 2, 3, 4, 5, 6, 7, 8])).toBe(8);
});
test("return 0 in case of empty array", () => {
  expect(getLargestEvenNumber([])).toBe(-1);
});

test("return 0 in case of array input [0]", () => {
  expect(getLargestEvenNumber([0])).toBe(0);
});

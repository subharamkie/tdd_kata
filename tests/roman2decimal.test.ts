import { convertRomanToDecimal } from "../src/roman2decimal";
describe("Convert Roman number to Decimal", () => {
  it.each([
    ["I", 1],
    ["V", 5],
    ["II", 2],
    ["IV", 4],
  ])("should return Decimal for %i", (x, result) => {
    expect(convertRomanToDecimal(x)).toBe(result);
  });
});

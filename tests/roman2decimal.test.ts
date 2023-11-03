import { convertRomanToDecimal } from "../src/roman2decimal";
describe("Convert Roman number to Decimal", () => {
  it.each([
    ["I", 1],
    ["V", 5],
    ["II", 2],
    ["IV", 4],
    ["VIII", 8],
    ["IX", 9],
    ["XII", 12],
    ["XIV", 14],
    ["XVIII", 18],
    ["XIX", 19],
    ["XXXIX", 39],
    ["XL", 40],
    ["LIX", 59],
    ["LXXII", 72],
    ["MCMLXXIX", 1979],
    ["MMIX", 2009],
    ["MMXVIII", 2018],
    ["CCCLXVII", 367],
    ["CMXCIX", 999],
    ["MCMXCIX", 1999],
  ])("should return Decimal for %i", (x, result) => {
    expect(convertRomanToDecimal(x)).toBe(result);
  });
});

describe("Error for empty string", () => {
  it("Throws error for empty string", () => {
    expect(() => convertRomanToDecimal("")).toThrow("String is empty");
  });
});

describe("Error with wrong letters", () => {
  it("Throws error for wrong letters", () => {
    expect(() => convertRomanToDecimal("MCVF")).toThrow("Ill formed string");
  });
});

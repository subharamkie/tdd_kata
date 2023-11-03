import { convertDecToRoman } from "../src/dec2roman";

describe("Test convert to roman function", () => {
  it.each([
    [18, "XVIII"],
    [19, "XIX"],
    [20, "XX"],
    [24, "XXIV"],
    [25, "XXV"],
    [34, "XXXIV"],
    [39, "XXXIX"],
    [40, "XL"],
    [44, "XLIV"],
    [45, "XLV"],
    [59, "LIX"],
    [72, "LXXII"],
    [1979, "MCMLXXIX"],
    [2009, "MMIX"],
    [2018, "MMXVIII"],
    [367, "CCCLXVII"],
    [999, "CMXCIX"],
    [1999, "MCMXCIX"],
  ])("should return Roman numeral for %i", (x, result) => {
    expect(convertDecToRoman(x)).toBe(result);
  });
});
describe("Checking wrong input to dec2Roman function", () => {
  it("Should throw error for value > 3000", () => {
    expect(() => convertDecToRoman(3214)).toThrow(
      "Number has to be less than 3000"
    );
  });
});

describe("Checking float value input ", () => {
  it("Should throw error for non integer values", () => {
    expect(() => convertDecToRoman(3.14)).toThrow(
      "Number has to be an integer"
    );
  });
});

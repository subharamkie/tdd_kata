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

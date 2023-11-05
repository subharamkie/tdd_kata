import { calculateTotalScore } from "../src/bowlingScore";
describe("Calculate Bowling scores", () => {
  it("return the calculated score", () => {
    //Arrange
    const scoreArray = [
      [9, "-"],
      [9, "-"],
      [9, "-"],
      [9, "-"],
      [9, "-"],
      [9, "-"],
      [9, "-"],
      [9, "-"],
      [9, "-"],
      [9, "-"],
    ];
    //Act & assert
    expect(calculateTotalScore(scoreArray)).toBe(90);
  });
});
describe("Calculate Bowling scores", () => {
  it("return the calculated score", () => {
    //Arrange
    const scoreArray = [
      [5, "/"],
      [5, "/"],
      [5, "/"],
      [5, "/"],
      [5, "/"],
      [5, "/"],
      [5, "/"],
      [5, "/"],
      [5, "/"],
      [5, "/", 5],
    ];
    //Act & assert
    expect(calculateTotalScore(scoreArray)).toBe(150);
  });
});

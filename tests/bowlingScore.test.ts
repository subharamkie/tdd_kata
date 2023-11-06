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
describe("Calculate Bowling scores", () => {
  it("return the calculated score", () => {
    //Arrange
    const scoreArray = [
      [2, 7],
      [6, 2],
      [4, "/"],
      [9, "/"],
      [4, 5],
      [9, "-"],
      [6, 3],
      [5, "/"],
      [7, "/"],
      [4, 5],
    ];
    //Act & assert
    expect(calculateTotalScore(scoreArray)).toBe(117);
  });
});

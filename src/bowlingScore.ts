type Matrix = (string | number)[][];
export function calculateTotalScore(inputMatrix: Matrix): number {
  const matrixLength = inputMatrix.length;

  //if not of length 10, return error
  if (matrixLength !== 10)
    throw new Error("Input array needs to be of length 10");

  let totalScore: number = 0;
  let spareOrStrike: number = 0; //this value will be 0|1(spare)|2(strike)
  let previousValue: number = 0;
  const STRIKESPARE_MULTIPLIER: number = 2;

  for (let i = 0; i < matrixLength; i++) {
    inputMatrix[i].forEach((value) => {
      if (value !== "-" && typeof value === "number") {
        if (spareOrStrike > 0) {
          totalScore += value * STRIKESPARE_MULTIPLIER;
          spareOrStrike--;
        } else {
          totalScore += value;
        }
        previousValue = value;
      } else if (value === "/") {
        totalScore += 10 - previousValue;
        spareOrStrike = i + 1 < matrixLength ? 1 : 0;
      } else if (value.toUpperCase() === "X") {
        if (spareOrStrike > 0) {
          totalScore +=
            spareOrStrike === 2
              ? 10 + STRIKESPARE_MULTIPLIER * 10
              : STRIKESPARE_MULTIPLIER * 10;
        } else {
          totalScore += 10;
        }
        spareOrStrike = i + 1 < matrixLength ? 2 : 0; // set it to 0 if it's last turn
      }
    });
  }
  return totalScore;
}

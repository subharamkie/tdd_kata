type Matrix = (string | number)[][];
export function calculateTotalScore(inputMatrix: Matrix): number {
  let totalScore: number = 0;
  let addAheadNumber: number = 0; //this value will be 0|1(spare)|2(strike)
  let previousValue: number = 0;
  const SPARE_MULTIPLIER: number = 2;
  const matrixLength = inputMatrix.length;

  /*add error for edge cases:
  input values/empty array/ */
  for (let i = 0; i < matrixLength; i++) {
    inputMatrix[i].forEach((value) => {
      //value can be a string or a number
      if (value !== "-" && typeof value === "number") {
        if (addAheadNumber > 0) {
          totalScore += value * SPARE_MULTIPLIER;
          //if done adding then reset if not last score of next turn
          addAheadNumber = 0; //you always add only the first score twice irrespective of next being spare
        } else {
          totalScore += value;
        }
        previousValue = value; //store to subtract if next is spare
      } else if (value === "/") {
        /*it's a spare, so need to add next score twice and 10 for the current one.
        But spare can occur only on the second iteration of this loop, so need to subtract the previous score then add 10*/
        totalScore += 10 - previousValue;
        addAheadNumber = i + 1 < matrixLength ? 1 : 0; //if not the last turn,in which case you can check for i+1<length?
      }
    });
  }
  console.log(totalScore);
  return totalScore;
}
function resetAddAheadNumber(currentIndex: number): void {}

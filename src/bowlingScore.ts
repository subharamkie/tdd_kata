type Matrix = (string | number)[][];
export function calculateTotalScore(inputMatrix: Matrix): number {
  let totalScore: number = 0;
  let spareOrStrike: number = 0; //this value will be 0|1(spare)|2(strike)
  let previousValue: number = 0;
  const STRIKESPARE_MULTIPLIER: number = 2;
  const matrixLength = inputMatrix.length;

  /*add error for edge cases:
  input values/empty array/ */
  for (let i = 0; i < matrixLength; i++) {
    inputMatrix[i].forEach((value) => {
      //value can be a string or a number
      if (value !== "-" && typeof value === "number") {
        if (spareOrStrike > 0) {
          totalScore += value * STRIKESPARE_MULTIPLIER;
          //if done adding then reset if not last score of next turn
          spareOrStrike--; //you add only the first score twice if spare,else second for strike
        } else {
          totalScore += value;
        }
        previousValue = value; //store to subtract if next is spare
      } else if (value === "/") {
        /*it's a spare, so need to add next roll twice and 10 for the current one.
        But spare can occur only on the second iteration of this loop, so need to subtract the previous score then add 10*/
        totalScore += 10 - previousValue;
        spareOrStrike = i + 1 < matrixLength ? 1 : 0; //if not the last turn,in which case you can check for i+1<length?
      } else if (value.toUpperCase() === "X") {
        //if previous score was strike,then add 2*10+10 for current turn,
        console.log("current value:" + value);
        console.log("current value of spareorstrike:" + spareOrStrike);

        if (spareOrStrike === 2) {
          totalScore += 10 + STRIKESPARE_MULTIPLIER * 10;
          console.log("score with prev strike:" + totalScore);
          spareOrStrike = i + 1 < matrixLength ? 2 : 0; // set it to 0 if it's last turn

          //prev was strike & current is strike, so dont alter spareOrStrike unless it's last turn
        } else {
          totalScore += 10;
          spareOrStrike = i + 1 < matrixLength ? 2 : 0; // set it to 0 if it's last turn
          console.log("first strike:" + totalScore);
        }
      }
    });
  }
  return totalScore;
}
function resetAddAheadNumber(currentIndex: number): void {}

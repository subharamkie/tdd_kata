export function convertRomanToDecimal(romanNum: string): number {
  const romanLookUpObj: { [key: string]: number } = {
    I: 1,
    V: 5,
    IX: 9,
    X: 10,
    L: 50,
    XC: 90,
    C: 100,
    D: 500,
    CM: 900,
    M: 1000,
  };
  let decimalNumber: number = 0;
  let currentValue: number = 0;
  let nextValue: number = 0;
  let currentLetter: string = "";

  const stringArray = [...romanNum.toUpperCase()];
  for (let index = 0; index < stringArray.length; index++) {
    currentLetter = stringArray[index];
    if (currentLetter in romanLookUpObj) {
      console.log("decimal to start with:" + decimalNumber);
      currentValue = romanLookUpObj[currentLetter];
      console.log("value from obj:" + currentValue);
      //keep track of next char to decide for IV,IX etc
      if (stringArray[index + 1]) {
        //if next value if higher than current, move index forward and set value
        nextValue = romanLookUpObj[stringArray[index + 1]];
        console.log("next value:" + nextValue);

        if (nextValue > currentValue) {
          currentValue = nextValue - currentValue;
          decimalNumber += currentValue;
          console.log("next value greater:" + currentValue);
          index += 2;
          continue;
        }
      }
      decimalNumber += currentValue;
      console.log("value from obj:" + decimalNumber);
    }
  }

  return decimalNumber;
}

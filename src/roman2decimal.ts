export function convertRomanToDecimal(romanNum: string): number {
  if (romanNum === "") throw new Error("String is empty");
  const romanLookUpObj: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let decimalNumber: number = 0;
  let currentValue: number = 0;
  let nextValue: number = 0;

  const stringArray = [...romanNum.toUpperCase()];
  for (let index = 0; index < stringArray.length; index++) {
    const currentLetter = stringArray[index];
    if (currentLetter in romanLookUpObj) {
      currentValue = romanLookUpObj[currentLetter];
      //keep track of next char to decide for IV,IX etc
      if (stringArray[index + 1]) {
        //if next value if higher than current, move index forward and set value
        nextValue = romanLookUpObj[stringArray[index + 1]];
        if (nextValue > currentValue) {
          currentValue = nextValue - currentValue;
          decimalNumber += currentValue;
          index++;
          continue;
        }
      }
      decimalNumber += currentValue;
    } else {
      throw new Error("Ill formed string");
    }
  }

  return decimalNumber;
}

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

  const stringArray = [...romanNum.toUpperCase()];
  stringArray.forEach((char, index) => {
    if (char in romanLookUpObj) {
      currentValue = romanLookUpObj[char];
      console.log("value from obj:" + currentValue);
      //keep track of next char to decide for IV,IX etc
      if (stringArray[index + 1]) {
        //if next value if higher than current, move index forward and set value
        nextValue = romanLookUpObj[stringArray[index + 1]];
        console.log("next value:" + nextValue);

        if (nextValue > currentValue) {
          currentValue = nextValue - currentValue;
          console.log("next value greater:" + currentValue);
        }
      }
      //console.log("value from obj:" + currentValue);
      decimalNumber += currentValue;
    }
  });

  return decimalNumber;
}

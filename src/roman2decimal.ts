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
  const stringArray = [...romanNum.toUpperCase()];
  stringArray.forEach((char, index) => {
    if (char in romanLookUpObj) {
      console.log("value from obj:" + romanLookUpObj[char]);
      decimalNumber += romanLookUpObj[char];
    }
  });

  return decimalNumber;
}

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
  let decimalNumber = 0;
  if (romanNum in romanLookUpObj) {
    decimalNumber = romanLookUpObj[romanNum];
  }
  return decimalNumber;
}

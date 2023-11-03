const orderedLookupMap = new Map<number, string>();
orderedLookupMap.set(1000, "M");
orderedLookupMap.set(900, "CM");
orderedLookupMap.set(500, "D");
orderedLookupMap.set(100, "C");
orderedLookupMap.set(90, "XC");
orderedLookupMap.set(50, "L");
orderedLookupMap.set(10, "X");
orderedLookupMap.set(5, "V");
orderedLookupMap.set(1, "I");
let appendNine: boolean = false;
const APPEND_NINE = "IX";

export function convertDecToRoman(num: number): string | undefined {
  let quotient: number = 0;
  let remainder: number = 0;
  let currentKeyToGetLetter: number = 0;
  let closestHigherNum: number = 0;
  let pad: string | undefined = "";
  let romanNumeral: string | undefined = "";

  if (orderedLookupMap.has(num)) {
    //return the number from the map
    romanNumeral = orderedLookupMap.get(num);
    return romanNumeral;
  } else {
    //last digit not 9
    if (Math.floor(num % 10) === 9) {
      num = num - 9;
      appendNine = true;
    }
    remainder = num;
    //iterate through the object, divide by each key
    for (const [key, value] of orderedLookupMap) {
      if (remainder >= key) {
        quotient = Math.floor(remainder / key);
        remainder = Math.floor(remainder % key);
        currentKeyToGetLetter = key;
        pad = orderedLookupMap.get(closestHigherNum); // should never be undefined
        if (!pad) {
          pad = "";
        }
        romanNumeral += populateRomanString(
          quotient,
          currentKeyToGetLetter,
          pad
        );
      }
      closestHigherNum = key; //store the closest higher number for numbers like 4
    }
    if (appendNine) {
      romanNumeral += APPEND_NINE;
      appendNine = false;
    }
    return romanNumeral;
  }
}
function populateRomanString(
  num: number,
  keyForMap: number,
  paddingLetter: string
): string {
  let numeral = "";
  let loopNum = num;
  if (num > 3) {
    loopNum = 5 - num;
    numeral = stringGenerationLoop(loopNum, keyForMap) + paddingLetter;
  } else {
    numeral = stringGenerationLoop(loopNum, keyForMap);
  }
  return numeral;
}
function stringGenerationLoop(times: number, lookupKey: number): string {
  let returnStr = "";
  for (let i = 0; i < times; i++) {
    returnStr += orderedLookupMap.get(lookupKey);
  }
  return returnStr;
}

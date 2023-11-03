import { lookup } from "dns";
const orderedLookupMap = new Map<number,string>();
orderedLookupMap.set(1000,'M');
orderedLookupMap.set(500,'D');
orderedLookupMap.set(100,'C');
orderedLookupMap.set(50,'L');
orderedLookupMap.set(10,'X');
orderedLookupMap.set(5,'V');
orderedLookupMap.set(1,'I');
let appendNine:boolean = false;
const APPEND_NINE = 'IX';
    

export function convertDecToRoman(num:number):string|undefined{
    let quotient:number = 0;
    let remainder:number = 0;
    let currentKeyToGetLetter:number = 0;
    let closestHigherNum:number = 0;
    let pad:string|undefined = '';
    let romanNumeral:string|undefined = ''; 
    
    if(orderedLookupMap.has(num)){
        romanNumeral= orderedLookupMap.get(num) ;
        return romanNumeral;
    } else { 
        //last digit not 9
        if(Math.floor(num%10) === 9) {
            num = num-9;
            appendNine = true;
        }
        remainder = num;
        //iterate through the object, divide by each one 
        for(const[key,value] of orderedLookupMap){
            //divide number by each key
            if(remainder>=key){
                quotient = Math.floor(remainder/key);
                remainder = Math.floor(remainder%key);
                currentKeyToGetLetter = key;
                pad = orderedLookupMap.get(closestHigherNum); // should never be undefined
                if(!pad){pad = '';}
                console.log('quotient b4:'+quotient);
                romanNumeral += populateRomanString(quotient,remainder,currentKeyToGetLetter,pad);
            }
            closestHigherNum = key;//store the closest higher number for numbers like 4,9
        };
        if(appendNine){
            romanNumeral += APPEND_NINE;
        }
        return romanNumeral;
    }    
    return '';
}

function populateRomanString(num:number,diff:number,keyForMap:number,paddingLetter:string):string{
    let numeral = '';
    let loopNum = num;
    let noPrefix:boolean = false;
    
    if(num>3){
        loopNum = 5-num;
        numeral = stringGenerationLoop(loopNum,keyForMap)+paddingLetter;
    }else{
        numeral = stringGenerationLoop(loopNum,keyForMap);
    }
    /*
    if(diff < 3){
        numeral += paddingLetter;
    }else{
        numeral = paddingLetter+numeral;
    }
    
    if(num > 3){
        loopNum = 5-num;
       // numeral = stringGenerationLoop(loopNum,num)+paddingLetter;
    }else if(diff > 0 && diff <= 3){
        loopNum = diff;
        console.log('loopNum:'+loopNum);
        noPrefix = true;
        //numeral = stringGenerationLoop(loopNum,num);
    }else if(diff > 3){
        loopNum = 5-diff;
        prefix = true;
    }else{
        loopNum = num;
        noPrefix = true;
        //numeral = stringGenerationLoop(loopNum,num);
    }

    if(prefix){
        console.log('prefix:'+prefix);
        numeral = paddingLetter+stringGenerationLoop(loopNum,keyForMap);
    }else if(noPrefix){
        console.log('noPrefix:'+noPrefix);
        numeral = stringGenerationLoop(loopNum,keyForMap);
    }else {
        numeral = stringGenerationLoop(loopNum,keyForMap)+paddingLetter;
    }*/
    console.log('numeral:'+numeral);
    return numeral;

}
function stringGenerationLoop(times:number,lookupKey:number):string{
    console.log('in loopfn:'+times+","+lookupKey);
    let returnStr = '';
    for(let i=0;i<times;i++){
        returnStr+=orderedLookupMap.get(lookupKey);
    }
    console.log('str in loopfn:'+returnStr);
    return returnStr;
}

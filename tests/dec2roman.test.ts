import {convertDecToRoman} from "../src/dec2roman"

describe("Test convert to roman function",()=>{
    it.each(
        [
            [1,'I'],
            [5,'V'],
            [10,'X'],
            [50,'L'],
            [2,'II'],
                    ]
    )("should return Roman numeral for %i", (x,result) =>{
        expect(convertDecToRoman(x)).toBe(result);
    });
    
});

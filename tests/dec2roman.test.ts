import {convertDecToRoman} from "../src/dec2roman"

describe("Test convert to roman function",()=>{
    it.each(
        [
            [1,'I'],
            [5,'V'],
            [10,'X'],
            [50,'L'],
            [2,'II'],
            [3,'III'],
            [4,'IV'],
            [6,'VI'],
            [7,'VII'],
            [8,'VIII'],
            [9,'IX'],
                    ]
    )("should return Roman numeral for %i", (x,result) =>{
        expect(convertDecToRoman(x)).toBe(result);
    });
    
});

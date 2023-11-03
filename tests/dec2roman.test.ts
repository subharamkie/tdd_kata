import {convertDecToRoman} from "../src/dec2roman"

describe("Test convert to roman function",()=>{
    it.each(
        [
            [3,'III'],
            [4,'IV'],
            [8,'VIII'],
            [9,'IX'],
            [11,'XI'],
                    ]
    )("should return Roman numeral for %i", (x,result) =>{
        expect(convertDecToRoman(x)).toBe(result);
    });
    
});

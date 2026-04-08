/**
 * @param {number[]} digits
 * @return {number[]}
 */
//  [1, 9, 2, 9]  [1,9,9]  [9,9,9] [9]  [4,3,2,1]  [1,2,3]
var plusOne = function(digits) {
    if(!Array.isArray(digits) || digits.length < 1) return;
    let i = digits.length - 1;
    while(i >= 0) {
        if(digits[i] !== 9) {
            // console.log("a");
            digits[i] = digits[i] + 1;
            return digits 
        } else {
            if(i !== 0 ) {
                // console.log("c");
                digits[i] = 0;
            }
            if (i === 0) {
                // console.log("d");
                digits[digits.length] = 0;
                digits[i] = 1;
                return digits;
            }
        }
        i--;
    }
};

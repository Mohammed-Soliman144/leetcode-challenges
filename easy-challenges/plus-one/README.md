# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

- # Approach
<!-- Describe your approach to solving the problem. -->
* Right to left travasel if element (n) (n !== 9):
    * A- increase digit by one so (n = n + 1)
    * B- return array (do not complete loop time complexity) 
* if digit (n === 9 && i !== 0)
    * A- replace it by zero (n = 9 becomes n = 0)
    * B- complete to next iteration (i) inside loop so if n !== 9 becomes n = n + 1 then return array (go to step 1)
* if digit (n === 9 && i === 0)
    * A- replace it by one (n = 9 becomes n = 1)
    * B- increase length of array or add digit to array from right (arr[arr.length] === undefined becomes arr[arr.length] = 0)   

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```javascript []
/**
 * @param {number[]} digits
 * @return {number[]}
 */
//  [1, 9, 2, 9]   [1,9,9]  [9,9,9] [9]  [4,3,2,1]  [1,2,3]
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
            if (i === 0 && digits[i] === 9) {
                // console.log("d");
                digits[digits.length] = 0;
                digits[i] = 1;
                return digits;
            }
        }
        i--;
    }
};

```
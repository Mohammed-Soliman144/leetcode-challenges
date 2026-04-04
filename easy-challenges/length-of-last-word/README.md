# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
1. check input of not string or empty one.
2. loop inside a string from right (length - 1).
3. escape empty spaces from both sides (left and right) to simulate trim() a string (built in function).
4. check only if char is not empty so is english char according to constraint.
5. if char may be any char (symbol) in this case should you ASCII code of char which a = 97 and z = 122 is greater than Capital one A = 65 and Z = 90.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```javascript []
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // //solution 1
    // if(typeof s !== "string" || s.length <= 0) return;
    //     let count = s.trim().split(" ")[s.trim().split(" ").length - 1].length;

    // Solution 2
    // check input
    if(typeof s !== "string" || s.length <= 0) return;
    let count = 0, i = s.length - 1;
    while(i >= 0) { 
        if(s[i] === ' ' && s[i - 1] !== undefined) {  
            i--;
            continue;  
        }
        // check ASCII Code for character which A => 65 and Z = 90 and a = 97 and z = 122 but there is constraint handle remain chars !@#$%^&*_=+ and so on  s consists of only English letters and spaces ' '. 
        // if(s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90 || s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122) 
        if(s[i] !== ' '){
            count++;
            if(s[i - 1] === ' ' || s[i - 1] === undefined)
                return count;
        }
        i--;
    }
    return count;
};
```
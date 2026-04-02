# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```javascript []
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0 || x % 10 === 0 && x !== 0) return false;
    let palindrome = 0, remainder, num = x;
    while(num > 0) {
        remainder = num % 10;
        palindrome = palindrome * 10 + remainder;
        num = Math.floor(num / 10);
    }
    return palindrome === x;
};
```
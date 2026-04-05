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
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    if(!Array.isArray(s) || s.length < 2) return;
    let left = 0, right = s.length - 1;
    // swapping elements in array by destructuring as below
    // let x= 11, y = 12;
    // [x, y] = [y, x];  so x = 12 and y = 11
    // if array is odd left the middle element as it (do n`t swap) and otherwise swapping all elements (if even)
    while(left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
    return s;
};

```
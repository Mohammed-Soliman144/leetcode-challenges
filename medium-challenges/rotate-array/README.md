# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
- O(n) => must be loop on each element in array from one time

- Space complexity:
- O(1) => according to destructuring array in modification place so when not create new array (as temporary space like swapping two variables) but already use the same one (under the hood js create temp array then save arr[left] and arr[right] then swap temp in the same array arr then garabage collection remove array from memory (automated))

# Code
```javascript []
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const len = nums.length
    let rotateNum = k % len

    function reverseArr(left, right) {
        while(left < right)  {
            // Destructuring array in modification place
            [nums[left], nums[right]] = [nums[right], nums[left]]
            left++
            right--
        }
    }
    
    // reverse whole array
    reverseArr(0, len - 1)
    // reverse from 0 to k - 1 (first part - before k)
    reverseArr(0, rotateNum - 1)
    // reverse from k to last (last part - k and after k)
    reverseArr(rotateNum, len - 1)
}; 




```
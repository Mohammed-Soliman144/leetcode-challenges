# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
1. **Check inputs to ensure array of number and number**
2. **Create Two Loops first one points to 1st element in array and second loop (inner or nested) points to all elements inside array except one (when iterator i = 0 so x = i + 1)**
3. **Check if sum two numbers equals target number then catch results of of two numbers based on index not value**
4. **Return Array of indexes**
5. **this solution can enhanced if when reach the sum two numbers equals target direct return array (enhance time of complexity)**

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```javascript []
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * check inputs to ensure array of number and number
 * Sum any Two number === target
 * return array of indexes for two number
 */
// Input: nums = [3,2,4], target = 6
var twoSum  = function(nums, target) {
    if(!Array.isArray(nums) || typeof target !== "number") return;
    // length (check) then => sum any two numbers based on index === target
    let output = [];
    for(let i = 0,y = 0; i < nums.length; i++) {
        //  6 === 6
        for(let x = i+1; x < nums.length; x++) {
            if(nums[i] + nums[x] === target) {
                output[y++] = i;
                output[y++] = x;
            }
        }
    }
    return output;
}
```
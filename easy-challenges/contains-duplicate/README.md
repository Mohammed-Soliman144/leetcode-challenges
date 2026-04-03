# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
- **using Set built in function in js time O(n)**
```js
    // apply Set functionality manually
    var containsDuplicate = function(nums) {
        if(!Array.isArray(nums) || nums.length <= 1 ) return false;
        const unique =  {};
        for(let i = 0; i < nums.length; i++) {
            if(unique[nums[i]] !== undefined)
                return true;
            unique[nums[i]] = true;
        }
        return false
    }
```

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```javascript []
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    /* Two Pointers => fails which compare based on values only done if compare based on indexes */
    /* Solution 1 => Set => complexity time O(n) */
    if(!Array.isArray(nums) || Array.isArray(nums) && nums.length <= 1) return false;
    const uniqueNums = new Set(nums); 
    return uniqueNums.size === nums.length ? false : true;
    // /*  Solution 2 => Nested Loops  => complexity time O(n power 2) */
    // if(!Array.isArray(nums)) return false;
    // for(let i = 0; i < nums.length; i++)
    //     for(let x = i + 1; x < nums.length; x++)
    //         if(nums[x] === nums[i])
    //             return true;
    // return false;
};
```
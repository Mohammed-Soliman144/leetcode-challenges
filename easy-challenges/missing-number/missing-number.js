/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // 1- Mathmatic way n = (n * n + 1) / 2 = 12 / 2 = 6  => faster (optimal)
    // 2- sort((a,b )=> a - b) more time, get missing one
    // 3- Mathmatic then loop for each element and subtract each one from total
    
    // 4- Bitwise Operator (XOR) ^ 
    /* 
        let xor = nums.length; // last element
        for(let i = 0; i < nums.length; i++)
            xor ^= i ^ nums[i]
        return xor
    */

    const total = (nums.length * (nums.length + 1)) / 2
    const actual = nums.reduce((acc, n) => acc + n, 0)
    return total - actual
};
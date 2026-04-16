/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // XOR Bitwise Operator ^
    // if two bits are equals return 0 otherwise return 1
    let i = 0, single = 0;
    while(i < nums.length)
        single ^= nums[i++];
    return single;
};

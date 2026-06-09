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




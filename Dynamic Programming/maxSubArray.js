// https://leetcode.com/problems/maximum-subarray/
// 53. Maximum Subarray

// Intuition: Kadane’s Algorithm (Time: O(n); Space: O(1))
// Video Tutorial: https://www.youtube.com/watch?v=2MmGzdiKR9Y

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let curMax = -Infinity;
    let prev = 0;
    
    // 1. iterate through the nums array
    for (let i = 0; i < nums.length; i++) {
        prev = Math.max(prev + nums[i], nums[i]);   // 2. get/store the best subarray sum that ends at current num
        curMax = Math.max(curMax, prev);            // 3. update current maximum
    }

    return curMax;
};

// ===== TEST ======
const sampleInput = [-2,1,-3,4,-1,2,1,-5,4];
/* Expected Output: 6 (a.k.a. [4,-1,2,1]) */

console.log(maxSubArray(sampleInput));

// ===== end ======
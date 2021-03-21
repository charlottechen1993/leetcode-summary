// https://leetcode.com/problems/minimum-absolute-difference/
// 1200. Minimum Absolute Difference
/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    // 1. sort arr
    const sorted = arr.sort((a,b) => a-b);
  
    const map = {};
    let curMin = Infinity;
    
    // 2. loop through sorted arr and compare adjacent pairs
    for (let i = 1; i < sorted.length; i++) {
        const diff = Math.abs(sorted[i]-sorted[i-1]); // 3. get absolute difference
        
        // 4. if diff hasn't been encountered yet...
        if (!map[diff]) {
            curMin = Math.min(curMin, diff); // update curMin if necessary
            map[diff] = [] // initialize empty array with key 
        }
        // 5. push pair into map[diff]
        map[diff].push([sorted[i-1], sorted[i]]);
    }
    
    // 6. return array of the cur minimum diff key
    return map[curMin];
};

// ===== TEST ======
const sampleInput = [3,8,-10,23,19,-4,-14,27]
/* Expected Output: [[-14,-10],[19,23],[23,27]] */

console.log(minimumAbsDifference(sampleInput));

// ===== end ======
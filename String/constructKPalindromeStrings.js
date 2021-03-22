// https://leetcode.com/problems/construct-k-palindrome-strings/
// 1400. Construct K Palindrome Strings

/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function(s, k) {
    const set = new Set();
    
    // 1. if string length is less than the k palindrome requirement, simply return false (can't create characters out of thin air...)
    if (s.length < k) {
        return false;
    }
    
    // 2. for each character in the string...
    for (let c of s) {
        // if set already contains c, we got a pair, delete it from the set
        if (set.has(c)) { 
            set.delete(c);
        }
        // if set doesn't contain c, add it in as a loner
        else {
            set.add(c);
        }
    }
    
    // 3. after finishing the s iteration, is the amount of loner character > the k palindrome requirement, return false
    if (set.size > k) {
        return false
    }

    return true;
};


// ===== TEST ======
const sampleInput = "leetcode";
const sampleK = 3;
/* Expected Output: false */

console.log(canConstruct(sampleInput, sampleK));

// ===== end ======
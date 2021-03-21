// https://leetcode.com/problems/di-string-match/
// 942. DI String Match

/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
    const result = [];
    let low = 0;
    let high = S.length;
    let remainder; // helps keep track of the final lingering value
    
    // 1. loop through the ID string to fill result
    for (let i = 0; i < S.length; i++) {
        /* if this number to next number is INCREASING (I),
        greedily select the LOWEST available number for current index */
        if (S[i] === 'I') {
            result[i] = low;
            remainder = high;
            low++; // update lowest available
        }
        /* if this number to next number is DECREASING (D),
        greedily select the HIGHEST available number for current index */
        else {
            result[i] = high;
            remainder = low;
            high--; // update highest available
        }
    }
    // 2. push in the final remainder number
    result.push(remainder);

    // 3. return
    return result;
};


// ===== TEST ======
const sampleInput = "IDID"
/* Expected Output: [0,4,1,3,2]*/

console.log(diStringMatch(sampleInput));

// ===== end ======
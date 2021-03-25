// https://leetcode.com/problems/text-justification/
// 68. Text Justification

// Summary: Try to modularize code as much as possible to keep a clear mind in solving edge cases

/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    const result = [];

    const constructSentence = (sentenceArr, sentenceLen, isLastSentence) => {
        let resultSen = '';
        const gaps = sentenceArr.length - 1;
        var extraSpacesNeeded = maxWidth - sentenceLen + sentenceArr.length;
        var extraSpacesPerGap = Math.floor(extraSpacesNeeded/gaps);
        var stillExtras = extraSpacesNeeded % gaps;
        
        // if last sentence...
        if (isLastSentence) {
            for (let i = 0; i < sentenceArr.length; i++) {
                const w = sentenceArr[i];
                resultSen = resultSen.concat(w);
                // add exactly one space between each words
                if (i !== sentenceArr.length - 1) {
                    resultSen = resultSen.concat(" ");
                    extraSpacesNeeded--;
                }
                // if dealing with final word, pad all remaining spaces to the end
                else {
                    resultSen = resultSen.concat(" ".repeat(extraSpacesNeeded));
                }
            }
        }
        // if only 1 word, simple pad all extra space needed to the end
        else if (sentenceArr.length === 1) {
            resultSen = resultSen.concat(sentenceArr[0], ' '.repeat(extraSpacesNeeded));
        }
        // else...
        else {
            // for each word...
             for (let i = 0; i < sentenceArr.length; i++) {
                const w = sentenceArr[i];
                // concat word
                resultSen = resultSen.concat(w);
                // if not dealing with final word, concat avg spaces needed between each word
                if (i !== sentenceArr.length - 1) {
                    resultSen = resultSen.concat(" ".repeat(extraSpacesPerGap));
                }
                // if there's still extra remainder spaces, concat 1
                if (stillExtras > 0) {
                    resultSen = resultSen.concat(' ');
                    stillExtras--;
                }
            }
        }

        return resultSen;
    }

    let curSentence = [];
    let curSentenceLen = 0;
    // 1. greedily pad as many words (plus at least 1 space) in the current sentence as possible
    for (let word of words) {
        /* if adding the next word exceeds max width
        - construct the new sentence
        - push to final result array
        - reset current sentence and current sentence length
        */
        if (curSentenceLen + word.length > maxWidth) {
            const newSen = constructSentence(curSentence, curSentenceLen);
            result.push(newSen);
            curSentence = [word];
            curSentenceLen = word.length + 1;
        }
        /* else
        - push current word into current sentence array
        - update current sentence length with current word length plus 1 (space)
        */
        else {
            curSentence.push(word);
            curSentenceLen += word.length + 1;
        }
    }
    // 2. construct and push the final sentence
    result.push(constructSentence(curSentence, curSentenceLen, true));

    return result;
};

// ===== TEST ======
const sampleWords = ["This", "is", "an", "example", "of", "text", "justification."];
const sampleMaxWidth = 16;
/* Expected Output: false */

console.log(fullJustify(sampleWords, sampleMaxWidth));

// ===== end ======
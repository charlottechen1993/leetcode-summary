// https://leetcode.com/problems/surrounded-regions/
// 130. Surrounded Regions

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    const height = board.length;
    const width = board[0].length;
    
    const dfs = (row, col) => {
        // D1. if cur item is invalid or is NOT 'O', return
        if (!board[row][col] || board[row][col] !== "O") {
            return;
        }
        
        // D2. if cur item is 'O', update to special character 'I'
        if (board[row][col] === "O") {
            board[row][col] = 'I';
        }
        
        // D3. for top/left/right/bottom of the current item...
        const directions = [[-1, 0], [0, -1], [0, 1], [1, 0]];
        for (let dir of directions) {
            const newRow = row + dir[0]; // get the neighbor's row with dir offset
            const newCol = col + dir[1]; // get the neighbor's col with dir offset

            // if neighbor item is in bound of the board, DFS recurse
            const isInBound = newRow >= 0 && newCol >= 0 && newRow < height && newCol < width;
            if (isInBound) {
                dfs(newRow, newCol);
            }
        }
    }
    
    // 1. for each item on the LEFT/RIGHT boarders, recursively update edge-connected 'O's to special character
    for (let i = 0; i < height; i++) { // LEFT
        if (board[i][0] === 'O') {
            dfs(i, 0)
        }
        if ((board[i][width-1] === 'O')) { // RIGHT
            dfs(i, width-1);
        }
    }
    
    /* 2. for each item on the TOP/BOTTOM boarders (exclude 0 and last index, since they've already been checked above),
    recursively update edge-connected 'O's to special character */
    for (let i = 1; i < width - 1; i++) {
        if (board[0][i] === 'O') { // TOP
            dfs(0, i);
        }
        if ((board[height-1][i] === 'O')) { // BOTTOM
            dfs(height-1, i);
        }
    }
    
    // 3. after all edge-connected 'O' regions are updated to special character 'I', iterate through the 2d-array
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            // if item is still 'O', that means it's not connected to an edge. Flip it to 'X'
            if (board[i][j] === "O") {
                board[i][j] = "X";
            }
            // if item is special character 'I', that means it was an 'O' connected to an edge region. Update it back to 'O'
            else if (board[i][j] === "I") {
                board[i][j] = "O";
            }
        }
    }

    // 4. return flipped board
    return board;
};

// ===== TEST ======
const sampleGraph = [
    ["X","X","X","X"],
    ["X","O","O","X"],
    ["X","X","O","X"],
    ["X","O","X","X"]
]

console.log(solve(sampleGraph));

/* Expected Output: [
    [ 'X', 'X', 'X', 'X' ],
    [ 'X', 'X', 'X', 'X' ],
    [ 'X', 'X', 'X', 'X' ],
    [ 'X', 'O', 'X', 'X' ]
]
*/
// ===== end ======
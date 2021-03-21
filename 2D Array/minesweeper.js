// https://leetcode.com/problems/minesweeper/
// 529: Minesweeper

/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function(board, click) {
    const result = board;

    const height = board.length;
    const width = board[0].length;
    
    const r = click[0];
    const c = click[1];
    
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0], [-1, 1], [-1, -1], [1, -1], [1, 1]];
    
    // check if a coordinate is in bound of the board
    const isInBound = (row, col) => {
        return row >= 0 && col >= 0 && row < height && col < width;
    }
    
    // get count of mines around [row, col]
    const getMinesCount = (row, col) => {
        // for each potential adjacent tiles, check if it's a mine
        let count = 0;
        for (let dir of directions) {
            const newRow = row + dir[0];
            const newCol = col + dir[1];
            
            // if adjacent tile is in bound of the board and it's 'M', add 1
            if (isInBound(newRow, newCol) && board[newRow][newCol] === "M") {
                count++;
            }
        }
        return count;
    }
    
    // DFS traversal to modify the board
    const dfs = (row, col) => {
        // 1. if clicked on unrevealed mine 'M', set item to 'X', return
        if (result[row][col] === "M") {
            result[row][col] = 'X'; // set M to X
            return;
        }
        // 2. if clicked is out of bound, return
        if (!result[row][col]) {
            return;
        }
        
        // 3. if clicked on unrevealed empty square 'E'
        const numOfMines = getMinesCount(row, col); // get the number of mines around the current item
        
        if (numOfMines > 0) {
            result[row][col] = numOfMines.toString(); // update the current item with 'numOfMines', return
            return;
        }
        
        // 4. update the current item to 'B' since no adjacent neighbor is a mine
        result[row][col] = "B";
        // 5. for each adjacent spot of the current item (8 in total), perform DFS
        for (let dir of directions) {
            const newRow = row + dir[0];
            const newCol = col + dir[1];

            // if current adjacent item is in bound of the board and it is 'E' (unrevealed empty square), DFS recurse
            if (isInBound(newRow, newCol) && board[newRow][newCol] === "E") {
                dfs(newRow, newCol);
            }
        }
    };

    dfs(r, c);
    return result;
};

// ===== TEST ======
const sampleGraph = [
    ["E","E","E","E","E"],
    ["E","E","M","E","E"],
    ["E","E","E","E","E"],
    ["E","E","E","E","E"]
]
const sampleCoordinate = [3,0]

console.log(updateBoard(sampleGraph, sampleCoordinate));
// ===== end ======
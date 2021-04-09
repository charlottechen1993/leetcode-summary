/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (grid.length === 0) {
        return 0;
    }
    
    const height = grid.length;
    const width = grid[0].length;
    
    let numOfIslands = 0;
    
    const directions = [[-1, 0], [0, -1], [0, 1], [1, 0]]; // initialize direction reference: top/left/right/bottom
    
    // check if a coordinate is in bound of the board
    const isInBound = (row, col) => {
        return row >= 0 && row < height && col >= 0 && col < width;
    }
    
    // DFS traversal to modify the board
    const dfs = (row, col) => {
        // return if current coordinations are out of bound, or if it is '0' (water)
        if (!isInBound(row, col) || grid[row][col] === '0') {
            return;
        }
        
        /* otherwise if current coordinate is '1' (island), modify it to be '0' (water),
        so we don't count it as a new island in future iterations */
        grid[row][col] = '0';
        
        /* continue to check current coordinate's top/left/right/bottom neighbors */
        for (let dir of directions) {
            const newRow = row + dir[0];
            const newCol = col + dir[1];
            dfs(newRow, newCol);
        }
    }
    
    // 1. iterate through the 2d-array
    for (let r = 0; r < height; r++) {
        for (let c = 0; c < width; c++) {
            // 2. if current item is '1'...
            if (grid[r][c] === '1') {
                numOfIslands++; // mark as a new island
                dfs(r, c); // perform DFS to find its neighbors
            }
        }
    }
    // 3. return
    return numOfIslands;
};

// ===== TEST ======
const sampleGraph = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
];

console.log(numIslands(sampleGraph));

/* Expected Output: 1 */
// ===== end ======
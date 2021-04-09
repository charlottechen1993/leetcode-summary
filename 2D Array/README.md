# 2D Arrays

## Initialization
1. Find height and width of input
    - const height = grid.length;
    - const width = grid[0].length;
2. Find all relative directions
    - If adjacent neighbors only:
        - const directions = [[-1, 0], [0, -1], [0, 1], [1, 0]]; // top, left, right, bottom
    - If adjacent and corner neighbors:
        - const directions = [[0, 1], [0, -1], [1, 0], [-1, 0], [-1, 1], [-1, -1], [1, -1], [1, 1]]; // top-left, top, top-right, left, right, bottom-left, bottom, bottom-right

## Flagship Questions
- Number of Islands: https://leetcode.com/problems/number-of-islands/
    - Solution: https://github.com/charlottechen1993/leetcode-summary/blob/master/2D%20Array/numberOfIslands.js

## Commonly Associated Topics
- BFS/DFS
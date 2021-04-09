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

## Commonly Associated Topics
- BFS/DFS
/**
 * Basic logic of returning all 8 adjacent neighbors of an item in a 2D array.
 * Useful in graph traversal or search questions
 * @param {array} graph - a 2d array
 * @param {array} coordinate - a single coordinate
 */
const getAdjacents = (graph, coordinate) => {
    let result = [];

    const row = coordinate[0];
    const col = coordinate[1];

    const width = graph[0].length;
    const height = graph.length;

    // (1) create a list of offset coordinates with base of [0, 0];
    const directions = [
        [-1, -1],   // top left
        [-1, 0],    // top
        [-1, 1],    // top right
        [0, -1],    // left
        [0, 1],     // right
        [1, -1],    // bottom left
        [1, 0],     // bottom
        [1, 1]      // bottom right
    ];

    // (2) iterate through each direction in 'directions':
    for (let dir of directions) {
        const newRow = row + dir[0]; // get the neighbor's row with dir offset
        const newCol = col + dir[1]; // get the neighbor's col with dir offset

        // (3) check if a potential neightbor's coordinate is in bound
        const isInBound = newRow >= 0 && newCol >= 0 && newRow < height && newCol < width;

        // (4) return a valid neighbor
        if (isInBound) {
            result.push(graph[newRow][newCol]);
        }
    }
    // (5) return final list
    return result;
}

// ===== TEST ======
const sampleGraph = [
    ['A', 'B', 'C'],
    ['D', 'E', 'F'],
    ['G', 'H', 'I'],
    ['J', 'K', 'L']
];

const sampleCoordinate = [1, 1];

console.log(getAdjacents(sampleGraph, sampleCoordinate));
// ===== end ======
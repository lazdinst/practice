// Hacker Rank - Diagonal Difference

const diagonalDifference = arr => {
  let len = arr.length;
  let se = 0;
  let sw = 0;

  // South East
  let seStep = {r: 1, c: 1};
  for(let r = 0, c = 0; r < len && c < len; r += seStep.r, c += seStep.c) {
    se += arr[r][c]
  }

  // South West
  let swStep = {r: 1, c: -1};
  for(let r = 0, c = len - 1; r < len && c > -1; r += swStep.r, c += swStep.c) {
    sw += arr[r][c]
  }

  return Math.abs(se-sw); 
}

let ar = [
  [ 11, 2, 4 ], 
  [ 4, 5, 6 ],
  [ 10, 8, -12 ]
];
let result = diagonalDifference(ar);
console.log(result);
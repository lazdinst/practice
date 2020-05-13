// Hacker Rank - staircase

const staircase = n => {
  let stairs = [];
  
  for(let i = 1; i <= n; i++) {
    let stair = buildStair(i, n);
    stairs.push(stair);
  }

  return printStaircase(stairs);
}

const buildStair = (stairCount, totalStairs) => {
  let stairSpaces = new Array(totalStairs - stairCount).fill(' ').join('')
  let stairSteps = new Array(stairCount).fill('#').join('');
  return stairSpaces+stairSteps;
}

const printStaircase = arr => {
  arr.forEach(stair => console.log(stair))
  return;
}

let n = 4;
let result = staircase(n)
console.log(result);
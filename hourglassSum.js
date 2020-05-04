const hourglassSum = arr => {
  let results = [];
  let steps = [
    {r: -1, c: -1},
    {r: -1, c: 0},
    {r: -1, c: 1},
    {r: 1, c: -1},
    {r: 1, c: 0},
    {r: 1, c: 1},
  ]


  for(let r = 1; r < 5; r++) {
    for(let c = 1; c < 5; c++) {
      let sum = 0;
      sum+= arr[r][c];
      steps.forEach(step => {
        sum+=arr[r+step.r][c+step.c];
      })
      results.push(sum);
    }
  }
  let max = Math.max(...results);
  return max;
}

// 1 1 1
// 0 1 0
// 1 1 1

let arr = [
  [ 1, 1, 1, 0, 0, 0 ],
  [ 0, 1, 0, 0, 0, 0 ],
  [ 1, 1, 1, 0, 0, 0 ],
  [ 0, 0, 2, 4, 4, 0 ],
  [ 0, 0, 0, 2, 0, 0 ],
  [ 0, 0, 1, 2, 4, 0 ]];

let result = hourglassSum(arr)

console.assert(result, 19);
console.info(result)
// Hacker Rank - A Very Big Sum

const aVeryBigSum = (n, ar) => {
  return ar.reduce((pre, curr) => {
    return pre + curr;
  }, 0)
}

let n = 5;
let ar = [ 1000000001, 1000000002, 1000000003, 1000000004, 1000000005 ];

let result = aVeryBigSum(n, ar);
console.log(result);
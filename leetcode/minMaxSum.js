// Hacker Rank - Min Max Sum

const minMaxSum = arr => {
  let min = 0, max = 0;

  arr = arr.sort();
  max = arr.slice(1).reduce((pre, curr) => {
    return pre+curr;
  }, 0)

  min = arr.slice(0,arr.length - 1).reduce((pre, curr) => {
    return pre+curr;
  }, 0)

  console.log(`${min} ${max}`)
  return;
}
let arr = [1,2,5,4,3]
let result = minMaxSum(arr);
console.log(result);
// https://leetcode.com/problems/reverse-integer/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  // let s = Math.abs(x).toString();
  let reversed = [...Math.abs(x).toString()].reverse().join('');

  // if the reversed value exceeds
  if(reversed > (Math.pow(2,31) - 1)) {
    return 0;
  }
  
  return x < 0 ? reversed * -1 : reversed;
};

let int = 123;
let r = reverse(int);
console.log(r);
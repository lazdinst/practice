/**
 * @param {number} x
 * @return {boolean}
 
1) We can compare the first digit and the last digit, then we repeat the process.
2) For the first digit, we need the order of the number. Say, 12321. Dividing this by 10000 would get us the leading 1. The trailing 1 can be retrieved by taking the mod with 10.
3 ) Now, to reduce this to 232.

(12321 % 10000)/10 = (2321)/10 = 232 
4 ) And now, the 10000 would need to be reduced by a factor of 100.

 */

var isPalindrome1 = function(x) {

  if (x === -1) return false;
  // Divide the target x by the divisor to until
  // the result is 10 or less to return the
  // length of the number in digits or Order of X

  let divisor = 1; 
  while (x / divisor >= 10) {
    divisor *= 10;
  }

  // Once we know the order, we can pop and shift off each digit
  while(x !== 0 ) {

    // Divide the target by the divisor and floor the amount
    // 123 / 100 === 1.23 => 1
    let leadingDigit = Math.floor(x / divisor);
    
    // Target mod 10
    // 124 % 10 => 4    
    let trailingDigit = x % 10;

    if(leadingDigit !== trailingDigit) {
      return false;
    }

    // Now we need to strip those values from the target
    x = Math.floor((x % divisor)/10);

    // Reduce the divisor by 100 because we removed two digits
    divisor = divisor / 100;

  }
  return true;
};

const isPalindrome2 = x => {
  let digits = x.toString();
  let len = digits.length;

  for(let i = 0; i < digits.length / 2; i++) {
    let leading = digits[i];
    let trailing = digits[len - i - 1];

    if(leading !== trailing) {
      return false
    }

  }
  return true;
}

// let nums = [1211]
let nums = [121, 123, 1234321, 1212, -101, 101];

let r1 = nums.map(num => isPalindrome1(num));
let r2 = nums.map(num => isPalindrome2(num));
console.log(r1)
console.log(r2)

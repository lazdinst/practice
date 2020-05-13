// Hacker Rank - Plus Minus

const plusMinus = arr => {
  let divisor = arr.length;
  let dividends = new Array(3).fill(0);
  // negative, zero, positive

  // Build the 
  for(let i = 0; i < arr.length; i++) {
    // Positive
    if(arr[i] > 0) {
      dividends[0] += 1;
    }

    // Negatives
    if(arr[i] < 0) {
      dividends[1] += 1;
    }

    // Zero
    if(arr[i] === 0) {
      dividends[2] += 1;
    }

  }

  let quotients = dividends.map(dividend => {
    let quotient = (dividend / divisor).toFixed(6)
    console.log(quotient);
    return quotient;
  })

  return quotients;
}

let arr = [-4, 3, -9, 0, 4, 1]
let result = plusMinus(arr);
console.log(result);
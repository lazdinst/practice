// Hacker Rank - Birthday Candles

const birthdayCakeCandles = ar => {
  let hash = new Map()
  let max = 0, currentMax = 0;

  for (let i = 0; i < ar.length; i++) {
    let curr = ar[i];
    if(hash.get(curr) !== undefined) {
      hash.set(curr, hash.get(curr) + 1)
    }  else {
      hash.set(curr, 1)
    }

    if(hash.get(curr) > max) {
      max = hash.get(curr)
      currentMax = curr;
    }
  }
  
  return max;
}

let ar = [ 3, 2, 1, 3 ];
let result = birthdayCakeCandles(ar);
console.log(result);
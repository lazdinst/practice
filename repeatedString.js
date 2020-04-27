const repeatedString = (s,n) => {
  let found = 0;
  let quotient = Math.floor(n / s.length);
  let remainder = n % s.length;
  let total = 0;
  let partialString = '';

  s.split('').forEach(char => {
    if(char === 'a') {
      found++
    }
  });

  total = found * quotient;

  if(!remainder) {
    return total;
  } else {
    partialString = s.substring(0,remainder);

    partialString.split('').forEach(char => {
      if(char === 'a') {
        total++
      }
    });

  }

  return total;

}

const s1 = 'aba';
const n1 = 10;

const s2 = 'a';
const n2 = 1000000000000;


var result1 = repeatedString(s1,n1);
console.assert(result1, 7)
console.log(result1)

// var result2 = repeatedString(s2,n2);
// console.assert(result2, 1000000000000)
// console.log(result2)

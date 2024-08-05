const makeAnagram = (a,b) => {
  let minDeletions = 0;

  let charsA = generateCharArray(a)
  let charsB = generateCharArray(b)

  for(let i = 0; i < charsA.length; i++) {
    let diff = Math.abs(charsA[i] - charsB[i])
    minDeletions += diff;
  }

  return minDeletions;
}

const generateCharArray = str => {
  let arr = new Array(26).fill(0);
  for(let i = 0; i < str.length; i++) {
    let position = str[i].charCodeAt(0) - 'a'.charCodeAt(0);
    arr[position] += 1;
  }
  return arr;
}

const s1 = 'cde'
const s2 = 'abc'

const r12 = makeAnagram(s1,s2);
console.log(r12)
console.assert(r12, 4);

const s3 = 'fcrxzwscanmligyxyvym'
const s4 = 'jxwtrhvujlmrpdoqbisbwhmgpmeoke'

const r34 = makeAnagram(s3, s4);
console.log(r34)
console.assert(r34, 30);
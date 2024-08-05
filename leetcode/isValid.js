// Hacker Rank - Sherlock and the Valid String

const isValid = s => {
  let valid = false;
  let hash = generateHash(s);
  let values = hash.values;
  let max = 0;
  let deletions = 0;

  for(let i = 0; i < values.length - 1; i++) {
    // I should be comparing the current value to current max value
    if(values[i] === values[i+1]) {
      max = values[i];
    } else {
      // Values do not equal
      
      if(deletions) {
        valid = false;
        break;
      }

      // if deletions > 0
        // valid = false
        // break; as we reached another required deletion

      // If i subtract them is the number of deletions greater than 1?
      if(values[i] - values[i+1] > 1) {
        valid = false;
        break;
      } else {
        deletions++;
        valid = true;
      }

        // If it is greater than 1, it means an immediate invalidation
          // valid = false
        // If it is not, that means we can subtract 1 and meet the current max
          // keep max the same, and subtract 1 from the hash
          // Flag deletions + 1;
          // valid = true
    }
  }


  return valid ? 'YES' : 'NO';
}

const generateHash = s => {
  let hash = new Map()

  for(let i = 0; i < s.length; i++) {
    let curr = hash.get(s[i]);
    if(curr) {
      hash.set(s[i], curr + 1)
    } else {
      hash.set(s[i], 1)
    }
  }
  return hash;
}

let s1 = 'abcdefghhgfedecba'
let r1 = isValid(s1);
console.log(r1)
console.assert(s1, 'YES');
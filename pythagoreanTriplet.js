// Given an array of integers, write a function that returns true if there is a triplet (a, b, c) that satisfies a2 + b2 = c2.
// Example:

// Input: arr[] = [3, 1, 4, 6, 5]
// Output: True
// There is a Pythagorean triplet (3, 4, 5).

// Input: arr[] = [10, 4, 6, 12, 5]
// Output: False
// There is no Pythagorean triplet.

const iterativePythagoreanTriplet = arr => {

  let size = arr.length;
  let results = [];
  for(let i = 0; i < size; i++) {
    for(let j = 0; j < size; j++) {
      for(let k = 0; k < size; k++) {
        let a = arr[i]
        let b = arr[j]
        let c = arr[k]
        let result = pyIdentity(arr[i], arr[j], arr[k]);
        if(result) {
          results.push({a: a, b: b, c: c, result: result})
          return results;
        }
      }
    }
  }
  return 'No Results'
}

const testArr01 = [3, 1, 4, 6, 5];
const testArr02 = [10, 4, 6, 12, 5];

const hashMapPythagoreanTriplet = arr => {
  let hash = new Map();
  let size = arr.length;
  let maximum = 0;
  let maxSqrd = 0;

  // Find the maximum sqrd value in the arr
  for(let i = 0; i < size; i ++) {
    maximum = Math.max(maximum, arr[i])
  }
  maxSqrd = Math.pow(maximum, 2);

  // 
  for(let i = 0; i < size; i++) {
    for(let j = 0; j < size; j++) {
      if(i !== j) {
        let a = arr[i]
        let b = arr[j]
        let cSqrd = (Math.pow(a,2) + Math.pow(b,2))

        // Ignore all results greater than max sqrd value.
        // All cqsrd results must be equal to or less than
        // the result a^2+b^2.
        if(cSqrd <= (maxSqrd)) {
          hash.set(cSqrd, [a,b]);
        }
      }
    }
  }

  for(let k = 0; k < size; k++) {
    let c = arr[k];
    let cSqrd = Math.pow(c,2)
    let values = hash.get(cSqrd);
    if(values) {
      let a = values[0]
      let b = values[1]
      return {hash: hash, a: a, b: b, c: c};
    }
  }

  return 'No triplet';
}

const pyIdentity = (a,b,c) => {
  let ab = (Math.pow(a,2)+ Math.pow(b,2))
  c = Math.pow(c, 2)
  return ab === c;
}


const result1 = hashMapPythagoreanTriplet(testArr01)
const result2 = hashMapPythagoreanTriplet(testArr02)
console.log(result1)
console.log(result2)

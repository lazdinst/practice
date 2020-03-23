// Given an array of integers, write a function that returns true if there is a triplet (a, b, c) that satisfies a2 + b2 = c2.
// Example:

// Input: arr[] = [3, 1, 4, 6, 5]
// Output: True
// There is a Pythagorean triplet (3, 4, 5).

// Input: arr[] = [10, 4, 6, 12, 5]
// Output: False
// There is no Pythagorean triplet.

const pythagoreanTriplet = arr => {

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

const pyIdentity = (a,b,c) => {
  let ab = (Math.pow(a,2)+ Math.pow(b,2))
  c = Math.pow(c, 2)
  return ab === c;
}

const testArr01 = [3, 1, 4, 6, 5];
const testArr02 = [10, 4, 6, 12, 5];

const result1 = pythagoreanTriplet(testArr01)
const result2 = pythagoreanTriplet(testArr02)
console.log(result1)
console.log(result2)

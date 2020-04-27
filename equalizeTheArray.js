const equalizeTheArray = arr => {
  let hash = new Map();
  let max = 1;
  let current = null;

  for(let i = 0; i < arr.length; i++) {
    current = hash.get(arr[i]);
    if(current !== undefined) {
      if((current + 1) > max) {
        max++;
      }
      hash.set(arr[i], current + 1)
    } else {
      hash.set(arr[i], 1)
    }
  }

  return arr.length - max;
}

let a1 = [1,2,2,3];
let r1 = equalizeTheArray(a1);
// console.assert(r1, 2)
console.log(r1);
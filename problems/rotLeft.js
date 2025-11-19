const rotLeft = (a, d) => {
  let lenArr = a.length;
  let results = new Array(a.length);
  
  // [1,2,3,4,5]
  // [2,3,4,5,1]
  // [3,4,5,1,2]
  // [4,5,1,2,3]
  // [5,1,2,3,4]
  
  // (0 + 4) % 5 = 4 % 5 = (4 / 5) * 5 = 4
  // (1 + 4) % 5 = 5 % 5 = (5 / 5) * 5 = 5
  // (2 + 4) % 5 = 6 % 5 = (6 / 5) * 5 = 6
  
  // Offset is the (i + d)
  // the extra that floats over is 
  
  for(let i = 0; i < lenArr; ++i) {
    let offsetLeft = (i + d) % lenArr;
    results[i] = a[offsetLeft]
  }

  return results;
}

let a = [ 1, 2, 3, 4, 5 ]
let d = 4

const result  = rotLeft(a,d);
console.log(result)
console.assert(result, [5, 1, 2, 3, 4]);

// [1, 2, 3, 4, 5]
// [5, 2, 3, 4, 1]
// [5, 1, 3, 4, 2]
// [5, 1, 2, 4, 3]
// [5, 1, 2, 3, 4]

// let a2 = [ 41, 73, 89, 7, 10, 1, 59, 58, 84, 77, 77, 97, 58, 1, 86, 58, 26, 10, 86, 51 ];
// let d2 = 10;
// const result2  = rotLeft(a2,d2);
// console.log(result2)
// console.assert(result2, [ 77, 97, 58, 1, 86, 58, 26, 10, 86, 51, 41, 73, 89, 7, 10, 1, 59, 58, 84, 77 ])

// [ 41, 73, 89, 7, 10, 1, 59, 58, 84, 77, 77, 97, 58, 1, 86, 58, 26, 10, 86, 51 ]

// [ 77, 97, 58, 1, 86, 58, 26, 10, 86, 51, 41, 73, 89, 7, 10, 1, 59, 58, 84, 77 ]

// let offsetLeft = (i + d) % lenArr;

// [1,2,3,4,5]
// [2,3,4,5,1]
// [3,4,5,1,2]
// [4,5,1,2,3]
// [5,1,2,3,4]

// (0 + 4) % 5 = 4 % 5 = (4 / 5) * 5 = 4
// (1 + 4) % 5 = 5 % 5 = (5 / 5) * 5 = 5
// (2 + 4) % 5 = 6 % 5 = (6 / 5) * 5 = 6


// console.log(`(${i} + ${d} % 5 = ${i + d} % 5 = (${i+d} / 5) * 5 = ${(i + d) % lenArr}`)
// console.log('Offset: ', offsetLeft)
// console.log(a[offsetLeft])
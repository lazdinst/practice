const zeroSumSubArray = arr => {
  let results = [];

  for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      let currentWindow = arr.slice(i, j+1);
      let windowSum = currentWindow.reduce((pre, curr) => pre + curr, 0)
      if(windowSum === 0) {
        results.push([i,j]);
      }
    }
  }

  return results;
}

// const zeroSumSubArray = arr => {
//   let hash = new Map();
//   let rumSum = 0;

//   for(let i = 0; i < arr.length; i++) {
//     rumSum += arr[i];
//     if(hash.get(rumSum)) {
//       let indices = hash.get(rumSum)
//       indices.push(i);
//       console.log('farts: ', indices);
//       hash.set(rumSum, indices);
//       // console.log(hash.get(rumSum))
//     } else {
//       hash.set(rumSum, [i]);
//     }


//   }

//   return hash.values();
// }

let arr = [6, 3, -1, -3, 4, -2, 2, 4, 6, -12, -7]
let result = zeroSumSubArray(arr);
console.log(result);

// Subarray found from Index 2 to 4 
// Subarray found from Index 2 to 6 
// Subarray found from Index 5 to 6 
// Subarray found from Index 6 to 9 
// Subarray found from Index 0 to 10
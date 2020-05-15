// Geeks for geeks - maximize toys

// Greedy problems

// let toys = [ 20, 20, 50, 25, 50, 25, 50, 25, 50, 25, 20, 20, 20 ];

// const maximizeToys = (toys, k) => {
//   let currentSum = 0;
//   let counts = [];
//   let count = 0;

//   for(let i = 0; i < toys.length; i++) {
//     currentSum += toys[i];
    
//     if(currentSum < k) {
//       count++;
//     }

//     if(currentSum > k) {
//       currentSum = 0;
//       continue;
//     }

//     for(let j = i + 1; j < toys.length; j++) {
//       currentSum += toys[j];

//       if(currentSum > k) {
//         currentSum -= toys[j];
//       }

//       if(currentSum < k) {
//         count++;
//       }
      
//       if(currentSum === k) {
//         count++;
//         break;
//       }
//     }
    
//     counts.push(count);
//     count = 0;
//   }

//   console.log(counts);

//   let max = 0;
//   counts.forEach(count => {
//     if(count >= max) {
//       max = count;
//     }
//   })

//   return max;
// }

const maximizeToys = (toys, k) => {
  toys = toys.sort();

  let currentSum = 0;
  let count = 0;

  for(let i = 0; i < toys.length && count <= k; i++) {
    currentSum += toys[i];
    // Less than k?
    if(currentSum <= k) {
      count++;
    }
  }

  return count;
}

const maximizeToys = (toys, k) => {
  toys = toys.sort();

  let currentSum = 0;
  let count = 0;

  for(let i = 0; i < toys.length && count <= k; i++) {
    currentSum += toys[i];
    // Less than k?
    if(currentSum <= k) {
      count++;
    }
  }

  return count;
}

// let toys = [25, 25, 25, 24, 50, 50]
//let toys = [999, 5, 5]
let toys = [ 5, 12, 99, 16, 3, 9, 22, 11, 9, 4, 12]
let bank = 100;
let result = maximizeToys(toys, bank);
console.log(result)
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Brute Force Method
// const twoSum = (nums, target ) => {
//   for(i = 0; i < nums.length; i++) {
//     for(j = 1; j < nums.length; j++) {
//       if(i !== j) {
//         if(nums[i] + nums[j] === target) {
//           return [i, j];
//         } 
//       }
//     }  
//   }
// };

// Object Hash map method
// const twoSum = (nums, target ) => {
//   const hash = {}

//   // Generate a has with key value pairs being
//   // key = num, value = index of the num in nums
//   nums.forEach((num, currentIndex) => hash[num] = currentIndex)

//   for(i = 0; i < nums.length; i++) {
//     const num = nums[i];

//     // Set the value of the needed target
//     // that we will look to see if its in the hash
//     const targetValue = target - num;

//     // Set value of the needed index
//     // so we can return this later
//     const targetIndex = hash[targetValue];
    
//     // If the current index is the targetIndex
//     // Ignore and move on to the next index, so
//     // that we do not compare same index; [2,5,5,11]
//     if(i === targetIndex) continue;

//     // If the targetIndex is defined, then its in the hash
//     // and we know this is the matching index needed
//     if(targetIndex !== undefined) return [i, targetIndex]
//   }
// };

const twoSum = (nums, target) => {
  // Non Fancy Hashmap setting
  // const hashMap = new Map();
  // nums.forEach((num, index) => hashMap.set(num, index));

  // Fancy Hashmap setting
  // Initiate accumulator as the new Map()
  // Index through each element and set the hash map to the value and index
  const hashMap = nums.reduce((map, num, index) => map.set(num, index), new Map())

  for(let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const targetValue = target - num;

    // Set value of the needed index
    // so we can return this later
    const targetIndex = hashMap.get(targetValue);
    
    // If the current index is the targetIndex
    // Ignore and move on to the next index, so
    // that we do not compare same index; [2,5,5,11]
    if(i === targetIndex) continue;

    // If the targetIndex is defined, then its in the hash
    // and we know this is the matching index needed
    if(targetIndex !== undefined) return [i, targetIndex]
  }  
}


let result;
result = twoSum([2, 7, 11, 15], 9);
console.log(result);
result = twoSum([2,5,5,11], 10);
console.log(result);
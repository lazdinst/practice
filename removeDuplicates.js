/**
 * Leet code
 * @param {number[]} nums
 * @return {number}
 */

// Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
const removeDuplicates = nums => {
  let p = 0;
  for(let i = p + 1; i < nums.length; i++) {
    if(nums[i] === nums[p]) {
      nums.splice(i, 1)
      i--;
    } else {
      p++;
    }
  }
  console.log(nums)
  return nums.length;
};

let test = [0,0,0,1,1,2,2,2,3]
console.log(removeDuplicates(test))
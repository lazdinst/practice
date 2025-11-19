// https://leetcode.com/problems/search-in-rotated-sorted-array/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// We basically ignore half of the elements just after one comparison.

// Compare x with the middle element.
// If x matches with middle element, we return the mid index.
// Else If x is greater than the mid element, then x can only lie in right half subarray after the mid element. So we recur for right half.
// Else (x is smaller) recur for the left half.

var search = function(nums, target) {
    
};

const binarySearch = (arr, start, end, target) => {
  
  // Set the middle point
  let mid = Math.floor((start+end) / 2);


  if(start > end) {
    return -1;
  }

  if(target === arr[mid]) {
    return mid;
  }

  if(target < arr[mid]) {
    // Target must in in left half, so 
    binarySearch(arr, start, mid-1, target);
  }

  if(target > arr[mid]) {
    // Target must be in right half
    binarySearch(arr, start, end, target);

  }
}

let bArr = [1,2,3,4,5,6,7,8,9,10];
let bTar = 8;

let input = [4,5,6,7,0,1,2];
let target = 0;


https://leetcode.com/problems/product-of-array-except-self/

/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Example:

// Input:  [1,2,3,4]
// Output: [24,12,8,6]

// Dumb Solution
var productExceptSelf = function(nums) {
  let results = [];

  for(let i = 0; i < nums.length; i++) {
    // Create Clone of array
    let products = [...nums]
    console.log(products)
    // Remove the current element from array
    products.splice(i, 1);
    console.log(products)

    // Initialize product sum
    let productSum = null;

    // Start looping through products
    for(let j = 0; j < products.length; j++) {
      let current = products[j]

      // Check to see if the product sum exhists
      if(productSum !== null) {
        productSum *= current;
      } else {
        productSum = current;
      }
    }
    results.push(productSum);
  }

  return results;
};


let input = [1,2,3,4]
// Output: [24,12,8,6]
let output = productExceptSelf(input);
console.log(output)

/**
 * Leet Code
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = nums => {
  const hash = new Map();
  let single = null;

  for(let i = 0; i < nums.length; i++) {
    let count = 0;
    if(hash.has(nums[i])) {
      count = hash.get(nums[i]) + 1;
    } else {
      count ++;
    }
    hash.set(nums[i], count);

  }

  hash.forEach((value, key, index) => {
    if(value === 1) {
      single = key;
    }
  })

  return single;
};

const nums = [2,2,3,4,5,4,5];
console.log(singleNumber(nums));

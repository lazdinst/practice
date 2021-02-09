// https://leetcode.com/problems/container-with-most-water/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = (height) => {
  let areas = [];
  let max = 0;

  for(let i = 0; i < height.length; i++) {
    // i = 0, 1
    let target = height[i]; // 4, 3

    for(let j = i + 1; j < height.length; j++) {
      let next = height[j]; // 3, 2, 1, 4, 2
      // j = 1, 2, 3, 4, 2
      let area = 0;

      let axisDiff = Math.abs(i - j);
      // 1, 2, 3, 4, 1

      // let heightDiff = Math.abs(target - next);

      // Is next shorter than target?
      if(target >= next) {
        area = next * axisDiff;
      }

      // Is next taller than target?
      if(target < next) {
        area = target * axisDiff;
      }

      // 3, 4, 3, 16, 2
      areas.push(area)

      if(area > max) {
        max = area;
      }
    }
  }
  return max;
};

// |       |
// | |     |
// | | |   |
// | | | | |

let h = [4,3,2,1,4];
let r = maxArea(h);

console.log(r);
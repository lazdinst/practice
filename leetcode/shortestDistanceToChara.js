/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
  let distances = [...s].map((char, index) => {
    let counter = 0;

    if (char === c) {
      return counter;
    }

    let currentShortestDistance = Infinity;

    for(let i = 0; i < s.length; i++) {
      if(s[i] === c) {
        let foundDistance = Math.abs(i-index);
        if(foundDistance <= currentShortestDistance) {
          currentShortestDistance = foundDistance;
        }
      }
    }
    
    return currentShortestDistance;

  });

  return distances;
};

let s = 'loveleetcode';
let result = shortestToChar(s, 'e')
console.log(`[3,2,1,0,1,0,0,1,2,2,1,0]` === JSON.stringify(result))
console.log(`Expected: [3,2,1,0,1,0,0,1,2,2,1,0], Actual: ${JSON.stringify(result)}`)
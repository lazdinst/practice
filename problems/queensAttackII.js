const queensAttackII = (n, k, r_q, c_q, obstacles) => {
  let count = 0, r_max = n - 1, c_max = n - 1;
  let hash = new Set()

  // Add Obstacles
  obstacles.forEach(obs => {
    hash.add(`${obs[0] - 1},${obs[1] - 1}`)
  });

  // Left, Right, Up, Down
  const directions = [
    // left
    {r: 0, c: -1}, 
    //right
    {r: 0, c: 1}, 
    // up
    {r: -1, c: 0}, 
    //down
    {r: 1, c: 0},
    // up left
    {r: -1, c: -1},
    // up right
    {r: -1, c: 1},
    // down left
    {r: 1, c: -1},
    //down right
    {r: 1, c: 1},
  ];

  // UP
  for(let i = 0; i < directions.length; i++) {
    let step = directions[i];
    for(let r = r_q - 1, c = c_q - 1; r >=0 && r <= r_max && c >= 0 && c <= c_max; r+= step.r, c += step.c) {

      // If is queen skip
      if((r === r_q - 1) && (c === c_q - 1)) {
        continue;
      }

      if(!hash.has(`${r},${c}`)) {
        //Is not an obstcle
        count++;
      } else {
        break;
      }
    }
  }
  
  return count;
}

// let n1 = 4, k1 = 0, r_q1 = 4, c_q1 = 4, obstacles1 = [];
// let result1 = queensAttackII(n1, k1, r_q1, c_q1, obstacles1);
// console.log(result1)

let n2 = 5, k2 = 3, r_q2 = 4, c_q2 = 3, obstacles2 = [[5,5],[4,2],[2,3]];
let result2 = queensAttackII(n2, k2, r_q2, c_q2, obstacles2);
console.log(result2)
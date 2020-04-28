const queensAttackII = (n, k, r_q, c_q, obstacles) => {
  let board = generateBoard(n, k, r_q, c_q, obstacles);
  return board;
}

const generateBoard = (n, k, r_q, c_q, obstacles) => {
  let count = 0;
  let matrix = n => Array.from({length: n}, () => new Array(n).fill(0));
  
  let board = matrix(n);

  // Add Queen Position
  board[r_q - 1][c_q - 1] = 9;

  // Add Obstacles
  obstacles.forEach(obs => {board[obs[0]][obs[1]] = 'X'});

  // Determine possible moves
  for(let r = r_q - 1; r >= 0; r--) {
    let rowObstacle = false;
    for(let c = c_q - 1; c >= 0; c--) {
      let columnObstacle = false;
      current = board[r][c];
      if(r === (r_q - 1) && c === (c_q - 1)) {
        continue;
      }
      
      // Same Row
      if(r === r_q - 1) {
        // Im in the same row
        if(board[r][c] !== 'X' && !rowObstacle) {
          board[r][c] = 1;
          count++;
          continue;
        } else {
          rowObstacle = true;
          continue;
        }
      }

      // Same Column
      if(c === c_q - 1) {
        if(board[r][c] !== 'X' && !columnObstacle) {
          board[r][c] = 1;
          count++;
          continue;
        } else {
          columnObstacle = true;
          continue;
        }
      }

      let rowDiff = 0;
      if(r < r_q || c < c_q) {
        rowDiff = Math.abs(r_q - r);
        colDiff = Math.abs(c_q - c);
        if(rowDiff === colDiff) {
          board[r][c] = 1;
        }
      }

      // if(r > r_q || c > c_q) {
      //   rowDiff = Math.abs(r - r_q);
      //   colDiff = Math.abs(c - c_q);
      //   if(rowDiff === colDiff) {
      //     board[r][c] = 1;
      //   }
      // }




    }
  }
  return board;
}

// let n1 = 4, k1 = 0, r_q1 = 4, c_q1 = 4, obstacles1 = [];
// let result1 = queensAttackII(n1, k1, r_q1, c_q1, obstacles1);
// console.log(result1)



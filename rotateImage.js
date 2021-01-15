const rotateImage = m => {
  let n = m.length;

  for(let i = 0; i < Math.floor(n/2); i++) {
    for(let j = 0; j < n - (2*i) - 1; j++) {
      let temp = null;

      let a = m[i][i+j]
      let b = m[i+j][n-1-i]
      let c = m[n-1-i][n-1-i-j];
      let d = m[n-1-i-j][i];

      temp = b;
      b = a;
      a = temp;

      temp = c;
      c = a;
      a = temp;

      temp = d;
      d = a;
      a = temp;

      m[i][i+j] = a;
      m[i+j][n-1-i] = b;
      m[n-1-i][n-1-i-j] = c;
      m[n-1-i-j][i] = d;

    }
  }

  return m;
}

const img = [[1, 2, 3],
             [4, 5, 6],
             [7, 8, 9]];

// 1 2 3
// 4 5 6 
// 7 8 9

// 7 4 1
// 8 5 2
// 9 6 3

const result = rotateImage(img);
console.log(result);  
function rotateImage(a) {
  let result = a.slice(0)
  let l = a.length;
  for(r = 0; r < a.length; r++) {
    for(c = 0; c < a.length; c++) {
      let pixel = a[r][c];
      //r = 0, c = 0
      console.log('Row: ', r)
      console.log('Column: ', c)
      //
      const row = Math.abs(c - l + 1)

      result[l - r][l - c - 1] = pixel;

    }
  }
  return result
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

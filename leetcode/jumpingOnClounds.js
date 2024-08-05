const jumpingOnClouds = c => {
  let jumps = 0;
  let currentCloud;
  let nextCloud;
  let nextNextCloud;

  for(let i = 0; i < c.length; i++) {
    currentCloud = c[i];
    nextCloud = c[i+1];
    nextNextCloud = c[i+2];

    if(currentCloud === 1) {
      //Do Nothing We are continuing
      continue;
    }
    
    if(nextCloud === 0 && nextNextCloud === 0) {
      jumps++;
      i++;
      continue;
    }

    if(nextCloud === 0) {
      jumps++;
      continue;
    }

    if(nextCloud === 1) {
      jumps++;
      continue;
    }

  }
  return jumps;
}

const c1 = [0, 0, 1, 0, 0, 1, 0];

var result = jumpingOnClouds(c1);
console.assert(result, 4);

const countIslands = world => {
  let count = 0;
  let rows = world.length;
  let columns = world[0].length;

  let explored = new Array(rows).fill(new Array(columns).fill(false));

  for(let r = 0; r < rows; r++) {
    for(let c = 0; c < columns; c++) {
      if (!explored[r][c] && world[r][c] === 1) {
        count++;
        exploreIsland(world, r, c, explored);
        explored[r][c] = true;
      }
    }
  }

  return count;
}

const exploreIsland = (world, r, c, explored) => {
  let rows = world.length;
  let columns = world[0].length;
  
  if (r < 0 || r > rows - 1 || c < 0 || c > columns - 1) {
    // Outside the bounds of this
    return;
  }

  if(explored[r][c] === true) {
    // We are already been here
    return;
  } 

  explored[r][c] = true;
  if(world[r][c] === 0) {
    return;
  }


  let steps = [
    {r: -1, c: -1},
    {r: -1, c: 0},
    {r: -1, c: 1},
    {r: 0, c: -1},
    {r: 0, c: 1},
    {r: 1, c: -1},
    {r: 1, c: 0},
    {r: 1, c: 1},
  ]

  steps.forEach(step => {
    exploreIsland(world, r + step.r, c + step.c, explored)
  })
}

// const world = [
//   [0,0,0,0,0],
//   [0,0,0,1,0],
//   [0,1,0,1,0],
//   [0,1,0,1,0],
//   [0,1,0,1,0],
//   [0,0,1,0,0],
//   [0,0,0,0,0],
// ];

// const world = [
//   [0,0,0,0,0],
//   [0,0,0,1,0],
//   [0,1,0,0,0],
//   [0,1,0,1,0],
//   [0,1,0,1,0],
//   [0,0,0,0,0],
//   [0,0,0,0,0],
// ];

const world= [
  [1,1,0,0,0],
  [1,1,0,0,0],
  [0,0,0,0,0],
  [0,0,0,0,0],
  [0,0,0,0,0],
  [0,0,0,0,0],
  [1,0,0,0,0],
];

const r1 = countIslands(world);
console.log(r1);


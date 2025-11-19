const countIslands = world => {
  let count = 0;
  let rows = world.length;
  let columns = world[0].length;
  console.log(world)
  var visited = new Array(rows).fill(new Array(columns).fill(false));
  console.log(visited)
  for(let r = 0; r < rows; r ++) {
    for(let c = 0; c < columns; c++) {
      if(!visited[r][c] && world[r][c] === 1) {
        console.log(`I found an Land ${r} ${c} = ${world[r][c]}`)
        explore(world, r, c, visited);
        count++;
      }
    }
  }
  return count;
}

const isSafe = (world, r, c) => {
  let rows = world.length;
  let columns = world[0].length;
  return r < 0 || r > rows - 1 || c < 0 || c > columns - 1;
}

const explore = (world, r, c, visited) => {
  
  if(isSafe(world, r, c)) {
    // Out of bounds
    return;
  }
  
  if(visited[r][c] === true) {
    return;
  }

  visited[r][c] = true;

  // Traverse the surronding area
  if(world[r][c] === 0) {
    return;
  }



  console.log('========================================')
  console.log('')

  let steps = [
    {r: -1, c: -1},
    {r: -1, c: 0},
    {r: -1, c: 1},
    {r: 0, c: -1},
    {r: 0, c: 1},
    {r: 1, c: -1},
    {r: 1, c: 0},
    {r: 1, c: 1},
  ];

  steps.forEach(step => {
    console.log('')
    console.log('------------------------------------------------')
    console.log(`Steps: (${r+step.r}, ${c+step.c})`)
    console.log('------------------------------------------------')
    console.log('')
    explore(world, r + step.r, c + step.c, visited)
  })

}

const world= [
  [1,1,0,1],
  [1,1,0,0],
  [0,0,0,1],
  [1,0,0,1],
];

const r1 = countIslands(world);
console.log(r1);
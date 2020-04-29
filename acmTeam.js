const acmTeam = topic => {
  let n = topic.length; // number of attendees
  let m = topic[0].length;
  let max = 0;
  let teams = 0;
  let results = []

  for(let i = 0; i < n; i++) {
    let a = topic[i]; // first attendee of interest
    for(let j = i + 1; j < n; j++) {
      let b = topic[j]; // second attendee of interest
      let count = 0;
      for( let k = 0; k < m; k++) {
        if(a[k] === '1' || b[k] === '1') {
          count++;
        }
      }
      if (count > max) {
        max = count;
      }
      results.push(count);
    }
  }

  teams = results.reduce((acc, val) => {return val === max ? acc + 1 : acc + 0}, 0)
  return [max, teams];
}

let data = [ '10101', '11100', '11010', '00101' ];
// let data = [ '11101', '10101', '11001', '10111', '10000', '01110' ]
let result = acmTeam(data);
console.log(result)

// Output a tuple [a,b] where "a" represents the maximum 
// number of topics a 2-person team can know and "b" represents
//  the number of ways to form a 2-person team that knows the maximum 
//  number of topics.
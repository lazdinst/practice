// https://leetcode.com/problems/combination-sum/

const combinationSum = (solutions, candidates, target, start, current) => {

  for(let i = start; i < candidates.length; i++) {
    let candidate = candidates[i];
    let currentSum = current.reduce((acc, curr) => acc + curr, 0);

    // Take sum of current, add candidate to see if === target
    if((currentSum + candidate) === target) {
      let solution = [...current];
      solution.push(candidate);
      solutions.push(solution);
      return;
    }

    if((currentSum + candidate) < target) {
      let solution = [...current];
      solution.push(candidate);
      combinationSum(solutions, candidates, target, i, solution);
    }

    if((currentSum + candidate) > target) {
      return;
    }
  }

  return solutions;
}


// Recursive solutions have these three things 
  // check stopping conditions
  // call recursive functions
  // return updated results

// Example Format:

  // function(inputs):
  //   if(sum(current) == target)
  //   {
  //     return current;
  //   }
  //   else if(sum(current) > target)
  //   {
  //     return [];
  //   }

  //   for(...)
  //   {
  //     solutions += function(...)
  //   }

  //   return solutions;

// const c1 = [2,3,6,7], t1 = 7;
const c2 = [0], t2 = 8;
// var r1 = combinationSum([], c1, t1, 0, []);
var r2 = combinationSum([], c2, t2, 0, []);
console.log(r1);
console.log(r2);
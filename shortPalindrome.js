// Hacker Rank - shortPalindrome

const shortPalindrome = s => {
  let count = 0;

  // Count how many times we have seen this character
  let arr1 = new Array(26).fill(0);

  // Count how many times we have seen a character befor another
  let arr2 = new Array(26).fill(new Array(26).fill(0));

  // Counts how many times a character proceeds all others in a string
  let arr3 = new Array(26)

  // Arr 1 loop
  for(let i = 0; i < s.length; i++) {
    // get the index of the character
    let cIndex = getIndex(s, i);
    arr1[cIndex]++;

    // Arr2 loop

    // arr 3 loop
  
  }
  return arr1;
}

const getIndex = (s, i) => {
  return s.charCodeAt(i) - 'a'.charCodeAt(0);
}

let s = 'ghhggh';
// (0,1,2,3)
// (0,1,2,4)
// (0,3,4,5)
// (2,3,4,5)
let result = shortPalindrome(s)
console.log(result)
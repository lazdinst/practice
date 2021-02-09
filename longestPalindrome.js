// https://leetcode.com/problems/longest-palindromic-substring/


/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if(s.length < 1 || !s) {
    return '';
  }

  let longest = '';

  for(let i = 0; i < s.length; i++) {
    let oddCenter = expandFromCenter(s, i, i);
    let evenCenter = expandFromCenter(s, i-1, i);

    if(oddCenter.length > longest.length) {
      longest = oddCenter;
    }

    if(evenCenter.length > longest.length) {
      longest = evenCenter;
    }
  }

  return longest;
};

const expandFromCenter  = (str, left, right) => {
  let i = 0;

  while(str[left - i] && str[left-i] === str[right+i]) {
    i++;
  }
  i--;

  return str.slice(left - i, right + i + 1);
}

let input = "babad";
let r = longestPalindrome(input)
console.log(r);
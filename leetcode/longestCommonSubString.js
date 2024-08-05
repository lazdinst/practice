const longestCommonSubString = (s1, s2) => {
  let largestSubString = ''; 
  
  for(let i = 0; i < s1.length; i++) {
    for(let j = 0; j < s2.length; j++) {
      if(s1[i] === s2[j]) {
        let match = longestMatch(s1, s2, i, j);
        if(match.length > largestSubString) {
          largestSubString = match;
        }
      }
    }
  }
  return largestSubString;
}

const longestMatch = (s1, s2, a, b) => {
  let match = '';
  for(let i = a, j = b; i < s1.length && j < s2.length; i++, j++) {
    if(s1[i] === s2[j]) {
      match += s1[i];
    } else {
      break;
    }
  }
  return match
}

const s01 = '11111111111111111111111111111111111111111111111111111111111111111111111111111111111111';
const s02 = '011111111111111111111111111111111111111111111111111111111111111111111111111111111111111';

const result3 = longestCommonSubString(s01, s02);
console.log(result3);

const s1 = "The quick brown fox jumps over the lazy dog.";
const s2 = "I once met a stupid but quick brown fox just the other day.";

const s3 = "3.1415926535897926";
const s4 = "1951234265358979598789123";


const result1 = longestCommonSubString(s1, s2);
const result2 = longestCommonSubString(s3, s4);
console.assert(result1, ' quick brown fox ju')
console.assert(result2, '265358979')
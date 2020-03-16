// Longest Substring Without Repeating Characters

// Given a string, find the length of the longest substring without repeating characters.

// Example 1:

// Input: "abcabcbb"
// Output: 3 
// Explanation: The answer is "abc", with the length of 3. 
// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3. 
//              Note that the answer must be a substring, "pwke" is a subsequence and not a substring.


// Brute Force Approach
// const lengthOfLongestSubstring = s => {
//   let longest = '';
//   if(s.length > 1) {
//     for(let i = 0; i < s.length; i++) {
//       let windowStart = i;
//       let windowEnd = null;
//       for(let j = i; j < s.length; j++) {
//         windowEnd = j;
//         let currentSubStr = s.slice(windowStart, windowEnd + 1)
//         let isIsoGram = checkIsogram(currentSubStr);

//         if(isIsoGram) {
//           if(currentSubStr.length > longest.length) {
//             longest = currentSubStr;
//           }
//         } else {
//           break;
//         }
//       }
//     }
//   } else {
//     return s.length;
//   }

//   return longest.length;
// }

// const checkIsogram = s => {
//   let strSet = new Set();
//   for(let i = 0; i < s.length; i++) {
//     const charOfInterest = s[i];
//     if(strSet.has(charOfInterest)) {
//       return false;
//     } else {
//       strSet.add(charOfInterest);
//     }
//   }
//   return true;
// }


// The idea behind this code is to use hash maps to keep track of seen substrings.
// Obviously if any string is less than two, the longest substring is equal to the length of that substring.
// However, if not, then we would have to consider another approach.

// Consider a string:
// _ _ _ _ _ a _ _ _ _ _ f _ _ _ f _ _ _ a

// Where _ means a distinct character from all the others.

// As we transverse the string, we put a character into the hash table if it's not already in there where the key is the character and the value is the index. --> hash = {char: index}

// If there character is already in the string, we have to update the index after we do the following procedures:

// We have a curr that keeps track of the length of the substring that has not seen an already seen character. As we get to the second f, curr = 16. So, so far the max_len is going to be max(max_len = 0, curr = 16) [Since max_len has yet to be updated].

// Now, we start our curr from the character after the first f. curr now becomes the distance between the first f and the second f, which is i - hash[s[i]]. We update the hash and continue.

// The max_len is determined by the max of the current max_len and the curr value when it encounters a character already seen.

// Finally, we have completely transversed the string and arrived at the max length of the substring that does not have any repeating characters.

const lengthOfLongestSubstring = s => {
  let hash = new Map();
  let longestSubstring = 0;

  if(s.length < 2) {
    return s.length;
  }

  for( let i = 0; i < s.length; i++) {
    const current = s[i];
    
    if(hash.get(current)) {
      
    }

    hash.set(current, i);

  }

  return longestSubstring;
}


let str1 = 'abcabcbb'
let result = lengthOfLongestSubstring(str1);

console.log(result);
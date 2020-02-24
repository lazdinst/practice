function firstNotRepeatingCharacter(s) {
  // console.log('STRING: ', s)
  for(i=0; i < s.length; i++) {
    // console.log(' ############################### ')
    const letter = s[i];
    const prefix = s.slice(0,i)
    const suffix = s.slice(i+1, s.length);


    console.log('Letter: ', letter)
    console.log('Prefix: ', prefix)
    console.log('Suffix: ',  suffix)
    console.log(`${prefix}${suffix}`.includes(letter))
    if(`${prefix}${suffix}`.includes(letter)) {
      // I found a match
      // Do Nothing
      // console.log('Match Found, It Repeats')
    } else {
      // This has no match
      console.log('Not Found')
      return letter
    }
  }
  
  return '_';
}

const s = 'abacabad';

const result = firstNotRepeatingCharacter(s)
console.log(result);
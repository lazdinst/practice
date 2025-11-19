const alternatingCharacters = s => {
  let deletions = s.split('').reduce((acc, curr, idx, src) => 
      curr === src[idx+1] ? acc + 1 : acc + 0, 0)
  return deletions;
}

// let s1 = 'AAAA'
// let s2 = 'BBBBB'
// let s3 = 'ABABABAB'
// let s4 = 'BABABA'
// let s5 = 'AAABBB'
let s6 = 'AAABBBAABB'

// let r1 = alternatingCharacters(s1)
// let r2 = alternatingCharacters(s2)
// let r3 = alternatingCharacters(s3)
// let r4 = alternatingCharacters(s4)
// let r5 = alternatingCharacters(s5)
let r6 = alternatingCharacters(s6)

// console.assert(r1, 3)
console.assert(r6, 6)
console.log(r6)
function dec2bin(dec){
  return (dec >>> 0).toString(2);
}

var hammingWeight = function(n) {
  let str = parseInt(n).toString(2);

  let r = [...str].reduce((acc, curr) => {
    if(Number(curr) === 1) {
      return acc+1;
    } else {
      return acc;
    }
  }, 0)

  return r;
};

let n = 11;

let result = hammingWeight(n);

console.log(result)
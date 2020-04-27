
const countingValleys = (n,s) => {
  var altitude = null;
  var count = 0;

  for(var i = 0; i < n; i++) {
    if((s[i] === 'U') && (altitude + 1 === 0) && (i !== 0)) {
      // console.log('Exiting Valley')
      // console.log(i)
      // console.log(s[i])
      // console.log(altitude)
      // console.log(count)
      // coming out of a valley
      count++;
    } 

    if(altitude === null) {
      // at sea level
      altitude = 0;
    }

    if(s[i] === 'U') {
      //Going up 
      altitude++;
    }

    if(s[i] === 'D') {
      //Going up 
      altitude--;
    }
  }
  return count;
}

var n = 8
var input = 'UDDDUDUU'

var result = countingValleys(n,input);
console.log(result);

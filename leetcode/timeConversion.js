// Hacker Ranker - Time Conversion

const timeConversion = time => {
  let milTime = '';
  // hh.mm.ssAM
  let amOrPM = getAMorPM(time.slice(8));
  let currentTime = time.slice(0,8).split(':');

  // IF this is in the morning, 12am to 11am
  if( amOrPM === 0 ) {
    
    //If this is zero dark
    if(currentTime[0] === '12') {
      currentTime[0] = '00';
      milTime = currentTime.join(':');
    } else {
      milTime = time.slice(0,8);
    }
  }

  if(amOrPM === 1) {
    milTime = addTwelveHours(time.slice(0,8));
  }
  
  return milTime;
  // 19:05:45
}

const addTwelveHours = time => {
  time = time.split(':')
  time[0] = Number(time[0]) + 12;
  if(time[0] === 24) {
    time[0] = '12'
  }
  return time.join(':');
}

const getAMorPM = time => {
  if(time === 'AM') {
    return 0;
  }
  if(time === 'PM') {
    return 1;
  }
}


let time = '12:05:45PM';
let result = timeConversion(time);
console.log(result);
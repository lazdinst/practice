function firstDuplicate(a) {
  var hash = {};
  
  for(i = 0; i < a.length; i++) {
    var key = a[i].toString()

    if(hash[key]){
      hash[key]++;
    }

    if(hash[key] === undefined) {
      hash[key] = 1;
    }

    if(hash[key] === 2) {
      return key;
    }
  }
  return -1;
}

function firstDuplicateBest(a) {
  const set1 = new Set()
  for (const e of a) {
    if (set1.has(e)) {
      return e
    } else {
      set1.add(e)
    }
  }
  return -1;
}

var a = [2, 1, 3, 5, 3, 2];
// var result = firstDuplicate(a)
var result = firstDuplicateBest(a)
console.log(result);

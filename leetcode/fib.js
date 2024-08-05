const memoFib = n => {
  const memo = new Map();

  const f = n => {
    if(memo.has(n)) {
      return memo.get(n);
    } else {
      let val = null;
      if(n <= 1) {
        val = n;
        memo.set(n,val);
        return n;
      } else {
        val = f(n - 1) + f(n - 2);  
        memo.set(n,val);
        return val;
      }
    }
  }
  return f(n);
}

console.log(memoFib(9));


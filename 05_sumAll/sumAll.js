const sumAll = function(n1,n2) {
  if (n1 < 0 || n2 < 0 || typeof n1 !== 'number' || typeof n2 !== 'number') return 'ERROR';
  let sum = 0;
  let max = n1 > n2 ? n1 : n2;
  let small = max === n1 ? n2 : n1;
  for (let i = small; i <= max; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;

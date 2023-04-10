const fibonacci = function(num) {
  if (num < 0 ) return 'OOPS'
  let arr = [1,1];
  for (let i = 0; i < +num - 2; i++) {
    arr.push(arr[arr.length-1]+arr[arr.length - 2])
  }
  return arr[arr.length -1]
};

// Do not edit below this line
module.exports = fibonacci;

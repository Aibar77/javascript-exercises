const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	return arr ? arr.reduce((total,num)=> total + num, 0) : 0;
};

const multiply = function(arr) {
  return arr ? arr.reduce((total, num) => total * num, 1) : 0;
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(num) {
	if (num === 0) return 1;
  let sum = 1;
  for (let i = num; i > 1; i--) {
    sum *= i;
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

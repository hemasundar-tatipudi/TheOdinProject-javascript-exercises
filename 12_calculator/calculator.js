const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total,sum) => total+sum, 0);
};

const multiply = function(arr) {
  return arr.reduce((total,prod) => total*prod, 1);
};

const power = function(a,b) {
	return a ** b;
};

const factorial = function(n) {
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;h
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

const removeFromArray = function(arr1,...args) {
  
  return arr1.filter(item => !args.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;

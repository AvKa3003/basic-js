const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */

function transform(arrArg) {
  
  if (!Array.isArray(arrArg)) throw Error("'arr' parameter must be an instance of the Array!");
  let arr = [...arrArg];
  let i = 0;
  while (i < arr.length) {
    if (arr[i] === '--discard-next') {
      if (i < arr.length - 1) {
        arr[i] = null;
        arr[i + 1] = null
        // arr.splice(i, 2);
      } else {
        arr[i] = null;
        // arr.splice(i, 1);
      }
      continue
    };
    if (arr[i] === '--discard-prev') {
      if (i >= 1) {
        arr[i - 1] = null;
        arr[i] = null
        // arr.splice(i-1, 2);
      } else {
        arr[i] = null;
        // arr.splice(i, 1);
      }
      continue
    };
    if (arr[i] === '--double-next') {
      if (i < arr.length - 1) {
        arr[i] = arr[i + 1];
      } else {
        arr[i] = null;
        // arr.splice(i, 1);
      }
      continue
    };
    if (arr[i] === '--double-prev') {
      if (i > 1) {
        arr[i] = arr[i - 1];
      } else {
        arr[i] = null;
        // arr.splice(i, 1);
      }
      continue
    };
    i++;
  }
  return arr.filter((item) => item != null );
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  transform
};

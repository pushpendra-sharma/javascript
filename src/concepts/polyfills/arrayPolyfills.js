const array = ['Bot', 'Angle', 'Elon'];

array[5] = 'Musk';
// const array = ['Bot', 'Angle', 'Elon'];

if (!Array.prototype.myFilter) {
  Array.prototype.myFilter = function (callback, thisArg) {
    if (typeof callback !== 'function') {
      throw new TypeError(`${callback} is not a function`);
    }

    const result = [];
    for (let i = 0; i < this.length; i++) {
      console.log(i);
      console.log(this);

      if (i in this) {
        // Check if the index exists to handle sparse arrays
        /**
         Uses .call(thisArg, ...), explicitly setting the this value for the callback.
        Ensures the callback executes with the correct context (thisArg).
         */
        if (callback.call(thisArg, this[i], i, this)) {
          result.push(this[i]);
        }
      }
    }
    return result;
  };
}

const filteredOutputUsingBuiltInFilter = array.filter(item => item.length > 3);
const filteredOutputUsingPolyfillFilter = array.myFilter(
  item => item.length > 3
);

console.log(filteredOutputUsingBuiltInFilter);
console.log(filteredOutputUsingPolyfillFilter);

const arr = [1, , 3, 4]; // Sparse array (index 1 is missing)
const filtered = arr.myFilter(num => num > 2);

console.log(filtered);

if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (callback, thisArg) {
    if (typeof callback !== 'function') {
      throw new TypeError(`${callback} is not a function`);
    }

    const result = [];
    for (let i = 0; i < this.length; i++) {
      if (i in this) {
        // for handling array like [1,,,,3] with no valid item at some indices
        const x = callback.call(thisArg, this[i], i, this);
        result[i] = x;
      }
    }
    return result;
  };
}

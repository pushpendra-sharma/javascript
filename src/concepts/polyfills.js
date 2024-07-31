Array.prototype.myMap = function (x) {
  const newArray = [];

  for (let i = 0; i < this.length; i++) {
    newArray.push(x(this[i], i, this));
  }
  return newArray;
};

const myArray = ['Bot', 'Angle', 'Mc', 'Elon'];

let output = myArray.myMap(item => item.length);
let output2 = myArray.map((item, index) => ({ index: item.length }));

Array.prototype.myFilter = function (x) {
  const newArray = [];

  for (let i = 0; i < this.length; i++) {
    if (x(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }

  return newArray;
};

let filteredOutput = myArray.myFilter(item => item.length > 3);

Array.prototype.myReduce = function (callback, initialValue) {
  let returnValue;
  // initialValue can be anything, 0, NaN, null

  if (initialValue !== undefined) returnValue = initialValue;
  let currentValue = initialValue;
  let nextValue = initialValue;

  return returnValue;
};

// "old"
isNaN();
// preffered
Number.isNaN();
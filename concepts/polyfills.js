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

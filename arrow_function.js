// check in chrome
function normalize() {
    // 1st this points to object
    // 2nd this points to coords array of object
    console.log(this.coords.map(n => n / this.length));
  }
  
  normalize.call({ coords: [0, 2, 3], length: 5 }); // → [0, 0.4, 0.6]
  
  function callback(x) {
    // here this points to window
    return x / this.length;
  }
  
  function test() {
    console.log(this.arr.map(callback));
  }
  
  test.call({ arr: [0, 2, 3], length: 5 }); // → [0, 0.4, 0.6]
  
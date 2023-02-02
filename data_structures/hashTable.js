class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
    this.size = size;
  }

  // hash fucntion
  _hash(key) {
    let index = 0;
    const WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let value = key[i].charCodeAt(0) - 96;
      index = (index * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return index;
  }

  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }

  // seperate chaining
  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  // returns all keys
  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }

    return keysArr;
  }

  // return all uniques values
  values() {
    let valuesArr = [];
    for (let element of this.keyMap) {
      if (element) {
        for (let j = 0; j < element.length; j++) {
          if (!valuesArr.includes(element[j][1])) {
            valuesArr.push(element[j][1]);
          }
        }
      }
    }

    return valuesArr;
  }
}

const hashtable = new HashTable(17);
hashtable.set('maroon', '#800000');
hashtable.set('yellow', '#FFFF00');
hashtable.set('olive', '#808000');
hashtable.set('salmon', '#FA8072');
hashtable.set('lightcoral', '#F08080');
hashtable.set('plum', '#DDA0DD');
hashtable.set('purple', '#DDA0DD');
hashtable.set('violet', '#DDA0DD');
hashtable.set('mediumvioletred', '#C71585');

hashtable.keys()
hashtable.values()
// Time complexity O(n) Space complexity O(1)
function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }

  return -1;
}

console.log(linearSearch([1, 2, 3, 4], 2)); // 1
console.log(linearSearch([1, 2, 3, 4, 5], 5)); // 4
console.log(linearSearch([1, 2, 3, 4, 5], 6)); // -1

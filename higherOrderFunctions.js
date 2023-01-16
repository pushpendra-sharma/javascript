const radii = [1, 3, 5, 6];

const area = r => Math.PI * r * r;

const diameter = r => 2 * r;

const circumference = r => 2 * Math.PI * r;

const calculate = (array, logic) => {
  const result = [];
  for (let radius of array) {
    result.push(logic(radius));
  }

  return result;
};

console.log('Area: ', calculate(radii, area));

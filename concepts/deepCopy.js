const user = {
  name: 'Bot',
  age: 21,
  address: {
    city: 'Nxz',
    state: 'S.F.',
  },
};

// shallow copy -> still refers to the same old object, 
// if any change happens in user it is reflected in ob1

const ob1 = user; 

const deepCopyObject = object => {
  if (!object) return object;
  const clonedObject = {};
  for (const key in object) {
    value = object[key];
    clonedObject[key] =
      typeof value === 'object' ? deepCopyObject(value) : value;
  }

  return clonedObject;
};

// deep copy
const deeCopiedObject = deepCopyObject(user);

const deppCopy2 = JSON.parse(JSON.stringify(user));

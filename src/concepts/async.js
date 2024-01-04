function getById(id) {
  return new Promise(resolve => {
    setTimeout(() => resolve(id), 2000);
  });
}

const ids = [10, 20, 30];

(async function () {
  /* works synchronously*/
  for (const id of ids) {
    const res = await getById(id);
    console.log(`using for...of ${res}`);
  }
})();

(async function () {
  /* works async*/
  ids.forEach(async id => {
    const response = await getById(id);
    console.log(`using forEach ${response}`);
  });
})();

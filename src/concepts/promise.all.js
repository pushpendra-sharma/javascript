export const promise1 = Promise.resolve('i am directly resolved');
export const promise2 = 'constant like value';
export const promise3 = 45;
export const promise4 = Promise.reject('i am directly rejected');

export const fastResolvePromise = new Promise((resolve, reject) => {
  setTimeout(resolve, 20, 'text');
});

export const slowResolvePromise = new Promise((resolve, reject) => {
  setTimeout(resolve, 300, 'text');
});

export const fastRejectPromise = new Promise((resolve, reject) => {
  setTimeout(resolve, 10, 'text');
});

export const slowRejectPromise = new Promise((resolve, reject) => {
  setTimeout(resolve, 400, 'text');
});

const allPromisesArray = [
  promise1,
  promise2,
  promise3,
  promise4,
  fastResolvePromise,
  slowResolvePromise,
  fastRejectPromise,
  slowRejectPromise,
];

const onlyResolvePromisesArray = [];
const onlyRejectPromisesArray = [];

export async function promiseAllExampleUsingThen(promises) {
  Promise.all(promises)
    .then(values => {
      console.log(':::using then:::', values);
    })
    .catch(err => {
      console.log(':::using then error:::', err);
    });
}

export async function promiseAllExampleUsingAsycnAwait(promises) {
  try {
    const promiseResultArray = await Promise.all([promises]);

    promiseResultArray.forEach((val, idx) => console.log(`::: ${idx}:::`, val));
  } catch (err) {
    console.error(':::using await:::', err);
  }
}

promiseAllExampleUsingThen(allPromisesArray);
promiseAllExampleUsingAsycnAwait(allPromisesArray);

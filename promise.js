// creating promise, it accepts one callback function as argument
const promis = new Promise((resolve, reject) => {
  // both reslove and reject are functions

  // called after async operation
  resolve(); // changes status from 'pending' to 'fulfilled'
  reject(); // changes status from 'pending' to 'rejected'
});

// callback fn to be called after resolve
const handleFulfilled = x => {
  console.log('resolve callback function');
  console.log(x);
};

// callback fn to be called after reject
const handleRejected = y => {
  console.log('reject callback function');
  console.log(y);
};

const promis2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Resolve called');
  }, 2000);

  setTimeout(() => {
    reject('Reject called');
  }, 3000);
});
async function ciniv() {
  console.log('async');
}
const cev = ciniv();

//   pending to fulfilled -> then() is executed
//   pending to rejected -> catch() is executed
promis2.then(handleFulfilled).catch(handleRejected);

// callback ->

let promise1 = new Promise((resolve,reject) => {
  resolve(1);
});

promise1.then(data => {
  console.log(data);
});

let promise2 = new Promise((resolve,reject) => {
  resolve(2);
});

promise2.then(data => {
  console.log(data);
});

Promise.all([promise1,promise2]).then(() => {
  console.log(3);
});
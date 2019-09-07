const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("p1 resolve");
    resolve("p1");
  }, 100);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("p2 resolve");
    resolve("p2");
  }, 200);
});

const p = Promise.race([p1, p2])
  .then(data => {
    console.log("JSLog: data", data);
  })
  .catch(err => {
    console.log("JSLog: err", err);
  });

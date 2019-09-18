let p1=new Promise((resolve,reject) => {
  console.log(1);
   setTimeout(() => {
       console.log(2);
       resolve('p1');
   },3000);
  });
  let p2=new Promise((resolve,reject) => {
  console.log(4);
   setTimeout(() => {
       console.log(5);
       resolve('p2');
   },200);
  });
  Promise.all([p1,null]).then((data)=>{
    console.log(data);
  });
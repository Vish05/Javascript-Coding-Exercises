// await can only be used inside an async function
// async await return promise
// await keyword always used infrot of promise

const p = new Promise((reslove, reject) => {
  setTimeout(() => {
    reslove("Promise Resloved Value");
  }, 10000);
});

async function handlePromise() {
  const val = await p; // Wait for 10 seconds
  console.log(val);
  console.log("Namaster Javascript");
}
handlePromise();
// output

// Promise Resloved Value
// Namaster Javascript

function getData() {
  p.then((res) => console.log(res));
  console.log("Namaster Javascript"); // Not wait for 10 sec
}
// getData();
// output
//Namaster Javascript
// Promise Resloved Value

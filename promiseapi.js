// Promise All: Used in parellel api call
// It will take Array of Promises
// promise.all([p1,p2,p3])
// It will wait for all of them to finish

// P1 = 3 sec P2 = 1s and P3 = 2s
//Promise.all([p1, p2, p3]); // All got success
//output [p1,p2,p3]

//Promise.all([p1, p2, p3]); // If All got failure, As soons as error it will return the error. It will not wait for other promises.
//output [p1] if p1 is failed.

// Promise All Setteled: Used in parellel api call

//Promise.allSettled([p1, p2, p3]); // All got success
//output [p1,p2,p3]

// Promise.allSettled([p1, p2, p3]); // If All got failure, It will wait for other promise to perform
//output [p1,p2,p3] if p1,p2 and p3 are failed

// Promise Race: Used in parellel api call
// It will give the value of first executed settletted promise.
// It is making race and which promise took lesser time will execute first

// Promise.race([p1, p2, p3]); // All got success P2 is fast only return P2
// output [p2]

// Promise.race([p1, p2, p3]); // If All got failure, p2 is fast but return error
// output [p2]

// Promise any: Used in parellel api call
// It will give the value of first success promise in race
// It is success seeking race

// Promise.any([p1, p2, p3]); // If P1 is rejected and p2 is success then
// output [p2]

// Promise.any([p1, p2, p3]); // If p1 is rejected and p2 is also rejected then p3 is success then
// output [p3]

// if all promise are rejecte it will give us Error: "AggregateError: All promises were rejected"

//Example:
// Promise with All
// const pr1 = new Promise((reslove, reject) => {
//   setTimeout(() => reject("p1 Fail"), 3000);
// });
// const pr2 = new Promise((reslove, reject) => {
//   setTimeout(() => reslove("p2 Success"), 1000);
// });
// const pr3 = new Promise((reslove, reject) => {
//   setTimeout(() => reslove("p3 Success"), 2000);
// });

// Promise.all([pr1, pr2, pr3])
//   .then((result) => {
//     console.log("test" + result);
//   })
//   .catch((err) => {
//     console.log("error=" + err);
//   });

// Promise with All Settled
const pr1 = new Promise((reslove, reject) => {
  setTimeout(() => reject("p1 Fail"), 3000);
});
const pr2 = new Promise((reslove, reject) => {
  setTimeout(() => reject("p2 Success"), 1000);
});
const pr3 = new Promise((reslove, reject) => {
  setTimeout(() => reject("p3 Fail"), 2000);
});

Promise.any([pr1, pr2, pr3])
  .then((result) => {
    console.log("result=>" + result);
  })
  .catch((err) => {
    console.log("error=" + err);
  });

//  Promise State
//  Setteled -> got the result
//  resloved or reject
//  successs or failter
//  fulfilled or rejected

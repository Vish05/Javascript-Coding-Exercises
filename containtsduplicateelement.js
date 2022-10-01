let arra = ["a", "x", "y", "z"];
let arrb = ["a", "b", "c", "d"];

// 1st soluations
// function containsElement(arr1, arr2) {
//   for (i = 0; i <= arr1.length; i++) {
//     for (j = 0; j <= arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         return true;
//       }
//     }
//     return false;
//   }
// }

// console.log(containsElement(arra, arrb));

//Time Complexity O(a*b)

// 2nd soluations

function containsElement(arr1, arr2) {
  return arr1.some((item) => arr2.includes(item));
}

console.log(containsElement(arra, arrb));

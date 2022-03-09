const arr = [1,3,2,2,1,9,4,1,6,5,90];

const output = [... new Set(arr)];

const countArray = arr.reduce((prev,current) => {
    prev[current] = (prev[current] || 0) + 1;
    return prev;
},{});

console.log(countArray);
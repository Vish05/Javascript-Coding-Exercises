
const clumsysquare = (num1, num2)  => {
    for(let i=1; i<=100000; i++) {}

    return num1 * num2;
}

console.time("First Call");
console.log(clumsysquare(1231,6234));
console.timeEnd("First Call");

console.time("Second Call");
console.log(clumsysquare(1231,6234));
console.timeEnd("Second Call");


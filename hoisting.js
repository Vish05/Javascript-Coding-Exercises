function hoisting() {
    console.log(number,x,z); // undefined

    const z= 15; // Cannot access z before initialize
    let x = 12; // Cannot access x before initialize
    var number = 10;
}
hoisting();
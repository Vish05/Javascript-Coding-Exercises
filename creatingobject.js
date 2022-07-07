/*
1. Object Literals.
2. New operator or constructor.
3. Object.create method.
4. Class.
*/

/*1. Object Literals*/ 
var car = {
    model: 'bmw',
    color: 'red',
    price: 2000
}
console.log(JSON.stringify(car));

/*2. New Operator or Constructor*/ 
function Car(model, color) {
    this.model = model;
    this.color = color;
}

var c1 = new Car('BMW', 'red');
console.log(c1.model);


/*3. Object.create method.*/
var Car = {
    model: 'BMW',
    color: 'red'
}
var ElectricCar = Object.create(Car);
console.log(ElectricCar.model); // BMW
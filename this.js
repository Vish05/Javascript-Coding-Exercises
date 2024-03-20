"use strict";

// this is global scope

console.log("test123=>",this); // globalObject  - Print window obj in browswer, global obj in nodejs 

// this is inside function
function x() {
    // the values depneds upon strict mode / non strict mode
    // strict mode display undefined
    // non strict mode display window object
    console.log("test=>",this);
}
x();
window.x(); // display windows object in strict mode

const thisobj = {
    a:10,
    print: function () {
        console.log(this.a);
    }
}
thisobj.print();    // print 10; Because here this refer to thisobj


// call apply bind is sharing methods

const student = {
    name: "Virat",
    printName: function() {
        console.log(this.name);
    }
}

student.printName(); // Print Virat

const student2 = {
    name: "Kohli"
}

student.printName.call(student2); // Print Kohli

const obj = {
    p: 10,
    printnumber: function () {
        const y = () => {
            console.log("arrow=>",this); // Print Window Object because it is inside enclosing lexical context
        }
        y();
    },
}
obj.printnumber();


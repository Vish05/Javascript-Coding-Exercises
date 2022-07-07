// program to print the text
// variable a cannot be used here
function greet() {
    let a = 'hello';

    // variable b cannot be used here
    if(a == 'hello'){
        // variable b can be used here
        let b = 'world';
        console.log(a + ' ' + b);
    }

    // variable b cannot be used here
    // uncomment below line
    //console.log(a + ' ' + b); // error
}
// variable a cannot be used here

greet();

//output
for(var i=0; i<=5; i++) {
    setTimeout(function(){ console.log(i)}, 1000);
}

for(let i=0; i<=5; i++) {
    setTimeout(function(){ console.log(i)}, 1000);
}
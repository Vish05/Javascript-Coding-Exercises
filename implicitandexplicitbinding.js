// First Example
var obj = {
    name: "Vishal Tanna",
    display: function() {
        console.log(this.name);
    }
};

var obj1 = {
    name: 'MSDHONI'
}

obj.display(); // Vishal Tanna
obj.display.call(obj1); //Call method take context of obj1 //MSDHONI 


// Second Example
var fullname = 'Ravi Tanna'
var objFullName = {
    fullname: "Vishal Tanna",
    display: () => { // Arrow function take window function object
        console.log(this.fullname);
    }
};

var objFullName1 = {
    fullname: 'MSDHONI'
}

objFullName.display.call(objFullName1); //MSDHONI
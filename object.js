// Object Creation
let obj = {
    name: "Anas",
    age: 25,
    weight: 57,
    height: "5ft 10inch",
    // Adding function inside ibject
    greet: function() {
        console.log("hello jee kese ho saray");
    }
};

//for in loop
for(let key in obj) {
    console.log(key, " ", obj[key]);
}
// object calling
console.log(obj);
// calling funton inside object
obj.greet();
// type of object
console.log(typeof(obj));
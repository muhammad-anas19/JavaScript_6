//  CREATION OF ARRAY
let arr = [1,2,3,4,5];
console.log(arr);

// CREATION OF ARRAY WITH ARRAY CONSTRUCTOR
let arr2 = new Array('Anas', 1, true);
arr2.push('Hello');
arr2.pop();

arr2.shift();
arr2.unshift('Anas Rajput');

arr2.push(20);
arr2.push(30);
arr2.push(50);
arr2.push(70);

//console.log(arr2.slice(2,4));
arr2.splice(1,2,'Kunal');
console.log(arr2);

console.log(typeof(arr));
console.log(typeof(arr2));

// Map
let arr3 = [10,20,30];

let ansArray = arr3.map((number) => {
    return number*number;
})
console.log(ansArray);

// Filter
let arr4 = [10,20,30,11,21,44,51];

let ansArray2 = arr4.filter((number) => {
    if(number%2 == 0) {
        return true;
    } else {
        return false;
    }
})
console.log(ansArray2);

let arr5 = [1,2,'Love','Kunal',null];
let ans = arr5.filter((value) => {
    if(typeof(value) === 'string') {
        return true;
    } else {
        return false;
    }
})
console.log(ans);

// Reduce
let arr6 = [10,20,30,40];
let ansArray3 = arr6.reduce((acc,curr) => {
    return acc+curr;
}, 0) //this 0 is value of acc provided by us
console.log(ansArray3);

//sort
let arr7 = [2,1,5,3,6,8,4,2,9];
// ascending sord
arr.sort();
console.log(arr7);
//descending sort
arr.sort((a, b) => b - a);
console.log(arr7);

// // indexOf
let arr8 = [1,4,6,7];
console.log(arr8.indexOf(6));

// for Each loop
let arr9 = [10,20,30,40];
arr9.forEach((value, index) => {
    console.log("Numbers: ", value, "Index: ", index);
})

// for of loop
let arr10 = [1,2,3,4,5,7];
for(let value of arr10) {
    console.log(value);
}
let fullName = "Babbar";
for(let val of fullName) {
    console.log(val);
}

// Arrays with funtion
let arr11 = [10,20,30,40,50,60];
function getSum(arr) {
    let len = arr.length;
    let sum=0;
    for(let i=0; i<len; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
let totalSum = getSum(arr11);
console.log(totalSum);


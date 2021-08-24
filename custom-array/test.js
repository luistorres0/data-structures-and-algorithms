const MyArray = require("./custom-array");

const arr = new MyArray();

arr.push(1);
arr.push("luis");
arr.push("torres");
arr.delete(1);

console.log(arr.length);

console.log(arr);

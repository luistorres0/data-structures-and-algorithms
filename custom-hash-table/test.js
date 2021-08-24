const MyHashTable = require("./myHashTable");

const table = new MyHashTable(10);

table.set("grapes", 10000);
table.set("grapess", 10000);
table.set("apples", 10000);
table.set("oranges", 10000);

console.log(JSON.stringify(table));
console.log(table.keys());

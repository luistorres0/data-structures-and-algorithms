const LinkedList = require("./linked-list");

const list = new LinkedList(1);
list.append(2);
list.append(3);
list.append(4);

console.log(list.printList());
console.log(list.printList().length);

list.reverse();
console.log(list.printList());
console.log(list.printList().length);

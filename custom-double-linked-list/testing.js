const DoubleLinkedList = require("./double-linked-list");

const list = new DoubleLinkedList(10);
list.append(5);
list.append(5);
list.prepend(40);
list.insert(1, 100);
list.remove(2)

console.log(list.printList());
console.log(list.printList().length);

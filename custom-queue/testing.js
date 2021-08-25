const Queue = require("./queue");

const queue = new Queue();

queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);

console.log(queue.peek());

queue.printList();
console.log("length", queue.length);
console.log("empty?", queue.isEmpty());


console.log("after dequeue");

queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();

queue.printList();
console.log("length", queue.length);
console.log("empty?", queue.isEmpty());

const Queue = require("./queue-using-stacks");

const queue = new Queue();

queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);

console.log(queue.dequeue(), "length", queue.length);
console.log(queue.dequeue(), "length", queue.length);
console.log(queue.dequeue(), "length", queue.length);
console.log(queue.dequeue(), "length", queue.length);
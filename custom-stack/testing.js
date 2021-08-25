const Stack = require("./stack");

const stack = new Stack();

stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);

while (!stack.isEmpty()) {
  console.log(stack.pop());
  console.log("length", stack.length);
}

console.log(stack);

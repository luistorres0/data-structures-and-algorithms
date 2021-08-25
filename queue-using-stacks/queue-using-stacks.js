const Stack = require("../custom-stack/stack");

class Queue {
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
    this.length = 0;
  }

  enqueue(value) {
    this.first.push(value);
    this.length++;
    return this;
  }

  dequeue() {
    if (this.length === 0) {
      return null;
    }

    while (!this.first.isEmpty()) {
      this.second.push(this.first.pop());
    }

    const foundValue = this.second.pop();

    while (!this.second.isEmpty()) {
      this.first.push(this.second.pop());
    }

    this.length--;

    return foundValue;
  }

  peek() {}

  isEmpty() {}
}

module.exports = Queue;

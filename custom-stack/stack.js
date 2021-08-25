class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.top) {
      this.bottom = newNode;
    }

    newNode.next = this.top;
    this.top = newNode;
    this.length++;
    return this;
  }

  pop() {
    if (!this.top) {
      return null;
    }

    if (this.top === this.bottom) {
      this.bottom = null;
    }

    const value = this.top.value;
    this.top = this.top.next;
    this.length--;

    return value;
  }

  peek() {
    return this.top.value;
  }

  isEmpty() {
    return !this.top;
  }

  printList() {
    let currentNode = this.top;

    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}

module.exports = Stack;

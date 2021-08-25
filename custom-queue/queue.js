class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++;
    return this;
  }

  dequeue() {
    if (this.length === 0) {
      return null;
    }

    if (this.first === this.last) {
      this.last = null;
    }

    const value = this.first.value;
    this.first = this.first.next;
    this.length--;

    return value;
  }

  peek() {
    return this.first.value;
  }

  isEmpty() {
    return this.length === 0;
  }

  printList() {
    let currentNode = this.first;
    const arr = [];

    while (currentNode) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }

    console.log(arr);
  }
}

module.exports = Queue;

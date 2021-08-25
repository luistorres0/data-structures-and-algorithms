class DoubleLinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
      prev: null,
    };

    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value,
      next: null,
      prev: null,
    };

    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this.printList();
  }

  prepend(value) {
    const newNode = {
      value,
      next: null,
      prev: null,
    };

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this.printList();
  }

  printList() {
    const values = [];

    let currentNode = this.head;

    while (currentNode) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return values;
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }

    if (index <= 0) {
      return this.prepend(value);
    }

    const newNode = {
      value,
      next: null,
      prev: null,
    };

    const currentNode = this._traverseToIndex(index);
    const leader = currentNode.prev;
    leader.next = newNode;
    newNode.next = currentNode;
    newNode.prev = leader;
    currentNode.prev = newNode;

    this.length++;

    return this.printList();
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    if (index === 0) {
      return this.removeFirst();
    }

    const currentNode = this._traverseToIndex(index);
    const leader = currentNode.prev;
    const follower = currentNode.next;
    leader.next = follower;
    follower.prev = leader;
    this.length--;

    return currentNode.value;
  }

  removeFirst() {
    const removedNode = this.head;
    this.head = this.head.next;
    this.head.prev = null;
    this.length--;
    return removedNode.value;
  }

  _traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter < index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }
}

module.exports = DoubleLinkedList;

class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };

    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value,
      next: null,
    };

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this.printList();
  }

  prepend(value) {
    const newNode = {
      value,
      next: this.head,
    };

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
    };

    const leader = this._traverseToIndex(index - 1);
    newNode.next = leader.next;
    leader.next = newNode;

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

    const leader = this._traverseToIndex(index - 1);
    const nodeBeingRemoved = leader.next;
    leader.next = nodeBeingRemoved.next;
    this.length--;

    return nodeBeingRemoved.value;
  }

  removeFirst() {
    const removedNode = this.head;
    this.head = this.head.next;
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

  reverse() {
    if (!this.head.next) {
      return this.head;
    }

    let first = this.head;
    this.tail = this.head;
    let second = first.next;

    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }

    this.head.next = null;
    this.head = first;

    return this.printList();
  }
}

module.exports = LinkedList;

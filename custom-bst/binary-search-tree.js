class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;
    while (true) {
      if (value < currentNode.value) {
        // Look left first
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }

        currentNode = currentNode.left;
      } else {
        // Look right
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }

  lookup(value) {
    let currentNode = this.root;

    while (currentNode) {
      if (value === currentNode.value) {
        return currentNode;
      } else if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return null;
  }

  remove(value) {
    if (!this.root) {
      return null;
    }

    let currentNode = this.root;
    let parentNode = null;

    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else {
        // If it doesn't have a right child
        if (!currentNode.right) {
          if (!parentNode) {
            this.root = currentNode.left;
            return this;
          } else {
            if (parentNode.left === currentNode) {
              parentNode.left = currentNode.left;
            } else {
              parentNode.right = currentNode.left;
            }
            return this;
          }
        } else {
          // It does have a right child
          //  If the right child has a left child
          if (currentNode.right.left) {
            let leftmost = currentNode.right.left;
            let leftmostParent = currentNode.right;
            while (leftmost.left) {
              leftmostParent = leftmost;
              leftmost = leftmost.left;
            }

            leftmostParent.left = leftmost.right;
            leftmost.left = currentNode.left;
            leftmost.right = currentNode.right;

            if (currentNode === this.root) {
              this.root = leftmost;
            } else {
              if (parentNode.left === currentNode) {
                parentNode.left = leftmost;
              } else {
                parentNode.right = leftmost;
              }
            }

            return this;
          } else {
            // If the right child doesn't have a left child
            currentNode.right.left = currentNode.left;

            if (currentNode === this.root) {
              this.root = currentNode.right;
            } else {
              if (parentNode.left === currentNode) {
                parentNode.left = currentNode.right;
              } else {
                parentNode.right = currentNode.right;
              }
            }
            return this;
          }
        }
      }
    }
  }

  breadthFirstSearch() {
    let currentNode = this.root;
    let list = [];
    let queue = [];
    queue.push(currentNode);

    while (queue.length > 0) {
      currentNode = queue.shift();
      list.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    return list;
  }
}

module.exports = BinarySearchTree;

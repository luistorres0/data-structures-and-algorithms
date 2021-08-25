function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function printList(list) {
  const arr = [];
  let currentNode = list;
  while (currentNode) {
    arr.push(currentNode.val);
    currentNode = currentNode.next;
  }

  console.log(arr);
}

const mergeTwoLists = function (l1, l2) {
  if (!l1 && !l2) {
    return null;
  }

  if (!l1) {
    return l2;
  }

  if (!l2) {
    return l1;
  }

  let head = null,
    tail = null;

  if (l1.val < l2.val) {
    head = l1;
    l1 = l1.next;
  } else {
    head = l2;
    l2 = l2.next;
  }

  tail = head;

  while (l1 || l2) {
    if (!l1) {
      tail.next = l2;
      break;
    }

    if (!l2) {
      tail.next = l1;
      break;
    }

    if (l1.val < l2.val) {
      tail.next = l1;
      tail = tail.next;
      l1 = l1.next;
    } else {
      tail.next = l2;
      tail = tail.next;
      l2 = l2.next;
    }
  }

  return head;
};

module.exports = { mergeTwoLists, ListNode, printList };

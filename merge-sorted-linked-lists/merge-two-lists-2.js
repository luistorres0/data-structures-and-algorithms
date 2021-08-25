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
  
  const mergeTwoLists2 = function (l1, l2) {
    let dummy = new ListNode();
    let tail = dummy;
  
    while (l1 && l2) {
      if (l1.val < l2.val) {
        tail.next = l1;
        l1 = l1.next;
      } else {
        tail.next = l2;
        l2 = l2.next;
      }
      tail = tail.next;
    }

    if(l1){
        tail.next = l1
    } else if(l2){
        tail.next = l2;
    }
  
    return dummy.next;
  };
  
  module.exports = { mergeTwoLists2, ListNode, printList };
  
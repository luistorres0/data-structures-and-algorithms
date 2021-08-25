const { mergeTwoLists2, ListNode, printList } = require("./merge-two-lists-2");

const list1 = new ListNode(1, new ListNode(2, new ListNode(3, null)));
const list2 = new ListNode(2, new ListNode(5, new ListNode(7, new ListNode(10, null))));

printList(list1);
printList(list2);

printList(mergeTwoLists2(list1, list2));

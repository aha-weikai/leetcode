import { generateListFromArrByRecur, ListNode } from "./tools";
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  const head = new ListNode();
  let currentNode = head;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      currentNode.next = list1;
      list1 = list1.next;
    } else {
      currentNode.next = list2;
      list2 = list2.next;
    }

    currentNode = currentNode.next;
  }

  currentNode.next = list1 || list2;
  return head.next;
};

const a1 = generateListFromArrByRecur([1, 2, 4]);
const a2 = generateListFromArrByRecur([1, 3, 4]);

mergeTwoLists(a1, a2);

// 声明一个空链表
// 然后对比两个链表的值，如果值小就添加到新链表中，然后继续比较下一个值
// 如果只剩下一个，则直接添加到新链表中

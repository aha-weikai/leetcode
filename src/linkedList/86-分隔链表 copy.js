/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let smallList = {},
    smallListHead = smallList,
    bigList = {},
    bigListHead = bigList;
  function compare(node, x, smallList, bigList, prevSmallList, prevBigList) {
    if (!node) {
      // head 没有值
      if (!prevSmallList && !prevBigList) {
        smallListHead = null;
        return;
      }
      // 清除bigList的最后一个节点
      if (prevBigList && !prevBigList.next.val) {
        prevBigList.next = null;
      }

      // 没有小于x的值
      if (!prevSmallList) {
        smallList.val = bigListHead.val;
        smallList.next = bigListHead.next;
        return;
      }
      // 没有大于，等于x的值
      if (typeof bigListHead.val !== "number") {
        prevSmallList.next = null;
      }

      smallList.val = bigListHead.val;
      smallList.next = bigListHead.next;
      return;
    }
    console.log(node.val);
    // 如果小于x，则将此节点加入smallList中，在node中，删除掉这一节点
    if (node.val < x) {
      smallList.val = node.val;
      smallList.next = {};
      compare(node.next, x, smallList.next, bigList, smallList, prevBigList);
    } else {
      bigList.val = node.val;
      bigList.next = {};
      compare(node.next, x, smallList, bigList.next, prevSmallList, bigList);
    }
  }
  compare(head, x, smallList, bigList);

  return smallListHead;
};

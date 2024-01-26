/**
 * 定义 ListNode 类型
 *
 * @class ListNode
 * @param {number} val - 节点值，若未提供，默认为 0
 * @param {ListNode | null} next - 指向下一个节点的引用，若未提供，默认为 null
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * 从数组生成链表
 * @param {Array<number>} arr - 输入的数组
 * @returns {ListNode} - 生成的链表的头节点
 */
function generateListFromArr(arr) {
  const newArr = arr.reverse();
  return newArr.reduce((prev, el) => {
    const node = new ListNode(el, prev);
    return node;
  }, null);
}

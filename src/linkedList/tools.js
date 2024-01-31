/**
 * 定义 ListNode 类型
 *
 * @class ListNode
 * @param {number} val - 节点值，若未提供，默认为 0
 * @param {ListNode | null} next - 指向下一个节点的引用，若未提供，默认为 null
 */
export function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * 从数组生成链表(reduce,类似于迭代,for循环)
 * @param {Array<number>} arr - 输入的数组
 * @returns {ListNode} - 生成的链表的头节点
 */
function generateListFromArrByReduce(arr) {
  const newArr = arr.reverse();
  return newArr.reduce((prev, el) => {
    const node = new ListNode(el, prev);
    return node;
  }, null);
}

/**
 * 从数组生成链表(递归)
 * @param {Array<number>} arr - 输入的数组
 * @returns {ListNode} - 生成的链表的头节点
 */
export function generateListFromArrByRecur(arr) {
  function genNode(i) {
    if (i >= arr.length) return null;
    return new ListNode(arr[i], genNode(i + 1));
  }

  return genNode(0);
}

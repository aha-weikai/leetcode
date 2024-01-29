/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

import { generateListFromArrByRecur } from "./tools";

// 当前节点的处理办法
// next的处理办法
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let smallHead = {},
    bigHead = {},
    smallList = smallHead,
    bigList = bigHead;
  while (head) {
    if (head.val < x) {
      if (typeof smallHead.val === "number") {
        smallHead.next = {};
        smallHead = smallHead.next;
      }
      smallHead.val = head.val;
    } else {
      if (typeof bigHead.val === "number") {
        bigHead.next = {};
        bigHead = bigHead.next;
      }
      bigHead.val = head.val;
    }
    head = head.next;
  }
  typeof bigHead.val === "number" ? (bigHead.next = null) : (bigList = null);
  typeof smallHead.val === "number" ? (smallHead.next = bigList) : (smallList = bigList);
  return smallList;
};

const l0 = generateListFromArrByRecur([1]);
const res0 = partition(l0, 0);
console.log(res0);

// const l1 = generateListFromArrByRecur([1, 4, 3, 2, 5, 2]);
// const res1 = partition(l1, 3);
// console.log(res1);

const l2 = generateListFromArrByRecur([1]);
const res2 = partition(l2, 2);
console.log(res2);

const l3 = generateListFromArrByRecur([1, 1]);
const res3 = partition(l3, 2);
console.log(res3);

// 1. 定义smallList和bigList
// 2. 将小的放入到smallList
// // 多出了next = {}
// // next放到下一层判断？
// 3. 将大的放入到bigList
// // 多出了next = {}
// 4. smallList.next = bigList
// 5. 返回smallList

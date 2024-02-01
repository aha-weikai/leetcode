import { generateListFromArrByRecur, ListNode } from "./tools";

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

function Node(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
}

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  let cloneHead = {};
  let cloneList = cloneHead;
  let rawHead = head;
  while (head) {
    cloneHead.val = head.val;
    head = head.next;
    if (head) {
      cloneHead.next = {};
      cloneHead = cloneHead.next;
    } else {
      cloneHead.next = null;
    }
  }

  // 主分支
  head = rawHead;
  // random分支
  let currentHead = rawHead;

  // cloned main分支
  cloneHead = cloneList;
  // cloned random分支
  let currentNode = cloneList;
  while (head) {
    currentHead = rawHead;
    currentNode = cloneList;

    if (head.random) {
      if (!head.random) {
        cloneHead.random = null;
      } else {
        while (currentHead) {
          if (head.random === currentHead) {
            cloneHead.random = currentNode;
            break;
          }
          currentNode = currentNode.next;
          currentHead = currentHead.next;
        }
      }
    }
    head = head.next;
    cloneHead = cloneHead.next;
  }
  return rawHead ? cloneList : null;
};

const node0 = new Node(7, null, null);
const node1 = new Node(13, null, null);
const node2 = new Node(11, null, null);
const node3 = new Node(10, null, null);
const node4 = new Node(1, null, null);

node0.next = node1;
node0.random = null;
node1.next = node2;
node1.random = node0;
node2.next = node3;
node2.random = node4;
node3.next = node4;
node4.random = node2;

const res = copyRandomList(node0);
console.log(res);

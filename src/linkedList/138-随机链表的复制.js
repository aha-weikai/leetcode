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
  let cloneHead = new Node();
  let cloneList = cloneHead;
  const nodeMap = new Map();

  while (head) {
    let node = getNode(head);
    if (head.random) {
      node.random = getNode(head.random);
    }
    cloneHead.next = node;
    head = head.next;
    cloneHead = cloneHead.next;
  }

  return cloneList.next;

  function getNode(node) {
    let innerNode = nodeMap.get(node);
    if (!innerNode) {
      innerNode = new Node(node.val);
      nodeMap.set(node, innerNode);
    }
    return innerNode;
  }
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

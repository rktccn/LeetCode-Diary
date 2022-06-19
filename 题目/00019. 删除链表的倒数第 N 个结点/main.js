// 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
// ----------------------------------------------------------------------------------

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let fast = head,
    slow = head;

  while (n--) {
    // 让 fast 先走 n 步
    fast = fast.next;
    if (!fast) return head.next; // 如果 fast 已经到达末尾，说明 n 等于链表长度，删去的为第一个元素，直接返回 head.next
  }

  while (fast.next !== null) {
    // 让 fast 和 slow 同时走，直到 fast 到达末尾
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next; // 删去 slow.next
  return head;
};

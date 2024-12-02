/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const newList = new ListNode(0);
  newList.next = head;

  let firstList = newList;
  let secondList = newList;

  for (let i = 0; i < n; i++) {
    if (firstList.next) firstList = firstList.next;
  }

  while (firstList.next) {
    firstList = firstList.next;
    if (secondList.next) secondList = secondList.next;
  }

  if (secondList.next) secondList.next = secondList.next.next;

  return newList.next;
}

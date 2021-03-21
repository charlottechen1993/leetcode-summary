// https://leetcode.com/problems/merge-two-sorted-lists/
// 21. Merge Two Sorted Lists

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    var prev = new ListNode(0, null);
    var result = prev; // keep the reference, easy to return at the end

    var p1 = l1;
    var p2 = l2;
    
    // 1. while both pointers are pointing to a valid node...
    while (p1 && p2) {
        // 1.1. point the next of 'prev' to the smaller node
        // 1.2. move the affected list's pointer to its next node
        if (p1.val <= p2.val) {
            prev.next = p1;
            p1 = p1.next;
        }
        else {
            prev.next = p2;
            p2 = p2.next;
        }
        // 1.3. move the prev pointer up
        prev = prev.next;
    }

    /* 2. at least 1 of the list have been exhausted, safe to concat the
    entire remainder of the non-exhausted list (or null) to the next of 'prev' */
    prev.next = p1 ? p1 : p2;
    
    return result.next;
};
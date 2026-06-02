/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let previous = null, current = head
    while(current) {
        // pointer (reference memory)
        let intermediate = current.next 
        // pointer (reference memory)
        current.next = previous 
        // move previous LinkedList forward to next
        previous = current 
        // move current LinkedList forward to intermediate
        current = intermediate 
    }
    // return reversed linkedList or reversed head
    return previous
};



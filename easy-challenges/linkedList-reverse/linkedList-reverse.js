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
        // swipe emptylinkedList = currentLinkedList
        previous = current 
        // swipe currentLinkedList = nextLinkedList (current.next)
        current = intermediate 
    }
    return previous
};



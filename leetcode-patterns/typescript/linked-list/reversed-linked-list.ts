/* *
 * Definition for singly-linked list.
 * 
 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


/**
 * Technique: Two pointer
 * Time complexity: O(N)
 * Space complexity O(1)
 * @param head 
 * @returns {ListNode}
 */
function reverseList(head: ListNode | null): ListNode | null {
    let prev = null, curr = head
    while(curr){
        const temp = curr.next
        curr.next = prev
        prev = curr
        curr = temp
    }

    return prev

};
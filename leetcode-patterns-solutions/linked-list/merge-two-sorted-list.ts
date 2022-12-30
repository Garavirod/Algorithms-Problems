
// Definition for singly-linked list.
class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
 }

 /**
  * Time complexity O(N)
  * Space complexity O(N)
  * Technique: Dummy node
  * @param list1 
  * @param list2 
  * @returns {ListNode}
  */

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let dummy  = new ListNode()
    let tail = dummy
    while (list1 && list2) {
        if(list1.val < list2.val){
            tail.next = list1
            list1 = list1.next // reducing list one size
        }else{
            tail.next = list2
            list2 = list2.next // reducing list two size
        }
        // move current
        tail = tail.next        
    }
    // verify if exist remaining of l2 or l1
    if(list1){
        tail.next = list1
    }else if(list2){
        tail.next = list2
    }

    return dummy.next
}
 
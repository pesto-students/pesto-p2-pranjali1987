function reverseLinkedList(head){
    let prev = null, curr = head, after = null;
    while(curr.next !== null){
        after = curr.next;
        curr.next = prev;
        curr = after;
    }
    curr.next = prev;
    head = curr;
    return(head);
}
let result=reverseLinkedList([2,4,9,1])
console.log(result);
//Time complexity: O(n)
//Space complexity: O(1)
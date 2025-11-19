function ListNode(val) {
  this.val = val;
  this.next = null;
}

let l1 = new ListNode(1)
l1.next = new ListNode(2)
l1.next.next = new ListNode(4)
// console.log(l1);

let l2 = new ListNode(1)
l2.next = new ListNode(3)
l2.next.next = new ListNode(4)

// console.log(l2);
// var mergedList = new ListNode()
// console.log(mergedList)

const mergeTwoLinkedLists = (l1, l2) => {
  var mergedList = new ListNode();
  let current = mergedList;

  while(l1 && l2) {
    if(l1.val > l2.val) {
      current.next = l2;
      l2 = l2.next;

    } else {
      current.next = l1;
      l1 = l1.next;

    }

    current = current.next;
  }
  current.next = l1 || l2;
  return mergedList.next;
}

var result = mergeTwoLinkedLists(l1, l2);
console.log(result);
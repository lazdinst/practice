class Node {
  constructor(data, next = null){
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(size, head) {
    this.size = 0;
    this.head = null;
  }

  appendNode(data) {
    let current;
    if(!this.head) {
      this.head = new Node(data);
      this.size++;
    } else {
      current = this.head;
      while(current.next) {
        current = current.next;
      }
      current.next = new Node(data)
      this.size++;
    }
  }

  prependNode(data) {
    this.head = new Node(data, this.head ? this.head : null)
    this.size++; 
  }

  insertNodeAt(data, index) {
    let current = this.head;
    let previous;
    let i = 0;

    while(current) {
      if(i === index - 1) {
        previous = current;
        current = new Node(data, previous.next);
        previous.next = current;
        this.size++;
        break;
      } else {
        current = current.next;
        i++;
      }
    }
  }

  removeFrom(index) {
    // If the Index is out of bounds
    if (index > 0 && index > this.size) {
      console.log(`Index Out of bounds: ${index}`);
      return -1;
    } else {
      let current = this.head;
      let i = 0;

      // If the first Index is the Index of Interest; remove it
      if(index === 0) {
        this.head = current.next;
        this.size--;
      } else {

        //TODO: The while look could be more efficient
        // by combining the while conditiom with the index if condition

        // Iterate until the Index of Interest is found
        while(current) {
          
          // If the Index of Interest if the next Index; remove it
          if(i === index - 1) {

            // If Current does not have a next.next; last element
            if (!current.next.next) {
              current.next = null;
            } else {
              current.next = current.next.next;
            }

            this.size--;
            break;
          }
          current = current.next;
          i++;
        }
      }
    }
  }

  removeElement(data) {
    let current = this.head;
    let i = 0;

    while(current) {
      if(current.next && current.next.data === data) {
        current.next = current.next.next;
      } else {
        current = current.next;
        i++;
      }
    }
  }

  reorder() {
  // Given a singly linked list L: L0→L1→…→Ln-1→Ln, reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…

  // You may not modify the values in the list's nodes, only nodes itself may be changed.

  // Example 1:

  // Given 1->2->3->4, reorder it to 1->4->2->3.
  
  // Example 2:

  // Given 1->2->3->4->5, reorder it to 1->5->2->4->3.


  }

  reverse() {
    let current = this.head;
    let previous = null;
    let next = null;

    while(current) {
      // Set next to the current next node
      next = current.next;

      // Set current's next to the previous; reverse
      current.next = previous;

      // Set the previous to current
      previous = current;

      current = next;
    }

    this.head = previous;
  }
  
  getSize() {
    console.log(`Size: ${this.size}`)
    return this.size;
  }
  
  isEmpty() {
    return !this.size;
  }
  print() {
    var current = this.head;
    console.log('Printing Nodes')
    console.log('===================')
    while (current) {
      console.log(current.data);
      current = current.next;
    } 
    this.getSize()
  }
}

const ll = new LinkedList()
console.log('Adding Node')
ll.prependNode('0')
console.log('Adding Node')
ll.appendNode('1')
console.log('Adding Node')
ll.appendNode('2')
console.log('Adding Node')
ll.appendNode('3')
console.log('Adding Node')
ll.print()
ll.removeFrom(1)
ll.print()
ll.insertNodeAt('1', 1);
ll.print()
ll.reverse()
ll.print()

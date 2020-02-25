class Node {
  constructor(data, next = null){
    this.data = data;
    this.next = next;
  }
}

  // functions to be implemented 
  // removeFrom(location) 
  // removeElement(element)


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
      if(i === index) {
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
    let current = this.head;
    let i = 0;

    while(current) {
      if(i === index - 1) {``
        if (current.next.next) {
          current.next = current.next.next;
        } else {
          current.next = null;
        }
        this.size--;
        break;
      } else {
        current = current.next;
        i++;
      }
    }
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
ll.prependNode('1')
ll.prependNode('0')
ll.appendNode('2')
ll.appendNode('3')
// ll.insertNodeAt('1.5', 1);
ll.removeFrom(2)
ll.print()

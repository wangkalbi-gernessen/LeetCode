// creating a node like a block
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // insert a node at the beginning of Linked List
  push(newValue) {
    let newNode = new Node(newValue);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
    return this;
  }

  // insert a node at the end of Linked List
  unshift(newValue) {
    let newNode = new Node(newValue);
    if (this.head === null) {
      this.head = new Node(newValue);
      return this;
    }
    // this new node is going to be the tail node
    newNode.next = null;
    // traverse till the tail node
    let tail = this.head;
    while (tail.next != null) {
      tail = tail.next;
    }
    tail.next = newNode;
    this.size++;
    return this;
  }
}

let myLinkedList = new LinkedList();
myLinkedList.push(15);
myLinkedList.unshift(4);
console.log(myLinkedList);

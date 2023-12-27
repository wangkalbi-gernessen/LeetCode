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
  }

  // insert a node at the beginning of Linked List
  push(newValue) {
    let newNode = new Node(newValue);
    newNode.next = this.head;
    this.head = newNode;
    return this;
  }
}

let myLinkedList = new LinkedList();
myLinkedList.push(15);
myLinkedList.push(4);
myLinkedList.push(5);
myLinkedList.push(13);
myLinkedList.push(6);
console.log(myLinkedList);

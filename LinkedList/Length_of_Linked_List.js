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

  // returns the number of nodes in the Linked List
  getCount() {
    let temp = this.head;
    console.log(temp);
    let count = 1;
    while (temp.next !== null) {
      count++;
      temp = temp.next;
    }
    return count;
  }
}

let myLinkedList = new LinkedList();
myLinkedList.push(15);
myLinkedList.push(4);
myLinkedList.push(5);
myLinkedList.push(13);
myLinkedList.push(6);
// console.log(myLinkedList);
console.log(myLinkedList.getCount());

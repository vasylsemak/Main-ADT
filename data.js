/* eslint-disable no-unused-vars */
'use strict';

// -----------------------------------------
// Stacks

class Stack {
  constructor() {
    this.newStack = [];
    this.pointer = 0;
  }
  // Stack.prototype.add
  add(item) {
    this.newStack[this.pointer] = item;
    this.pointer++;
    return this; // for chaining, do not edit
  }
  // Stack.prototype.remove
  remove() {
    this.pointer--;
    const topItem = this.newStack[this.pointer];
    this.newStack[this.pointer] === null;
    return topItem;
  }
}

// ------
// class Stack {
//   constructor() {
//     this.storage = {};
//     this.size = 0;
//   }
//   // Stack.prototype.add
//   add(item) {
//     this.size++;
//     this.storage[this.size] = item;
//     return this; // for chaining, do not edit
//   }
//   // Stack.prototype.remove
//   remove() {
//     let last = this.storage[this.size];
//     delete this.storage[this.size];
//     this.size--;
//     return last;
//   }
// }

// -----------------------------------------
// Queues

class Queue {
  constructor() {
    this._init();
  }
  // Init f-n to reset head/tail
  _init() {
    this.newQueue = [];
    this.head = 0;
    this.tail = -1;
  }

  // Queue.prototype.add
  add(item) {
    this.tail++;
    this.newQueue[this.tail] = item;
    return this; // for chaining, do not edit
  }

  // Queue.prototype.remove
  remove() {
    const first = this.newQueue[this.head];

    if (this.head > this.tail) return undefined;
    this.head++;
    if (this.head > this.tail) this._init();

    return first;
  }
}

// --------
// class Queue {
//   constructor() {
//     this.storage = {};
//     this.head = 1;
//     this.tail = 1;
//   }
//   // Queue.prototype.add
//   add(item) {
//     this.storage[this.tail] = item;
//     this.tail++;
//     return this; // for chaining, do not edit
//   }
//   // Queue.prototype.remove
//   remove() {
//     let toRemove = this.storage[this.head];
//     if (!toRemove) return undefined;
//     delete this.storage[this.head];
//     this.head++;
//     return toRemove;
//   }
// }

//-----------------------------------------
// Association lists

class Alist {
  constructor() {
    this.head = null;
  }
  // Alist.prototype.set
  set(key, value) {
    let newNode = new AlistNode(key, value, this.head);
    this.head = newNode;
    return this;
  }
  // Alist.prototype.get
  get(key) {
    let curNode = this.head;
    while (curNode) {
      if (curNode.key === key) return curNode.value;
      curNode = curNode.next;
    }
    return undefined;
  }
}

// Doubly linked list
class doubleLL {
  constructor() {
    this.head = this.tail = null;
  }

  append(val) {
    if (!this.tail) this.head = this.tail = new Node(val);
    else {
      const oldTale = this.tail;
      this.tail = new Node(val);
      oldTale.next = this.tail;
      this.tail.prev = oldTale;
    }
    return this;
  }

  prepend(val) {
    if (!this.head) this.head = this.tail = new Node(val);
    else {
      const oldHead = this.head;
      this.head = new Node(val);
      oldHead.prev = this.head;
      this.head.next = oldHead;
    }
    return this;
  }

  removeHead() {
    if (!this.head) return null;
    else {
      const curHead = this.head;
      if (this.head === this.tail) this.head = this.tail = null;
      else {
        this.head = this.head.next;
        this.head.prev = null;
      }
      return curHead.value;
    }
  }

  removeTail() {
    if (!this.tail) return null;
    else {
      const curTail = this.tail;
      if (this.tail === this.head) this.tail = this.head = null;
      else {
        this.tail = this.tail.prev;
        this.tail.next = null;
      }
      return curTail.value;
    }
  }

  search(val) {
    let curNode = this.head;
    while (curNode) {
      if (curNode.value === val) return curNode.value;
      curNode = curNode.next;
    }
    return 'no value found!';
  }

  getNthElem(elemOrder) {
    let count = 1;
    let curHead = this.head;
    while (curHead) {
      if (count === elemOrder) return curHead;
      curHead = curHead.next;
      count++;
    }
    return null;
  }

  insertElem(elemToInsert, position) {
    let prevNode = this.getNthElem(position - 1);
    let curNode = prevNode.next;
    let newNode = new Node(elemToInsert);

    newNode.next = curNode;
    curNode.prev = newNode;
    prevNode.next = newNode;
    newNode.prev = prevNode;
    return this;
  }
}

class AlistNode {
  // AlistNode constructor function
  constructor(key, value, next) {
    this.key = key;
    this.value = value;
    this.next = next;
  }
}

class Node {
  constructor(value, prev, next) {
    this.value = value;
    this.prev = prev || null;
    this.next = next || null;
  }
}

// -----------------------------------------
// Hash Tables

function hash(key) {
  let hashedKey = 0;
  for (let i = 0; i < key.length; i++) {
    hashedKey += key.charCodeAt(i);
  }
  return hashedKey % 20;
}

class HashTable {
  // HashTable constructor function
  constructor() {
    this.buckets = Array(20);
    // your code here
  }

  // HashTable.prototype.set
  set(key, value) {
    // your code here. DO NOT simply set a prop. on an obj., that's cheating!
    return this; // for chaining, do not edit
  }

  // HashTable.prototype.get
  get(key) {
    // your code here. DO NOT simply get a prop. from an obj., that's cheating!
  }
}

//-----------------------------------------
// Binary search trees

class BinarySearchTree {
  // BinarySearchTree constructor function
  constructor(val) {
    // your code here
  }

  // BinarySearchTree.prototype.insert
  insert(val) {
    // your code here
    return this; // for chaining, do not edit
  }

  // BinarySearchTree.prototype.min
  min() {
    // your code here
  }

  // BinarySearchTree.prototype.max
  max() {
    // your code here
  }

  // BinarySearchTree.prototype.contains
  contains(val) {
    // your code here
  }

  // BinarySearchTree.prototype.traverse
  traverse(callbackFunc) {
    // your code here
  }
}

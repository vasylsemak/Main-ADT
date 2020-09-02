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

class AlistNode {
  // AlistNode constructor function
  constructor(key, value, next) {
    this.key = key;
    this.value = value;
    this.next = next;
  }
}

//-----------------------------------------
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

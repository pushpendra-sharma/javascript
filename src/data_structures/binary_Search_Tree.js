import { Queue } from './index';

class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // inserting Time complexity - O(logn)
  insert(val) {
    let newNode = new Node(val);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (true) {
      if (val === current.value) {
        return undefined;
      }

      if (val < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else if (val > current.value) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  // search by value Time complexity - O(logn)
  find(val) {
    if (this.root === null) {
      return false;
    }

    let current = this.root;
    let found = false;

    while (current && !found) {
      if (val < current.value) {
        current = current.left;
      } else if (val > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }

    return false;
  }

  BFS() {
    let data = [];
    let queue = [];

    let node = this.root;

    queue.push(this.root);
    // let queue = new Queue();
    // queue.enqueue(this.root);

    while (queue.length) {
      node = queue.shift();
      data.push(node.value);

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    return data;
  }

  DFS_preOrder() {
    let data = [];
    let current = this.root;

    function traverse(node) {
      data.push(node.value);
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    }

    traverse(this.root);

    return data;
  }

  DFS_postOrder() {
    let data = [];
    let current = this.root;

    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      data.push(node.value);
    }

    traverse(this.root);

    return data;
  }

  DFS_inOrder() {
    let data = [];
    let current = this.root;

    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }
      data.push(node.value);
      if (node.right) {
        traverse(node.right);
      }
    }

    traverse(this.root);

    return data;
  }
}

let bst = new BinarySearchTree();

bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);

bst.BFS();

export default BinarySearchTree;

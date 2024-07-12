/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    let sum = 0;

    function sumRecursive(current) {
      sum += current.val;
      const children = current.children;
      for (let element of children) {
        
        if (element.children.length) {
          sumRecursive(element);
        } else {
          sum += element.val;
        }
      }
    }
    if (this.root) {
      sumRecursive(this.root);
      return sum;
    }

    return 0;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let count = 0;
    function evensRecursive(current) {
      const children = current.children;
      if (current.val % 2 === 0) count++;
      for (let element of children) {
        if (element.children.length) evensRecursive(element);
        else if (element.val % 2 === 0) count++;
      }
    }
    if (this.root) {
      evensRecursive(this.root);
      return count;
    }

    return 0;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    let count = 0;
    function greaterNumsRecursive(current) {
      const children = current.children;
      if (current.val > lowerBound) count++;
      for (let element of children) {
        if (element.children.length) greaterNumsRecursive(element);
        else if (element.val > lowerBound) count++;
      }
    }
    if (this.root) {
      greaterNumsRecursive(this.root);
      return count;
    }

    return 0;
  }
}

module.exports = { Tree, TreeNode };

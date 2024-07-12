/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    let depth = 0;
    function minDepthRecursive(current) {
      const left = current.left;
      const right = current.right;
      if (left) depth++;
      if (right) depth++;
      if (!left.left || !left.right || !right.left || !right.right) return;
      if (left.left || left.right) minDepthRecursive(left);
      if (right.left || right.right) minDepthRecursive(right);
    }
    if (this.root) {
      minDepthRecursive(this.root);
      return depth;
    }

    return 0;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    let depth = 0;
    function maxDepthRecursive(current) {
      const left = current.left;
      const right = current.right;
      if (!left.left && !left.right && !right.left && !right.right)
        return (depth += 2);
      if (left.left || left.right) {
        depth++;
        maxDepthRecursive(left);
      }
      if (right.left || right.right) {
        depth++;
        maxDepthRecursive(right);
      }
    }
    if (this.root) {
      maxDepthRecursive(this.root);
      return depth;
    }

    return 0;
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    const maxSumRecursive = (node) => {
      if (!node) return 0;
      if (!node.left && !node.right) {
        return node.val;
      }
      const leftSum = maxSumRecursive(node.left);
      const rightSum = maxSumRecursive(node.right);
      if (node.left && node.right) {
        this.maxSumAcross = Math.max(
          this.maxSumAcross,
          leftSum + rightSum + node.val
        );
        return Math.max(leftSum, rightSum) + node.val;
      }
      return (node.left ? leftSum : rightSum) + node.val;
    };
    this.maxSumAcross = 0;
    maxSumRecursive(this.root);
    return this.maxSumAcross;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    const smallestRecursive = (node) => {
      if (!node) return;
      if (node.val > lowerBound) {
        this.smallestVal = node.val < this.smallestVal ? node.val : this.smallestVal;
      }
      if (node.left && node.right) {
        smallestRecursive(node.left);
        smallestRecursive(node.right);
      } else {
        smallestRecursive(node.left || node.right);
      }
    };
    this.smallestVal = this.root ? this.root.val : null;
    smallestRecursive(this.root);
    if (this.smallestVal === lowerBound) return null;
    return this.smallestVal;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {}

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {}

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {}

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {}
}

module.exports = { BinaryTree, BinaryTreeNode };

class TreeNode {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

// Returns true if given tree is BST.
function validateBT(root, l, r) {
  // Base condition
  if (root == null)
    return true;

  if (l != null && root.value <= l.value)//to check left node data condition
    return false;

  if (r != null && root.value >= r.value)//to check right node data condition
    return false;

  return validateBT(root.left, l, root) && validateBT(root.right, root, r);
}
function newNode(value) {
  let node = new TreeNode(value);
  return (node);
}

let root = newNode(5);
root.left = newNode(1);
root.right = newNode(4);
root.left.left = newNode(3);
root.left.right = newNode(6);

if (validateBT(root, null, null))
  console.log("Is BST");
else
  console.log("Not a BST");

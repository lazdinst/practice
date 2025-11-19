class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBFS() {
    // Count all the nodes
    // Generate string, the concat result of letters
    const result = [];
    let count = 0;

    if(!this.root) {
      return false;
    }

    let queue = [];

    queue.push(this.root);
    console.log(this.root.value)
    while(queue.length) {
      // FIFO
      let currentNode = queue.shift();

      if(currentNode) {
        result.push(currentNode.value);
        count++;
      }

      if(currentNode.children.length !== 0) {
        let name = []
        currentNode.children.forEach(child => {
          name.push(child.value);
          queue.push(child)
        });
        console.log(name.join(''))
      }
    }

    return {result: result.join(''), count: count};
  }

  traverseDFS() {
    const stack = [];
    let result = [];
    

  }
}

const testTree = new Tree();

testTree.root = new TreeNode("H");
testTree.root.children.push(new TreeNode("e"));
testTree.root.children.push(new TreeNode("l"));
testTree.root.children[0].children.push(new TreeNode("l"));
testTree.root.children[0].children.push(new TreeNode("o"));
testTree.root.children[0].children.push(new TreeNode("W"));
testTree.root.children[1].children.push(new TreeNode("o"));
testTree.root.children[1].children.push(new TreeNode("r"));
testTree.root.children[1].children.push(new TreeNode("l"));
testTree.root.children[1].children.push(new TreeNode("d"));

// const testTree2 = new Tree();

// testTree2.root = new TreeNode(10);
// testTree2.root.children.push(new TreeNode(6));
// testTree2.root.children.push(new TreeNode(15));
// testTree2.root.children[0].children.push(new TreeNode(3));
// testTree2.root.children[0].children.push(new TreeNode(8));
// testTree2.root.children[0].children.push(new TreeNode(7));
// testTree2.root.children[1].children.push(new TreeNode(20));

console.log(testTree.traverseBFS());
// console.log(testTree2.traverseDFS("in"));
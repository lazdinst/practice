/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

 // Itterative approach
// const countNodes = root => {
//   let q = [root];
//   let count = 0;
  
//   while(q.length) {
//     // Get the first element from the queue
//     let currentNode = q.shift();

//     // Increase the count
//     if(currentNode) {
//       count++;
//     }

//     if(currentNode.left) {
//       q.push(currentNode.left);
//     }

//     if(currentNode.right) {
//       q.push(currentNode.right);
//     }
//   }
//   return count;
// }


const countNodes = (root, count) => {
  let q = [root];
  let count = 0;
  
  while(q.length) {
    // Get the first element from the queue
    let currentNode = q.shift();
    if(currentNode) {
      // Increase the count
      if(currentNode.val === undefined) {
        count++;
      }
  
      if(currentNode.left) {
        q.push(currentNode.left);
      }
  
      if(currentNode.right) {
        q.push(currentNode.right);
      }
    }
  }
  return count;
}

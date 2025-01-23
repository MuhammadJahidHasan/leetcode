
// 102. Binary Tree Level Order Traversal

// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]
// Example 2:

// Input: root = [1]
// Output: [[1]]
// Example 3:

// Input: root = []
// Output: []

class CreateNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.rightChild = null;

    }
}

const addLeftChild = function(parentNode , childNode) {
       parentNode.left = childNode;
}

const addRightChild = function(parentNode , childNode) {
    parentNode.rightChild = childNode;


}

const inOrderTravers = function(rootNode) {
    console.log(rootNode.val);
     if(rootNode.left) {
        inOrderTravers(rootNode.left);
     }
    
     if(rootNode.rightChild) {
        inOrderTravers(rootNode.rightChild);
     }
}

const levelOrder = function(root) {
      if (!root) {
        return [];
      }
      const finalResultArray = [[root.val]]; 
      const queue = [];
      queue.push([root]);

      while(queue.length) {
        const tempArray = [];
        const tempQueueArray = [];
        const currentNode = queue.shift();
        currentNode.forEach(element => {
            if (element.left) {
                tempQueueArray.push(element.left);
                tempArray.push(element.left.val);
            }
            if (element.right) {
                tempQueueArray.push(element.right);
                tempArray.push(element.right.val);
            }
            
        });

        if (tempArray.length) {
            finalResultArray.push(tempArray);
            queue.push(tempQueueArray);
            
        } 

      }

      return finalResultArray;

}

const rootNode = new CreateNode(3);
const three = new CreateNode(3);
const nine = new CreateNode(9);
const seven = new CreateNode(7);
const twenty = new CreateNode(20);
const fifteen = new CreateNode(15);
const ten = new CreateNode(10);

addLeftChild(rootNode, nine);
addRightChild(rootNode, twenty);
addLeftChild(twenty, fifteen);
addRightChild(twenty, seven);
addLeftChild(nine, null);
addRightChild(nine, null);
// addLeftChild(six, nine);
// addLeftChild(nine, ten);

// inOrderTravers(rootNode);

const result = levelOrder(rootNode);
console.log(result);
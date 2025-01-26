
// 103. Binary Tree Zigzag Level Order Traversal
// Solved
// Medium
// Topics
// Companies
// Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[20,9],[15,7]]
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
        this.right = null;

    }
}

const addLeftChild = function(parentNode , childNode) {
       parentNode.left = childNode;
}

const addRightChild = function(parentNode , childNode) {
    parentNode.right = childNode;


}

const inOrderTravers = function(rootNode) {
    console.log(rootNode.val);
     if(rootNode.left) {
        inOrderTravers(rootNode.left);
     }
    
     if(rootNode.right) {
        inOrderTravers(rootNode.right);
     }
}

const levelOrder = function(root) {
      if (!root) {
        return [];
      }
      const finalResultArray = [[root.val]]; 
      const queue = [];
      queue.push([root]);
      let level = 1;
      while(queue.length) {
        const tempArray = [];
       
        const tempQueueArray = [];
        const currentNode = queue.shift();
        currentNode.forEach(element => {
            if (level % 2 === 0) {
                if (element.left) {
                    tempQueueArray.unshift(element.left);
                    tempArray.push(element.left.val);
                }
                if (element.right) {
                    tempQueueArray.unshift(element.right);
                    tempArray.push(element.right.val);
                }

            } else {
                if (element.right) {
                    tempQueueArray.unshift(element.right);
                    tempArray.push(element.right.val);
                }
                if (element.left) {
                    tempQueueArray.unshift(element.left);
                    tempArray.push(element.left.val);
                }

            }
            
            
        });

        if (tempArray.length) {
            level ++; 
            finalResultArray.push(tempArray);
            queue.push(tempQueueArray);
            
        }

      }

      return finalResultArray;

}

const rootNode = new CreateNode(1);
const two = new CreateNode(2);
const three = new CreateNode(3);
const four = new CreateNode(4);
const five = new CreateNode(5);

addLeftChild(rootNode, two);
addRightChild(rootNode, three);
addLeftChild(two, four);
addRightChild(two, null);
addLeftChild(three, null);
addRightChild(three, five);
// addLeftChild(six, nine);
// addLeftChild(nine, ten);

// inOrderTravers(rootNode);

const result = levelOrder(rootNode);
console.log(result);
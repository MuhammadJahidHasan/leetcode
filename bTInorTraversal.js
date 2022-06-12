

class Node {

    constructor(val) {
      
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const addLeftChild = function(node , child) {

      node.left = child;
}

const addRightChild = function(node , child) {
    node.right = child;

}

var travers = function(root, arr) {
    
    if(root === null) {
      return [];
  }
  
   if(root.left !== null) {
       travers(root.left, arr);
   } 
   arr.push(root.val);

   if(root.right !== null) {
       travers(root.right, arr);
   }
   
}

//with recursion
var inorderTraversal = function(root) {
  
   var arr = [];
  
  travers(root,arr);

   return arr;
};

//without recursion
var inorderTraversals = function(root) {
  
  let arr = [];
  let stack = [];
  let currentNode = root;

  while(currentNode || stack.length) {

        while(currentNode) {

            stack.push(currentNode);
            currentNode = currentNode.left;
        }
        currentNode = stack.pop();
        arr.push(currentNode.val);
        currentNode = currentNode.right;
    }

    return arr;
};

const main = function() {

    const root = new Node(5);
    const two = new Node(2);
    const three = new Node(4);
    addRightChild(root, two);
    addLeftChild(two, three);

   console.log(inorderTraversal(root));

}

main();


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

var inorderTraversal = function(root) {
  
   var arr = [];
  
  travers(root,arr);

   return arr;
};


var inorderTraversals = function(root) {
  
  let arr = [];
  let stack = [];
  let curentNode = root;

  while(currentNode != null || !stack.length) {

        while(currentNode) {

            stack.push(currentNode.val);
            currentNode = currentNode.left;
        }

  }
};

const main = function() {

    const root = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    addRightChild(root, two);
    addLeftChild(two, three);

   console.log(inorderTraversal(root));

}

main();
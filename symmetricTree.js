
class Node {

    constructor(val) {

        this.val = val;
        this.left = null;
        this.right = null;
        
    }
}

const addLeftChild = function(node, child) {
     
    node.left = child;
}

const addRightChild = function(node, child) {
     
    node.right = child;
}

const traversal = function(node, arr) {
      
   
    if(node.left != null) {
        traversal(node.left, arr);
    }
    arr.push(node.val);
    //console.log(node.val);
    if(node.right != null) {
        traversal(node.right, arr);
    }

}

var isSymmetric = function(root) {

    let arr1 = [];
    let arr2 = [];
    let stack1 = [];
    let stack2 = [];
    let  currentNode1 = root;
    let currentNode2 = root;
    while(currentNode1 || currentNode2 || stack1.length && stack2.length) {
        while(currentNode1 || currentNode2) {

          stack1.push( currentNode1);
          stack2.push(currentNode2);
          if(currentNode1)
             currentNode1 =  currentNode1.left;
          if(currentNode2)    
             currentNode2 = currentNode2.right;
          
        }

         currentNode1 = stack1.pop();
         currentNode2 = stack2.pop();
         if(currentNode1 || currentNode2){
             if(!currentNode1 || !currentNode2)
                return false;
           if(currentNode1.val != currentNode2.val) {
               
               return false;
            }
        }

        // if(currentNode1)
        //    arr1.push( currentNode1.val);
        // if(currentNode2)   
        //    arr2.push(currentNode2.val);
        if(currentNode1)   
           currentNode1 =  currentNode1.right;
        if(currentNode2)   
           currentNode2 = currentNode2.left;
    }
   // return { arr1, arr2 };
    return true;

};

const main = function() {

    const root = new Node(1);
    const two1 = new Node(2);
    const two2 = new Node(2);
    const three1 = new Node(3);
    const three2 = new Node(3);
    const four1 = new Node(4);
    const four2 = new Node(4);
    const five = new Node(5);

    addLeftChild(root, two1);
    addRightChild(root, two2);
    //addLeftChild(two1, four1);
    addRightChild(two1, three1);
    //addLeftChild(two2, four2);
    addRightChild(two2, three2);

    console.log(isSymmetric(root));

}

main();
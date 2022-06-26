
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

var maxDepth = function(root) {
   
    if(!root) return 0;
    let level = 0;
    let queue = [];
    queue.push(root);

    while(queue.length) {
         let tem = queue.length
         for(let i = 0; i < tem; i++) {
            let node = queue.shift();
            if(node.left) {
                queue.push(node.left);
            }
            if(node.right) {
                queue.push(node.right);
            }
         }
         level++;

    }

    return level;
    
};

const main = function() {

    // const root = new Node(3);
    // const nine = new Node(9);
    // const twenty = new Node(20);
    // const fiften = new Node(15);
    // const seven = new Node(7);

    // addLeftChild(root, nine);
    // addRightChild(root, twenty);
    // addLeftChild(twenty, fiften);
    // addRightChild(twenty, seven);


    const root = new Node(0);
    const two = new Node(2);
    const four = new Node(4);
    const one = new Node(1);
    const three = new Node(3);
    const mione = new Node(-1);
    const five = new Node(5);
    const one1 = new Node(1);
    const six = new Node(6);
    const eight = new Node(8);

    addLeftChild(root, two);
    addRightChild(root, four);
    addLeftChild(two, one);
    addLeftChild(four, three);
    addRightChild(four, mione);
    addLeftChild(one, five);
    addRightChild(one, one1);
    addRightChild(three, six);
    addRightChild(mione, eight);

    console.log(maxDepth(root));

}

main();
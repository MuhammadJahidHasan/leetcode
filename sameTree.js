
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

var isSameTree = function(p, q) {

    if(p == null && q == null) {
        return true;
    }
    if(p == null || q == null || p.val != q.val) {
        return false;
    }

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

const main = function() {

    const root1 = new Node(1);
    const two1 = new Node(2);
    const three1 = new Node(3);
    const four1 = new Node(4);
    const five1 = new Node(5);

    addLeftChild(root1, two1);
    addRightChild(root1, two1);
    addLeftChild(two1, three1);
    addRightChild(two1, five1);

    const root2 = new Node(1);
    const two2 = new Node(2);
    const three2 = new Node(3);
    const four2 = new Node(4);
    const five2 = new Node(5);

    addLeftChild(root2, four2);
    addRightChild(root2, two2);
    addLeftChild(two2, three2);
    addRightChild(two2, five2);


    console.log(isSameTree(root1, root2));


}

main();
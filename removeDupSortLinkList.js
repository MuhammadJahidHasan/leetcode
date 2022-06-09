class Node {

    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const insert_last = function(head, node) {

    if(head == null) {
        head = node;
    }

    let current_node = head;
    let parrent_node = null;

    while(current_node != null) {
        parrent_node = current_node;
        current_node = current_node.next;
    }

    parrent_node.next = node;

    return head;

}

const remove_duplicate = function(head) {

    if(head === null || head.val === null || head.next === null) { 
        return head
    }
    
    let parrent_node = head;
    let current_node = parrent_node.next;
    let temp = null;  
    while(current_node != null) {
        if(parrent_node.val == current_node.val) {
            current_node = current_node.next;
            if(current_node == null) {
                parrent_node.next = null;
            }
            continue;
        }
        
        temp = current_node;
        parrent_node.next = current_node;
        parrent_node = temp; 
        current_node = current_node.next;
    }

    return head;

}

const print_list = function(head) {

    let current_node = head;
    while(current_node != null) {
    console.log(current_node.val);
    current_node = current_node.next;
    }
}

function main() {

    let one = new Node(1);
    let one2 = new Node(1);
    let head = one;
    let two = new Node(2);
    let two2 = new Node(2);
    let three = new Node(3);
    let three2 = new Node(3);
    let four = new Node(4);
    let four2 = new Node(4);
    let four3 = new Node(4);

    head = insert_last(head, one2); 
    head = insert_last(head, two);
    head = insert_last(head, two2);
    head = insert_last(head, three);
    head = insert_last(head, three2);
    head = insert_last(head, four);
    head = insert_last(head, four2);
    head = insert_last(head, four3);

    print_list(head);

    head = remove_duplicate(head);

    print_list(head);
}

main();
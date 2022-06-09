

class Node {

    constructor(val, next = null) {

        this.val = val;
        this.next = next;
    }
}


class LinkedList {
    
    constructor() {
        this.head = null;
    }

    insertFirst(item) {
          let new_node = new Node(item);
          new_node.next = this.head;
          this.head = new_node;
    }

    insertLast(item) {

        if(this.head == null) {
             this.head = new Node(item);``
             return;
          }

         let current_node = this.head;

         while(current_node) {
             if(current_node.next == null) {break;}
             current_node = current_node.next;
         }

         let new_node = new Node(item);
         current_node.next = new_node;
    }

    printList() {

        let current_node = this.head;

        while(current_node) {
            console.log(current_node.val);
            current_node = current_node.next;
        }

    }
}


var mergeTwoLists = function(list1, list2) {
    
     let head = new Node(0);
    let current_node = head;
    let node1 = list1;
    let node2 = list2;

    while(node1 && node2) {
        if(node1.val > node2.val) {
             current_node.next = node2;
               node2 = node2.next;
        } else {
            current_node.next = node1;
            node1 = node1.next;
        }  
        
        current_node = current_node.next;
    }

    if(node1) {
        current_node.next = node1;
        }
       
    if(node2) {
        current_node.next = node2;
        }

    return head.next;
    
};


const mergeSortedList = function(list1 , list2) {

    let head1 = list1;
    let head2 = list2;
    let ll = new LinkedList();
    let current_node1 = head1;
    let current_node2 = head2;

    while(current_node1 && current_node2) {
        if(current_node1.val > current_node2.val) {
             ll.insertLast(current_node2.val);
             current_node2 = current_node2.next;
        } else {
            ll.insertLast(current_node1.val);
            current_node1 = current_node1.next;
        }      
    }

    //console.log(current_node1, current_node2);
    if(current_node1) {
        //console.log("cc");
        while(current_node1) {
            ll.insertLast(current_node1.val);
            current_node1 = current_node1.next;
        }
       
    }

    if(current_node2) {
        //console.log("gg");
        while(current_node2) {
            ll.insertLast(current_node2.val);
            current_node2 = current_node2.next;
        }
       
    }

    //let headd = (ll.head);
    return ll;
}


let ll = new LinkedList();
ll.insertLast(1);
ll.insertLast(2);
ll.insertLast(4);

let ll2 = new LinkedList();
ll2.insertLast(1);
ll2.insertLast(3);
ll2.insertLast(4);

let finaList = mergeSortedList(ll.head, ll2.head);

console.log(finaList);
//finaList.printList();

// ll.printList();
// ll2.printList();

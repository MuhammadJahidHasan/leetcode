

   const Node =  function(data, next = null) {

        this.data = data;
        this.next = next;
    }


   const insertFirst = function(item,head) {
          let new_node =  Node(item, head);
          new_node.next = head;
          return new_node;
    }

   const insertLast = function (item,head) {

        if(head == null) {
             head =  new Node(item);
             //console.log(head);
             return head;
          }

         let current_node = head;

         while(current_node) {
             if(current_node.next == null) {break;}
             current_node = current_node.next;
         }

         let new_node =  new Node(item);
         current_node.next = new_node;
         return head;
    }

   const printList = function(head) {

        let current_node = head;

        while(current_node) {
            console.log(current_node.data);
            current_node = current_node.next;
        }

    }



const mergeSortedList = function(list1 , list2) {

    let head1 = list1;
    let head2 = list2;
    let head = null;
    let current_node1 = head1;
    let current_node2 = head2;

    while(current_node1 && current_node2) {
        if(current_node1.data > current_node2.data) {
             insertLast(current_node2.data, head);
             current_node2 = current_node2.next;
        } else {
            insertLast(current_node1.data, head);
            current_node1 = current_node1.next;
        }      
    }

    //console.log(current_node1, current_node2);
    if(current_node1) {
        //console.log("cc");
        while(current_node1) {
            insertLast(current_node1.data, head);
            current_node1 = current_node1.next;
        }
       
    }

    if(current_node2) {
        //console.log("gg");
        while(current_node2) {
            insertLast(current_node2.data, head);
            current_node2 = current_node2.next;
        }
       
    }


    return head;
}

let head1 = null;
head1 = insertLast(1,head1);
head1 = insertLast(2,head1);
head1 = insertLast(4,head1);

let head2 = null;
head2 = insertLast(1, head2);
head2 = insertLast(3, head2);
head2 = insertLast(4, head2);

let finaList = mergeSortedList(head1, head2);

console.log(head1, head2);

printList(head2);

// ll.printList();
// ll2.printList();
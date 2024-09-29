// Linked Lists
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head;
    }

    addLast(value) {
        if (!this.head) {
            this.head = new Node(value);
            return;
        }
    }
}


// test cases
// list.addLast(1);
// list.addLast(2);
// list.addLast(3);
// list.addFirst(4);
// list.addFirst(5);
// list.deleteFirst();
// list.deleteLast();
// list.contains(10);
// list.indexOf(10);
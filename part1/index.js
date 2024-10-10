// Linked Lists
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.first = null;
        this.last = null;
    }

    show(list) {
        console.log(list.first);
        console.log(list.last);
    }

    addLast(item) {
        let node = new Node(item);
        
        if (this.first == null)
            this.first = this.last = node;
        else {
            this.last.next = node;
            this.last = node;
        }
    }

    addFirst(item) {
        let node = new Node(item);

        if (this.first == null) 
            this.first = this.last = node;
        else {
            node.next = node;
            this.first = node;
        }
    }
}

const list = new LinkedList();

// test cases
list.addLast(10);
list.addLast(20);
list.addLast(30);
list.addFirst(5);

list.show(list)
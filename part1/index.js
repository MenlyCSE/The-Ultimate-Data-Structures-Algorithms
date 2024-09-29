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

    get show() {
        
    }

    addLast(item) {
        const node = new Node(item);

        if (this.first == null)
            this.first = this.last = node;
        else {
            this.last.next = node;
            this.last = node;
        }
    }
}

const list = new LinkedList();

// test cases
list.addLast(10);
list.addLast(20);
list.addLast(30);
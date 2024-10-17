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
    
    #size = 0;

    #isEmpty() {
        return this.first == null;
    }

    #getPrevious(node) {
        let current = this.first
        while (current != null) {
            if (current.next == node)
                return current;
    
            current = current.next;
        }

        return null;
    }

    show(list) {
        console.log(list.first);
        console.log(list.last);
    }

    addLast(item) {
        let node = new Node(item);
        
        if (this.#isEmpty())
            this.first = this.last = node;
        else {
            this.last.next = node;
            this.last = node;
        }

        this.#size++;
    }

    addFirst(item) {
        let node = new Node(item);

        if (this.#isEmpty()) 
            this.first = this.last = node;
        else {
            node.next = this.first;
            this.first = node;
        }

        this.#size++;
    }

    indexOf(item) {
        let index = 0;
        let current = this.first;

        while (current != null) {
            if (current.value == item)
                return index;

            current = current.next;
            index++;
        }

        return -1;
    }

    contains(item) {
        if (this.indexOf(item) != -1)
            return item;

        return null;
    }

    removeFirst() {
        if (this.#isEmpty()) {
            console.error(`LinkedList is empty!`)
            return;
        }

        if (this.first == this.last) {
            this.first = this.last = null;
            console.error(`LinkedList contains one item!`)
        } else {
            let second = this.first.next;
            this.first.next = null;
            this.first = second;
        }
        
        this.#size--;
    }

    removeLast() {
        if (this.#isEmpty()) {
            console.error(`LinkedList is empty!`)
            return;
        }

        if (this.first == this.last) {
            this.first = this.last = null;
            console.error(`LinkedList contains one item!`)
        } else {
            let previous = this.#getPrevious(this.last);
            this.last = previous;
            this.last.next = null;
        }

        this.#size--;
    }

    size() {
        return this.#size;
    }

    toArray() {
        let array = [];
        let index = 0;
        let current = this.first;
        
        while (current != null) {
            array[index++] = current.value;
            current = current.next;
        }

        return array;
    }
}

const list = new LinkedList();

// test cases
list.addLast(10);
list.addLast(20);
list.addFirst(5);
list.addFirst(30);
list.removeFirst();
list.removeLast();

console.log(`Index: ${list.indexOf(5)}`);
console.log(`Contains... ${list.contains(5)}`);
console.log(`Size... ${list.size()}`);
console.log(list.toArray());

list.show(list);
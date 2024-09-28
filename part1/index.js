// linked lists
const array = new WeakMap();

class LinkedList {
    constructor() {
        array.set(this, []);
    }

    addFirst(item) {
        let arrayLength = array.get(this).length;
        let newArray = [item];
        for (let i = 0; i < arrayLength; i++)
            newArray[i+1] = array.get(this)[i];

        array.set(this, newArray);
    }

    addLast(item) {
        let index = array.get(this).length;
        array.get(this)[index] = item;
    }

    deleteFirst() {
        array.get(this)[0] = null;
    }

    deleteLast() {

    }
 
    get peek() {
        return array.get(this);
    }
}

const list = new LinkedList();

list.addLast(1)
list.addLast(2)
list.addLast(3)
list.addFirst(4)
list.addFirst(5)
list.deleteFirst();
console.log(list.peek)

// addFirst
// addLast
// deleteFirst
// deleteLast
// contains
// indexOf
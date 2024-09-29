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
            newArray[i + 1] = array.get(this)[i];

        array.set(this, newArray);
    }

    addLast(item) {
        let index = array.get(this).length;
        array.get(this)[index] = item;
    }

    deleteFirst() {
        let arrayLength = array.get(this).length;

        for (let i = 0; i < arrayLength; i++)
            array.get(this)[i] = array.get(this)[i + 1]

        array.get(this).length = arrayLength - 1;
    }

    deleteLast() {
        let arrayLength = array.get(this).length;
        array.get(this).length = arrayLength - 1;
    }

    contains(item) {
        let arrayLength = array.get(this).length;

        for (let i = 0; i < arrayLength; i++)
            if (array.get(this)[i] === item) {
                console.log(true)
                return;
            }

        console.log(false)
    }

    indexOf(item) {
        let arrayLength = array.get(this).length;

        for (let i = 0; i < arrayLength; i++)
            if (array.get(this)[i] === item) {
                console.log(`Index: ${i}`)
                return;
            }

        console.log(`Index: ${-1}`)
    }

    get peek() {
        return array.get(this);
    }
}

const list = new LinkedList();

// test cases
list.addLast(1);
list.addLast(2);
list.addLast(3);
list.addFirst(4);
list.addFirst(5);
list.deleteFirst();
list.deleteLast();
list.contains(10);
list.indexOf(10);

console.log(list.peek);
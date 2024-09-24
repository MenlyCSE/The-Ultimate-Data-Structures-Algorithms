// 
const _array = new WeakMap();

class Array {
    constructor() {
        _array.set(this, []);
    }

    insert(item) {
        _array.get(this)[_array.get(this).length] = item;
        return `inserted ${item}`;
    }

    print() {
        for (let i = 0; i < _array.get(this).length; i++)
            console.log(_array.get(this)[i]);
    }
}

const a = new Array();

// tests
a.insert(10)
a.insert(20)
a.insert(30)
a.insert(40)
a.print()
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

    removeAt(index) {
        if (index < 0 || index >= _array.get(this).length)
            throw new Error('Illegal argument exeption!');

        for (let i = index; i < _array.get(this).length; i++) 
            _array.get(this)[i] = _array.get(this)[i+1]
    }

    indexOf(item) {
        for (let i = 0; i < _array.get(this).length; i++) 
            if (item == _array.get(this)[i])
                return i; 

        return -1;
    }

    print() {
        for (let i = 0; i < _array.get(this).length; i++)
            console.log(_array.get(this)[i]);
    }
}

const a = new Array();

// test cases
a.insert(10)
a.insert(20)
a.insert(30)
a.insert(40)
a.removeAt(0)
console.log(`Index of 40... ${a.indexOf(40)}`)
a.print()
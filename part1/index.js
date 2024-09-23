// 
const _array = new WeakMap();

class Array {
    constructor() {
        _array.set(this, []);
    }
    
    show() {
        return _array.get(this);
    }

    indexOf(number) {
        let i = 0;
        while (number !== _array.get(this)[i] && i < _array.get(this).length)
            i++;

        if (number === _array.get(this)[i])
            return `found at index ${i}`;

        return `index -1`;
    }

    insert(obj) {
        _array.get(this).push(obj);
        return `pushed ${obj}`;
    }

    removeAt(index) {
        _array.get(this).splice(index, 1);
        return `removed at index ${index}`;
    }
}

const a = new Array();

for (let i = 7; i <= 12; i++)
    a.insert(i);
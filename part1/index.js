// space complexity
class Main {
    greet(names) {
        // 0(n)
        const copy = names.length;

        // 0(1) - i is fixed to amount
        for (let i = 0; i < names.length; i++)
            console.log(`Hello ${names[i]}!`);
    }
}

const m = new Main();
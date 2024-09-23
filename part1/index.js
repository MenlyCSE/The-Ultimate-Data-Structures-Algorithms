// 
class Main {
    // 0(n + m)
    log(numbers, names) {
        // 0(n) - int
        for (const number of numbers) 
            console.log(number);

        // 0(m) - string
        for (const name of names)
            console.log(name);
    }
}

const m = new Main();
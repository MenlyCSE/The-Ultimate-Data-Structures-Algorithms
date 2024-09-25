// dynamic array 
let lists = [];

lists.push(10);
lists.push(20);
lists.push(30);
lists.splice(0, 1);


for (item of lists)
    console.log(item);

console.log(`Index of 20... ${lists.indexOf(20)}`);
console.log(`Last occurences of 20... ${lists.lastIndexOf(20)}`);
console.log(`Includes 20... ${lists.includes(20)}`);
console.log(`Array length... ${lists.length}`);
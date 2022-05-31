function* range(start, end) {
    for (let i = start; i < end; i++) {
        yield i;
    }
}

const myGenerator = range(1,4)
console.log(myGenerator.next()); // { value: 1, done: false }

for(const item of range(1,4)){
    console.log(item); // 1,2,3
}
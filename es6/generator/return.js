function* return_use() {
    yield "hello";
    console.log('hello');
    yield "world";
    return "终止！";
}

for (const val of return_use()) {
    console.log(val) // hello world
}
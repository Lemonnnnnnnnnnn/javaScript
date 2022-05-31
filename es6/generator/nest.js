function* list(){
    const arr = ['liming','xiaoming','xiaohong']
    for(let name of arr){
        yield* getWord(name) // 返回一个新的生成器
        yield '-------'
    }
}

function *getWord(name){
    yield `hello ${name}`
    yield `how are you ?`
}

for(const item of list()){
    console.log(item);
}

// hello liming
// how are you ?
// -------
// hello xiaoming
// how are you ?
// -------
// hello xiaohong
// how are you ?
// -------

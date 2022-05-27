//#region myIterator
const myIterator = {
    number: 0,
    next: function () {
        this.number++
        if (this.number < 4) {
            return { done: false, value: this.number }
        }
        return { done: true, value: undefined }
    },
    [Symbol.iterator]: function () {
        return this
    }
}
//#endregion myIterator

//#region myAsyncIterable
const myAsyncIterable = {
    number : 0,
    next : function(){
        this.number ++
        if (this.number < 4) {
            return Promise.resolve({ done: false, value: this.number }) 
        }
        return Promise.resolve({ done: true, value: undefined })
    },
    [Symbol.asyncIterator](){ return this}
}
//#endregion myAsyncIterable


console.log(myIterator.next());  // { done: false, value: 1 }
console.log(myAsyncIterable.next());  // Promise { { done: false, value: 1 } }

try{
    for(const n of myAsyncIterable){ // myAsyncIterable is not iterable  myAsyncIterable的next返回Promise ，Promise不是可迭代对象
        console.log(n); 
    }
}catch(e){
    console.log(e);
}


async function run(){
    for await (const n of myAsyncIterable) {
        console.log(n);
    }
}

// run()

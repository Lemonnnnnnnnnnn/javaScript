//#region objectIterator
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


for(let i of myIterator){
    console.log(i);  // 1,2,3
}
//#endregion objectIterator

//#region class
class RangeIterator {
    constructor(start, end) {
        this.value = start;
        this.end = end;
    }
    [Symbol.iterator]() { return this }; // Symbol.iterator 为每一个对象定义了默认的迭代器。该迭代器可以被 for...of 循环使用。
    next() {
        const value = this.value;
        if (value < this.end) {
            this.value++;
            return { done: false, value: value };  // 每次 .next() 方法被调用都会返回同样的结果，以告诉 for-of 循环以下两个信息：( a ) 迭代是否结束；( b ) 返回值。
        } else {
            return { done: true, value: undefined };
        }
    }
}

function range(start, end) {
    return new RangeIterator(start, end);
}

/**
 * 一个 for-of 循环通过调用集合上的 [Symbol.iterator]( ) 方法进行启动。这个操作将会返回一个新的迭代对象
 * 一个迭代对象可以是具有 .next( ) 方法的任意对象。 每次循环调用一次.next()
 */
for (const val of range(0, 3)) {
    console.log(val)
}

//#endregion class


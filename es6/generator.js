// 生成器带有*号，所有的生成器都有一个内置的对 .next() 已经 [Symbol.iterator]( )方法的实现。
// range返一个可迭代的生成器，每次循环调用一次yield
function* range(start, end) {
    for (let i = start; i < end; i++) {
        yield i;
    }
}

function* return_use() {
    yield "hello";
    yield "world";
    return "终止！";
    yield "!!!!";
}

function next_param_use() {
    function* f() {
        for (let i = 0; true; i++) {
            const reset = yield i; // yield总是返回undefined,但如果有给默认参数，则返回参数值
            if (reset) i = -1;
        }
    }
    const g = f();
    console.log(g.next());
    console.log(g.next());
    console.log(g.next(true));

    function* f2(x) {
        const a = yield x;
        if (a) {
            console.log(a)
        }
    }

    const g2 = f2(5);
    console.log(g2.next(1)) // 注：第一个next的参数被忽视
    console.log(g2.next(1))  // 注： next的参数总是给到上一个yield

}

function error_catch() {
    function* g() {
        yield 1;
        console.log('throwing an exception');
        throw new Error('generator broke!');
        yield 2;
        yield 3;
    }

    function log(generator) {
        var v;
        console.log('starting generator');
        try {
            v = generator.next();
            console.log('第一次运行next方法', v);
        } catch (err) {
            console.log('捕捉错误', v);
        }
        try {
            v = generator.next();
            console.log('第二次运行next方法', v);
        } catch (err) {
            console.log('捕捉错误', v);
        }
        try {
            v = generator.next();
            console.log('第三次运行next方法', v);
        } catch (err) {
            console.log('捕捉错误', v);
        }
        console.log('caller done');
    }

    log(g());
    // starting generator
    // 第一次运行next方法 { value: 1, done: false }
    // throwing an exception
    // 捕捉错误 { value: 1, done: false }
    // 第三次运行next方法 { value: undefined, done: true }
    // caller done
}

function error_catch2(){
    // 内部捕获
    function *g(){
        try{
            yield 1
        }catch(e){
            console.log('inner' + e)
        }
    }
    const it= g();
    it.next();
    it.throw('出错了')
    
}

function yield_star() {
    // 如果 yield 命令后面跟的是一个遍历器，需要在 yield 命令后面加上星号，表明它返回的是一个遍历器。这被称为 yield*语句。
    // 会直接执行yield* 遍历器的第一个next()方法
    function* inner() {
        yield 'hello!'
    }

    function* outer1() {
        yield 'open'
        yield inner()
        yield 'close'
    }

    var gen = outer1()
    gen.next() // -> 'open'
    gen.next() // -> a generator
    gen.next() // -> 'close'

    function* outer2() {
        yield 'open'
        yield* inner()
        yield 'close'
    }

    var gen = outer2()
    gen.next() // -> 'open'
    gen.next() // -> 'hello!'
    gen.next() // -> 'close'
}

function yield_star2() {
    function* digui(array) {
        if (Array.isArray(array)) {
            for (const val of array) {
                yield* digui(val)
            }
        } else {
            yield array;
        }
    }

    const arr = [1, 2, [3, 4, [5, 6]]]
    for (const val of digui(arr)) {
        console.log(val)
    }
}

function attr_generator() {
    let obj = {
        * myGeneratorMethod() {
        }
    };

    let obj2 = {
        myGeneratorMethod: function* () {
            // ···
        }
    };
}

function arr() {
    function* iterEntries(obj) {
        let keys = Object.keys(obj);
        for (let i = 0; i < keys.length; i++) {
            let key = keys[i];
            yield [key, obj[key]];
        }
    }

    let myObj = { foo: 3, bar: 7 };

    for (let [key, value] of iterEntries(myObj)) {
        console.log(key, value);
    }

    // foo 3
    // bar 7
}

function generator_promise_use() {
    function req() {
        return Promise.resolve('foo')
    }

    function* await_simulation() {
        const val = yield req();
        console.log(val) 
    }

    // 执行器
    function run(generator) {
        const it = generator() // 构建可迭代对象it
        function go(res) { // res = req() = Promise
            if (res.done) return res.value; 
            return res.value.then((val) => { // Promise.then(val = foo)
                return go(it.next(val)) // 再次调用next，将返回的值val传给上一个yield
            }).catch(err => {
                return go(it.throw(val))
            })
        }
        go(it.next()) // 执行迭代

    }

    run(await_simulation)
}


function main() {
    error_catch2()
    // generator_promise_use()
    // yield_star2()
    // for (const val of range(0, 4)) {
    //     console.log(val)
    // }
    // for (const val of return_use()) {
    //     console.log(val)
    // }
    // next_param_use();
}

main();


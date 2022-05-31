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



//#region async
function req() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('foo')
        }, 1000)
    })
}

function req2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('bar')
        }, 1000)
    })
}

async function run() {
    const res = await req()
    console.log(res);//foo
    const res2 = await req2()
    console.log(res2); // 'bar'
}

// run()
//#endregion async

//#region m_async
function* m_run() {
    const res = yield req()
    console.log(res);
    const res2 = yield req2()
    console.log(res2);
}

/**
 * @param {Generator} g 
 */
function m_async(g) {
    const it = g 
    const { value: p, done } = it.next() // 执行到第一条yield语句，value = req() = Promise对象 

    runner(p, done) // 递归调用it.next执行后续的yield语句

    function runner(p, done) {
        if (!done) {
            p.then(res => { // 用Promise.then获取结果
                const { value: p, done } = it.next(res) // 将结果作为yield的返回值传回生成器，并执行到下一条yield语句，获取到新的Promise对象 req2()
                runner(p, done) //重复这个过程
            })
        }
    }
}

m_async(m_run())

//#endregion m_async






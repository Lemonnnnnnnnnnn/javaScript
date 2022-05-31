//#region async
function req() {
    return () => new Promise((resolve) => {
        setTimeout(() => {
            resolve('foo')
        }, 1000)

    })
}

async function run() {
    const _req = req()
    const res = await _req()
    console.log(res);//foo
}

// run()
//#endregion async

function m_async() {
    const _req = req()
    const res = runGenerator(_req())
    console.log(res);
}

function* generator() {
    const _req = req()
    const num = yield _req()
    yield num
}

function runGenerator(g) {
    const it = g()
    const { value: p } = it.next() // {value : Promise , done : false}

    p.then(res => {
        const { value: num } = it.next(res)
        console.log(num);
    })
}

// runGenerator(generator)






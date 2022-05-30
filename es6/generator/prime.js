function* list() {
    let num = 2
    while (true) {
        yield num++
    }
}


function filterFunc(n) {
    return (x) => x % n !== 0
}

function m_filter(fn, arr) {
    return function*() { // 返回新的生成器
        for (const item of arr) { // 遍历旧的生成器，调用next()时返回符合筛选函数的结果
            if (fn(item)) {
                yield item
            }
        }
    }
}

function* prime() {
    let it = list()

    while (true) {
        const { value } = it.next()
        yield value
        it = m_filter(filterFunc(value) , it)()// 构造新的生成器
    }
}

for (const n of prime()) {
    if (n < 10) {
        console.log(n);
    } else {
        break
    }
}


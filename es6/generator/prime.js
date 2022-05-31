function* list() { // 初始序列
    let num = 2
    while (true) {
        yield num++
    }
}

function filterFunc(n) { // 筛选条件，判断目标值能否被整除
    return (x) => x % n !== 0
}

function* m_filter(fn, arr) {
    for (const item of arr) { // 遍历旧的生成器
        if (fn(item)) { // 满足筛选条件就抛出
            yield item
        }
    }
}

function* prime() {
    let it = list() // 获取初始序列

    while (true) {
        const { value } = it.next()
        yield value
        it = m_filter(filterFunc(value), it)// 构造新的生成器
    }
}

for (const n of prime()) { // 获取100以内的素数
    if (n < 100) {
        console.log(n);
    } else {
        break
    }
}


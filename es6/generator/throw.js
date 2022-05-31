function* g() {
    try {
        yield 1
    } catch (e) {
        console.log('error', e)
    }

    console.log('keep going');
    yield 2
}
const it = g(); // 构造生成器
it.next(); // 执行到 yield 1
const num = it.throw('出错了') // 抛出错误
console.log(num);

// error 出错了
// keep going
// { value: 2, done: false }
//#region yield1
function* f() {
    for (let i = 0; true; i++) {
        const reset = yield i; // yield总是返回undefined,但如果有给默认参数，则返回参数值
        if (reset) i = -1;
    }
}

const g = f();
console.log(g.next()); // { value: 0, done: false }
console.log(g.next()); // { value: 1, done: false }
console.log(g.next(true)); // { value: 0, done: false }
//#endregion yield2


// 函数的this取决于这个函数是被谁调用的
const circle = {
    radius: 10,
    outGetRadius() { // 被circle调用， this是circle
        const self = this;
        let innerGetRadius = function () {
            console.log(self.radius);
            console.log(this.radius);
            console.log(this)
        }
        /**
         * 箭头函数的this来自作用域链
         * innerGetRadius2 来自outGetRadius函数，outGetRadius 被circle调用， this是circle
         */
        const innerGetRadius2 = () => {
            console.log(this.radius);
            console.log(this)
        }
        // 没有调用者，this是window
        innerGetRadius();
        innerGetRadius2();
        innerGetRadius = innerGetRadius.bind(this);
        innerGetRadius();
    },
}

// 箭头函数的this默认返回空对象。
// 普通函数的this默认返回window。
const test = () => {
    console.log(this)
}

function mutiplyArrow() {
    const pipeline = (...funcs) =>
        val => funcs.reduce((a, b) => b(a), val);

    const plus1 = a => a + 1;
    const mult2 = a => a * 2;
    const addThenMult = pipeline(plus1, mult2); // pipeline返回一个函数，函数带一个参数val
    addThenMult(5)
}

// circle.outGetRadius()
test();


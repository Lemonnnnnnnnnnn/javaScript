// ES5
// 注： arguments在箭头函数里不能使用
function func1(a, b, c) {
    for (const val of arguments) {
        console.log(val)
    }
    // console.log(arguments)
}

//ES6
function func2(...args){
    for (const val of args) { // arguments在箭头函数里不能使用
        console.log(val)
    }
}

function wrapper(func) { 
    return function (...args) { // ...args 获取作用域链上的参数
        let newFunc = func(...args);
        return newFunc
    };
}
const func3 = wrapper(func1);


(function main() {
    // func1(1, 2, 3);
    // func2(1, 2, 3);
    // func3(1, 2, 3);
})()
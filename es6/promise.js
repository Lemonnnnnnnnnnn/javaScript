const { resolve } = require("path/posix");

function myPromise() {
    return Promise.resolve(42);
    // return new Promise((resolve , reject)=>{
    //     resolve(42)
    // })
}

function setTimeout_use() {
    function getData() {
        return new Promise((resolve, reject) => {
            setTimeout(resolve('hello'), 2000)
        })
    }
    getData().then(res => {
        console.log(res)
    })
    // 立马输出 hello

    // code2

    function getData2() {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 2000, 'hello')
        })
    }
    getData2().then(res => {
        console.log(res)
    })
    // 2s后输出hello

}

function multiplePromise() {
    function p1() {
        return new Promise((resolve) => {
            setTimeout(resolve, 2000, 'aaa')
        })
    }

    function p2() {
        return new Promise((resolve) => {
            resolve(p1)
        })
    }

    p2().then(res => res().then(res2 => console.log(res2)))
}

function animationPromise(elem, animations) {
    //假定某个DOM元素上面，部署了一系列的动画，前一个动画结束，才能开始后一个。如果当中有一个动画出错，就不再往下执行，返回上一个成功执行的动画的返回值。
    let ret = null; // 变量ret用来保存上一个动画的返回值
    let p = Promise.resolve();// 新建一个空的Promise
    for (let anim of animations) { // 
        p = p.then((val => { // then返回promise对象
            ret = val; // 记录返回值
            return anim(elem) // 动画函数，这里return的值是给下一个.then（若有）的参数
        }))
    }
    return p.catch(e => { }).then(() => ret) // 给p添加错误捕获，并返回一个promise函数，resolve上一格动画的返回值
}


(function main() {
    // myPromise().then(res=>console.log(res))
    // multiplePromise()
})()


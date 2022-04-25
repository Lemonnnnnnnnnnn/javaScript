// 尾调用优化：即return一个纯函数。 目的： 节省内存
/**
 * 我们知道，函数调用会在内存形成一个“调用记录”，又称“调用帧”（call frame），保存调用位置和内部变量等信息。
 * 如果在函数 A 的内部调用函数 B，那么在 A 的调用帧上方，还会形成一个 B 的调用帧。等到 B 运行结束，将结果返回到 A，B 的调用帧才会消失。如果函数B内部还调用函数C，那就还有一个 C 的调用帧，以此类推。所有的调用帧，就形成一个“调用栈”（call stack）。
 * 
 * 尾调用由于是函数的最后一步操作，所以不需要保留外层函数的调用帧，因为调用位置、内部变量等信息都不会再用到了，只要直接用内层函数的调用帧，取代外层函数的调用帧就可以了。
 * 
 */

var fs = require("fs")

function tail() {
  // 原函数
  function f(n) {
    if (n === 1) return 1;
    return n * f(n - 1)
  }

  // 新函数
  function f2(n, total = 1) {
    if (n === 1) return total;
    return f2(n - 1, n * total);
  }

}

/**
 * 传值调用(js默认)：x = 1, f(x + 5) = f(6) ， 先算出参数值再调用函数 
 * 传名调用(thunk)：将x+ 5 传入函数内，用到时再计算出来
 * js的thunk： 多参=> 单参函数：
 *  即：主方法调用=> 调用参数函数 => 获得单参 => 执行主方法
 */
function thunk_optimization() {
  const fileName = '111.txt'
  const callback = () => { };

  function f1() {
    fs.readFile(fileName, callback)
  }

  function f2() {
    const readFileThunk = thunk(fileName)

    function thunk(fn) {
      return function (cb) {
        return fs.readFile(fn, cb)
      }
    }

    readFileThunk(callback)
  }
}

function thunk_optimization2() {
  function thunkWrap(fn) {
    return (...rest) => {
      return (callback) => {
        const args = [...rest, callback]
        return fn(...args)
      }
    }
  }


  const fileName = 'README.md'
  const callback = () => {
    console.log('回调')
  };

  const readFileThunk = thunkWrap(fs.readFile)
   readFileThunk(fileName)(callback)
}

(function main() {
  // const res = fs.readFile('README.md' , ()=>console.log(111))
  thunk_optimization2()
})()




// console.log(f(5));
// console.log(f2(5));


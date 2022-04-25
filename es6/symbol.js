
/**
 * 1. symbol表示唯一值
 * 2. 一旦创建不可改变
 */

function br() {
    console.log("\n---------------------\n")
}

function symbolFor(str) {
    console.log("根据给定的key值在注册表中找到相应的符号")
    return Symbol.for(str)
}

function keyfor() {
    //  Symbol.for()与Symbol()这两种写法，都会生成新的 Symbol。它们的区别是，前者会被登记在全局环境中供搜索，后者不会。
    // 比如，如果你调用Symbol.for("cat")30 次，每次都会返回同一个 Symbol 值，但是调用Symbol("cat")30次，会返回30个不同的Symbol值。
    // Symbol.for 为全局环境，无作用域
    var s1 = Symbol.for("foo");
    Symbol.keyFor(s1) // "foo"

    var s2 = Symbol("foo");
    Symbol.keyFor(s2) // undefined
}

function lterator(){
    class Collection { 
        *[Symbol.iterator]() { // 将class转换为可遍历对象
          let i = 0;
          while(this[i] !== undefined) {
            yield this[i];
            ++i;
          }
        }
      }
       
      let myCollection = new Collection();
      myCollection[0] = 1;
      myCollection[1] = 2;
       
      for(let value of myCollection) {
        console.log(value);
      }
}

function to_string_use(){
  class Collection {
    get [Symbol.toStringTag]() {
      return 'xxx';
    }
  }
  var x = new Collection();
  console.log(Object.prototype.toString.call(x))
   // "[object xxx]"
}

function main() {
  to_string_use()
    // console.log(symbolFor('my_symbol'));

    // const my_symbol = Symbol('my_symbol')
    // const obj = {}
    // obj[my_symbol] = "ok";

    // console.log("符号唯一性")
    // console.log(Symbol('foo') === Symbol('foo'));
    // br()

    // console.log(obj[my_symbol]);
    // br()

    // console.log("符号被跳过")
    // for (let i in obj) {
    //     console.log(i)
    // }
    // br()
    // // 获取符号属性
    // console.log("使用Object.getOwnPropertySymbols来遍历符号属性")
    // for (let i of Object.getOwnPropertySymbols(obj)) {
    //     console.log(obj[i])
    // }
    // br()
    // console.log("使用Reflect.ownKeys来遍历符号属性")
    // for (let i of Reflect.ownKeys(obj)) {
    //     console.log(obj[i])
    // }
    // br()
    // keyfor()
    // lterator();
}


main();
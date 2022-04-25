const { Observer, Subject } = require('./basic')

// 观察者
class Render extends Observer {
    constructor(props) {
        super(props)
    }
}

// 观察目标
class Data extends Subject {
    constructor(object) {
        super()
        transform(object, this.notify)
    }
}

function isObject(obj) {
    const nativeString = Object.prototype.toString.call(obj) // 用Object原型链上的toString方法转换传入的对象
    if (nativeString === '[object Object]') { 
        return true
    }
    return false
}

//#region wrapper
/**
 * 
 * @param {*} object 待转化的观察对象
 * @param {*} property 属性
 * @param {*} fn 通知函数
 */
function wrapper(object, property, fn = () => { }) {
    let val = object[property]
    Object.defineProperty(object, property, {
        get: () => {
            return val
        },
        set: (newVal) => {
            // object[property] = newVal // 再次设置object对象，触发set方法，导致死循环
            val = newVal // 通过引用设置对象值，不触发set方法
            fn()
        }
    })
}
//#endregion wrapper

/**
 * 
 * @param {*} obj 待转化的观察对象
 * @param {*} fn 通知函数
 */
function transform(obj, fn) {
    for (const key in obj) {
        let val = obj[key]
        if (isObject(val)) {
            transform(val, fn)
        }
        wrapper(obj, key, fn)
    }
}


function main(){
    const object = {
        a: 1,
        b: {
            c: 2,
        }
    }
    const data = new Data(object)
    
    const render = new Render(() => {
        console.log('进行渲染');
    })
    
    data.addObserver(render)
    
    object.a = 2
    object.b.c = 3
    
}

main()


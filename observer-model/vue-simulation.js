function defineReactive(data, key, val) {
    // let dep = [] 
    let dep = new Dep() // 依赖库
    Object.defineProperty(data, key, {
        get() {
            if (Dep.target) {
                dep.depend(target) // 收集依赖
            }
            return val
        },
        set(newVal) {
            val = newVal
            dep.notify()
        }
    })
}



class Dep {
    static target = null
    constructor() {
        this.subs = []
    }

    addSub(sub) {
        this.subs.push(sub)
    }

    depend() {
        Dep.target.addDep(this)  // watcher.addDep(dep实例)
    }

    notify() {
        for (let i = 0; i < this.subs.length; i++) {
            this.subs[i].fn()
        }
    }
}

class Watcher {
    constructor(data, property, fn) {
        this.data = data
        this.property = property
        this.fn = fn
        Dep.target = this//将自己挂载到 Dep.target，调用 Dep.depend时会读取该变量
        this.data[property] // 访问一次，添加依赖
    }
    addDep() {

        // 我这个Watcher要被塞到Dep里去了~~
    }
    update() {
        // Dep通知我更新呢~~
        this.fn()
    }
}


class Transform {
    constructor(data) {
        // 响应式绑定数据通过方法
        transform(data);
    }
}

function transform(data) {
    const keys = Object.keys(data);
    for (let i = 0; i < keys.length; i++) {
        // 将data中我们定义的每个属性进行响应式绑定
        defineReactive(obj, keys[i], obj[keys[i]]);
    }
}


const data = {
    a: 1,
    b: 2,
}

// 初始化
new Transform(data) // 将data转换成可观测对象

// 观察a属性 
new Watcher(data, 'a', () => {
    console.log('Watcher 回调执行')
})



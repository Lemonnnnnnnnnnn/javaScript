function defineReactive (obj, key, val) {
    let Dep;
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: () => {
            Dep.depend(); // 被读取了，将这个依赖收集起来
            return val;
        },
        set: newVal => {
            if (val === newVal) {
                return;
            }
            val = newVal;
            Dep.notify(); // 被改变了，通知依赖去更新
        }
    })
}

class Dep{
    static target = null

    depend(){
        Dep.target.addDep(this)
    }

    notify(){

    }
}

class Observer {
    constructor() {
        // 响应式绑定数据通过方法
        observe(this.data);
    }
}

function observe(){
    const keys = Object.keys(data);
    for (let i = 0; i < keys.length; i++) {
       // 将data中我们定义的每个属性进行响应式绑定
       defineReactive(obj, keys[i] , obj[key[i]]);
    }
}

// 依赖
class Watcher {
    addDep() {
        // 我这个Watcher要被塞到Dep里去了~~
    }
    update() {
        // Dep通知我更新呢~~
    }
}
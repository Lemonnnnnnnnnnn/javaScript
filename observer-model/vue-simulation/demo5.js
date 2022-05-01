function defineReactive(data, key, val) {
    // 每个data属性绑定一个dep,dep存放watcher arr
    let dep = new Dep(); // 在闭包中定义一个dep对象
    Object.defineProperty(data, key, {
      get() {
        if (Dep.target) {
          // 依赖收集
          dep.depend(); // Dep.target指向哪个就收集哪个
        }
        return val;
      },
      set(newVal) {
        val = newVal;
        dep.notify();
      },
    });
  }
  
  class Dep {
    static target = null; // 全局属性，用于指向某一个watcher，用完即丢
    constructor(){
        this.subs = []
    }
    depend() {
      Dep.target.addDep(this);
    }
  
    addSub(sub) {
      // 添加一个观察者对象
      this.subs.push(sub);
    }
  
    notify() {
      const subs = this.subs.slice();
      for (let i = 0, l = subs.length; i < l; i++) {
        // 调用每一个watcher的update
        subs[i].update();
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
  
    addDep(dep) {
      dep.addSub(this); // 向dep的subs里添加自己
    }
    update() {
      // console.log("更新视图");
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
          defineReactive(data, keys[i], data[keys[i]]);
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
      console.log('执行回调')
  })
  
  new Watcher(data, 'b', () => {
      console.log('回家吃饭了')
  })
  
  
  data.a = 2
  data.b = 3
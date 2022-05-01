class Dep {
  static target = null; // 全局属性，用于指向某一个watcher，用完即丢
  constructor() {
    this.subs = [];
  }
  depend() {
    Dep.target.addDep(this); // watcher addDep(dep实例)
  }
  addSub(sub) {
    // 添加一个观察者对象
    this.subs.push(sub);
  }

  show() {
    this.subs.forEach((item) => item.update()); // 执行所有观察者的回调函数
  }
}

class Watcher {
  constructor(data, property, fn) {
    this.fn = fn; 
    Dep.target = this; //将自己挂载到 Dep.target，调用 Dep.depend时会读取该变量
    data[property] // 通过get方法添加依赖
  }
  addDep(dep) {
    dep.addSub(this); // 向dep的subs里添加自己
  }
  update() { // 执行回调函数
    this.fn();
  }
}

const data = {
  a: 1,
  b: 2,
};

let dep = new Dep();
Object.defineProperty(data, "a", {
  get() {
      dep.depend() // 访问时添加依赖
  },
  set() {
    dep.show(); // 如果a属性改变，调用show方法
  },
});

// 观察data的a属性，如果改变，执行回调函数
new Watcher(data, "a", () => {
  console.log('执行回调');
});

new Watcher(data, "a", () => {
  console.log('回家吃饭了');
});


data.a = 2;


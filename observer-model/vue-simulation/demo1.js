class Dep {
  static target = null; // 全局属性，用于指向某一个watcher，用完即丢
  constructor() {
    this.subs = []; // watcher观察者数组
  }
  depend() {
    this.subs.push(Dep.target); // 添加观察者
  }
  show() {
    this.subs.forEach((item) => console.log(item.id)); // 展示添加的观察者id
  }
}

let id = 0;
class Watcher {
  constructor() {
    Dep.target = this; //将自己挂载到 全局属性Dep.target。 Dep.target === watcher
    this.id = id++;
  }
}

let dep = new Dep(); // target = null
const watcher1 = new Watcher(); // target = watcher1
dep.depend();
const watcher2 = new Watcher(); // target = watcher2
dep.depend();

dep.show()
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
    this.subs.forEach((item) => console.log(item.val));
  }
}

class Watcher {
  constructor() {
    Dep.target = this; //将自己挂载到 Dep.target，调用 Dep.depend时会读取该变量
    this.val = val;
  }
  addDep(dep) {
    dep.addSub(this); // 向dep的subs里添加自己
  }
}

const data = {
  a: 1,
  b: 2,
};

let dep = new Dep(); // target = null

for (let item in data) {
  new Watcher(data[item]); // 为每个属性添加一个watcher
  dep.depend();
}

dep.show();

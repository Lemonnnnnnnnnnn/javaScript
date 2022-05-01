class Dep {
  static target = null; // 全局属性，用于指向某一个watcher，用完即丢
  constructor() {
    this.subs = [];
  }
  depend() {
    this.subs.push(Dep.target);
  }
  show() {
    this.subs.forEach((item) => console.log(item.val));
  }
}

class Watcher {
  constructor(val) {
    Dep.target = this; //将自己挂载到 Dep.target，调用 Dep.depend时会读取该变量
    this.val = val;
  }
}

const data = {
  a: 1,
  b: 2,
};

let dep = new Dep(); // target = null

for (let item in data) {
  new Watcher(data[item]);
  dep.depend()
}

dep.show()


function defineReactive(data , key){
    let dep = [] // 依赖库
    const val = data[key]
    Object.defineProperty(data, key,{
        get(){
            dep.push(target) // 收集依赖
            return val
        },
        set(){
            dep.forEach(fn=>fn()) // 执行所有依赖
        }
    })
}

const data = {
    a : 1
}
const key = 'a'

defineReactive(data , key) // 转化data为可观察对象

let target = null

function $watch (fn){
    target = fn;
}

function callback(){
    console.log(111)
}

$watch(callback)

data.a
data.a = 2
/**
 * set相对于数组的优点：
 * 1. 删除方便
 * 2. 自动去重
 */

function basic() {
    const my_set = new Set(["1", "2", "3"]);
    console.log('has方法');
    console.log(my_set.has("2"))
    console.log('values方法');
    for (let i of my_set.values()) {
        console.log(i)
    }
    // set是按键值对的方法来对数组进行排序，使用entries可以看到每一个数组元素的键值
    // 键值相等
    console.log('entries方法');
    for (let i of my_set.entries()) {
        console.log(i)
    }
}

// set中不能有重复值
function repeat_value() {
    const my_set = new Set(["1", "2"]);
    console.log("添加一个重复值")
    my_set.add("2");
    for (let i of my_set) {
        console.log(i);
    }
    console.log('删除一个值');
    my_set.delete("2")
    for (let i of my_set) {
        console.log(i);
    }
}

// 求交集
function interSection() {
    const set1 = new Set([1])
    const set2 = new Set([1, 2])
    let intersection = new Set([...set1].filter(x => set2.has(x)));
    for (let i of intersection) {
        console.log(i)
    }
}

// set转数组
function setToArray(){
    const set1 = new Set([1])
    console.log(Array.from(set1));
    console.log([...set1])
}

// 去重
function duplicate_removal() {
    const numbers = [2, 3, 4, 4, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 5, 32, 3, 4, 5];
    console.log([...new Set(numbers)])
}


(function main() {
    duplicate_removal();
    // setToArray();
    // interSection();
    // basic();
    // repeat_value();
}())

// weakset  wekmap : 用于存储DOM节点，方便内存回收
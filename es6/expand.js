function fuc_use(){
    function add(x, y) {
        return x + y;
    }
    var numbers = [4, 38]; // 展开运算符
    add(...numbers) // 42
}

function rest_use(){
const [first, ...rest] = ["foo", "bar", "baz"];
first // "foo"
rest  // ["bar","baz"]
}

function map_use(){
    const M_map = new Map([
        [1 , 'a'],
        [2 , 'b'],
    ])
    const arr = [...M_map.keys()]; // [1, 2, 3]
}

function yield_use(){
    function *go(){
        yield  1;
        yield  2;
    }

    [...go()] // [1, 2]
}
// 注： 展开运算符、Array.from()、Promise.all()的机制是用的迭代器iterator




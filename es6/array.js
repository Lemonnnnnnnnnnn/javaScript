function Math_use() {
    // Math.trunc 方法用于去除一个数的小数部分，返回整数部分。
    Math.trunc(-4.9) // -4
}

function Array_from_use() {
    const s = new Set([1, 2, 3]);
    console.log(Array.from(s, (n) => n === 3 ? 5 : n));
}

function Array_of_use() {
    Array.of(3, 11, 8) // [3,11,8]
    Array.of(3) // [3]

    Array(3) // [undefined, undefined, undefined]
    Array(3, 11, 8) // [3, 11, 8]
}

function fill_use() {
    ['a', 'b', 'c'].fill(7)
    // [7, 7, 7]

    new Array(3).fill(7)
    // [7, 7, 7]

    ['a', 'b', 'c'].fill(7, 1, 2) // 第二三参数为起始，结束位置
    // ['a', 7, 'c']
}


(function main() {
})()
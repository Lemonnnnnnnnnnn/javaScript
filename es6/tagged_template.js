function func1() {
    const a = 5;
    const b = 10;

    function tag(stringArr, ...args) {
        console.log(stringArr);
        console.log(args);
    }

    // 标签模板用途 ： 国际化处理（多语言转换）
    tag`Hello ${a + b} world ${a * b}`;
}


(function main() {
    func1()
}())

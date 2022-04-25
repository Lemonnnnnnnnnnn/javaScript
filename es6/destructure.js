function* fibs() {
    let a = 0;
    let b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}


function main(){
    // const [a, b, c, d, e, f] = fibs()
    // console.log(a, b, c, d, e, f)
    const obj = { a: 1, b: 2 };
    let a = 5, b = 6 , c;
    console.log(a, b);
    ({ a, b , c = 10 } = obj); // 注： {}被识别为块作用域
    console.log(a, b , c);
}

main();
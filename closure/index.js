function method(){
    let a = 0;
    return function(){
        a++;
        return a;
    }
}

const callbackFunc = method()
const res = callbackFunc();
console.log(res);

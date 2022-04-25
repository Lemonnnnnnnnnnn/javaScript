class M_Class{
    constructor(){
        this.val = 1;
    }
    get a(){
        return this.val * 2;
    }
    set a(value){
        this.val  = value * 2;
        return this.val
    }

    get [Symbol.toStringTag]() {
        return 'xxx';
      }
}

(function main(){
    const myClass = new M_Class();
    // 在class内部可以使用get和set关键字，设置某个属性值的存值函数和取值函数，拦截该属性的存取行为 
    
    console.log(myClass.a);
    myClass.a = 5
    console.log(myClass.a);
    console.log(Object.prototype.toString.call(myClass) )
})()



function exec_y_use(){
    const str = "aaa_aa_a";
    const reg1 = new RegExp(/a+/g) // g : 全匹配
    const reg2 = new RegExp(/a+/y) // y : 而 y 修饰符确保匹配必须从剩余的第一个位置开始
    
    /**
     * RegExpObject.exec(string)
     * exec 匹配到一个就停止
     */
    console.log(reg1.exec(str)); 
    console.log(reg2.exec(str)); 
    
    // 剩余字符串： 【_aa_a】
    console.log(reg1.exec(str)); // [aa] 
    console.log(reg2.exec(str)); // null  第一个字符[_]不满足正则对象[a+]
}

function escape_use(){
    var str = 'hello. how are you?';
    // 通过escape转义并加上[g]生成一个新的reg对象
    var regex = new RegExp(RegExp.escape(str), 'g'); 
    
}

(function main(){
    exec_y_use()
    
})()
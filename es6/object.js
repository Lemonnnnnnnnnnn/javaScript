function simplify() {
    var o = {
        method() {
            return "Hello!";
        }
    };

    // 等同于

    var o = {
        method: function () {
            return "Hello!";
        }
    };
}

function object_is_use() {
    +0 === -0 //true
    NaN === NaN // false

    Object.is(+0, -0) // false
    Object.is(NaN, NaN) // true
}

function assign_use(){
    const merge =(...sources) => Object.assign({}, ...sources); // 合并生成一个新对象
    // 为属性分配默认值
    const DEFAULTS = {
        logLevel: 0,
        outputFormat: 'html'
      };
       
      function processContent(options) {
        let options = Object.assign({}, DEFAULTS, options);
      }
}

function prototype_use(){
    
}

(function main() {
})()
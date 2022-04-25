
function get() {
    var person = {
        name: "张三"
    };

    var proxy = new Proxy(person, {
        get: function (target, property) {
            if (property in target) {
                return target[property];
            } else {
                throw new ReferenceError("Property \"" + property + "\" does not exist.");
            }
        }
    });

    proxy.name // "张三"
    proxy.age // 抛出一个错误
}

function set() {
    let validator = {
        set: function (obj, prop, value) {
            if (prop === 'age') {
                if (!Number.isInteger(value)) {
                    throw new TypeError('The age is not an integer');
                }
                if (value > 200) {
                    throw new RangeError('The age seems invalid');
                }
            }

            // 对于age以外的属性，直接保存
            obj[prop] = value;
        }
    };

    let person = new Proxy({}, validator);

    person.age = 100;

    person.age // 100
    person.age = 'young' // 报错
    person.age = 300 // 报错
}

function apply_use() {
    var target = function () { return 'I am the target'; };
    var handler = {
        apply: function (receiver, ...args) {
            return 'I am the proxy';
        }
    };

    var p = new Proxy(target, handler);

    p() === 'I am the proxy';
    // true
}

function ownKeys_use() {
    let target = {};

    let handler = {
        ownKeys(target) {
            return ['hello', 'world'];
        }
    };

    let proxy = new Proxy(target, handler);

    Object.keys(proxy)
    // [ 'hello', 'world' ]
}

(function main() {
})()
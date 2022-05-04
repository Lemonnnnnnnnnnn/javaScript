const str = 'foo'

function generateProxy(value) {
    const obj = {
        value
    }
    return new Proxy(obj,{
        get(){
            return value
        },
        set(target, property , newValue){
            value = newValue
        }
    })
}

const ref = generateProxy(str)
console.log(ref.value);
ref.value = 'bar'
console.log(ref.value);

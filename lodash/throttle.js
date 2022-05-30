const { throttle } = require('lodash')
const moment = require('moment')

//#region basic
function basic() {
    const beginTime = moment()

    function inputValue(str) {
        console.log('input value is ' + str);
        const overTime = moment()
        console.log('开始时间和结束时间相差', moment(overTime - beginTime).format('ss'), '秒');
    }

    const input = throttle(inputValue, 2000, { leading: false, trailing: true })

    input('hello') 

    // 多次调用，前面的请求会执行click.cancel()方法
    setTimeout(() => {
        input('world')  // 开始时间和结束时间相差02秒
    }, 1000);
}
//#endregion basic
// basic()


const debounce = require('lodash/debounce')
const moment = require('moment')

//#region basic
function basic() {
    const beginTime = moment()

    function inputValue(str) {
        console.log('input value is ' + str);
        const overTime = moment()
        console.log('开始时间和结束时间相差', moment(overTime - beginTime).format('ss'), '秒');
    }

    // const input = debounce(inputValue, 2000, { leading: false, trailing: true }) // 默认配置，延迟后执行。延迟时间内只有最后一个请求有效。常用场景：输入input框进行模糊请求查找
    const input = debounce(inputValue, 2000)

    input('hello') // ，若无后续调用，开始时间和结束时间相差02秒

    // 多次调用，前面的请求会执行click.cancel()方法并将计时器清0
    setTimeout(() => {
        input('world')  // 开始时间和结束时间相差03秒
    }, 1000);
}
//#endregion basic

//#region maxWait
function maxWait() {
    const beginTime = moment()

    function inputValue(str) {
        console.log('input value is ' + str);
        const overTime = moment()
        console.log('开始时间和结束时间相差', moment(overTime - beginTime).format('ss'), '秒');
    }

    const input = debounce(inputValue, 2000, { maxWait: 2000 })

    input('hello')

    setTimeout(() => {
        input('world')   // 开始时间和结束时间相差02秒
        // 执行过程： 计时器重新计时，计时1秒，到达maxWait上限，停止等待
    }, 1000);
}
//#endregion maxWait

// maxWait()

//#region interrupt
function interrupt() {
    function inputValue(str) {
        console.log('input value is ' + str);
    }

    const input = debounce(inputValue, 2000)

    input('hello')
    // input.flush() // 找到之前调用的debounceFunc函数，并立即执行
    input.cancel() // 找到之前调用的debounceFunc函数，并停止执行
}
//#endregion interrupt

//#region leading
function leading() {
    const beginTime = moment()

    function clickBtn(str = 'debounce') {
        console.log(`hello ${str}`)
        const overTime = moment()
        console.log('开始时间和结束时间相差', moment(overTime - beginTime).format('ss'), '秒');
    }

    const click = debounce(clickBtn, 2000, { leading: true, trailing: false }) // 延迟前执行，延迟时间内只有第一个请求有效。常用场景：用于表单提交防止多次点击（只提交第一份数据）

    click('world') // 开始时间和结束时间相差 00 秒

    // 多次调用,后面的请求会执行 click.cancel()方法。
    setTimeout(() => {
        click('hell') // 未执行
    }, 1000)

}
//#endregion leading

// leading()










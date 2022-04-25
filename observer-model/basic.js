//  观察者
class Observer {
    constructor(fn) {
        this.update = fn
    }

    run = (message) => {
        this.update(message)
    }
}

// 观察目标
class Subject {
    constructor() {
        this.observerList = []
    }

    addObserver = (observer) => {
        this.observerList.push(observer)
    }

    notify = (message) => {
        this.observerList.forEach(observer => {
            observer.run(message)
        })
    }
}

function main() {
    const observer = new Observer((val) => {
        console.log(`通知值是${val}`)
    })
    const observer2 = new Observer(() => {
        console.log(`回家吃饭了`)
    })
    const subject = new Subject()
    subject.addObserver(observer)
    subject.addObserver(observer2)
    subject.notify('hello')
}

// main()


module.exports = {
    Observer,
    Subject
}
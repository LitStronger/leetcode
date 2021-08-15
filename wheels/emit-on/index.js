// https://www.cnblogs.com/wulinzi/p/12988208.html


function MyEventEmitter() {
    this.events = {}
}
MyEventEmitter.prototype.on = function (e, callback) {
    if (!this.events[e]) {
        this.events[e] = [callback] // 不存在属性e时(undefined)，没办法用push
    }
    else {
        this.events[e].push(callback)
    }

}

MyEventEmitter.prototype.emit = function (e, ...rest) {
    if (!this.events[e]) return

    this.events[e].forEach(fn => {
        fn.apply(e, rest)
    });
}
let emitter = new MyEventEmitter()
emitter.on('subscribe', function (data) {
    console.log('subscribe', data)
})
emitter.on('subscribe2', function (data) {
    console.log('subscribe2', data)
})

emitter.emit('subscribe2', 'ok')

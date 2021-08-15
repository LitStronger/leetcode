let { log } = console
Function.prototype.myBind = function (obj, ...rest) {
    let _obj = obj || window;
    let _func = this

    return function (...newArgs) {
        return _func.apply(_obj, [...rest, ...newArgs])
    }
}

function Fun(name) {
    this.name = name
}

Fun.prototype.getName = function () {
    console.log(this.name)
}

let obj1 = {
    name: 'bb'
}
let obj2 = {
    name: 'cc',
    fun: function () {
        log(this.name)
    }
}

let f1 = new Fun('aa')
// f1.getName.myBind(obj1)
// obj2.fun.myBind(obj1)
// Fun.getName.myBind(obj1)()
f1.getName.myBind(obj1)()
// log(obj2)

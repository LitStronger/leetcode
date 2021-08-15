Function.prototype.myApply = function (obj, rest) {
    let sym = Symbol('func')
    obj[sym] = this;
    let res = obj[sym](...rest)
    delete obj[sym];
    // obj.func = this
    // let res = obj.func(...rest)
    // delete obj.func
    return res
}
function func(a, b, c, d) {
    console.log(this)
    console.log(a, b, c, d)
}
let obj = { id: 1 }

func.myApply(obj, [1, 2, 3])
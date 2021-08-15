// 1.处理null(有null直接返回false)；两者必须都为对象(typeof的结果只有object和function属于对象)
// 2.对LProto

function myInstanceof(L, R) {
    if (L === null || R === null || (typeof L != "object" && typeof L != "function")) {
        return false
    }
    let LProto = L.__proto__;
    console.log(R.prototype)
    while (LProto) {
        if (LProto === R.prototype) {
            return true
        }
        LProto = LProto.__proto__
    }
    return false
}
let a = {}
// console.log(myInstanceof(a, Object)

// console.log(a ==  null)
if (a) {
    console.log(a)
}
let b = []
if (b) {
    console.log(b)
}
Function.prototype.myBind = function (...args) {

    const newThis = args[0];
    const realArgs = args.slice(1);
    const func = this;
    return function (...newArgs) {
        return func.call(newThis, ...realArgs, ...newArgs)
    }
}

Function.prototype.myCall = function (...args) {
    const newThis = args[0] || window;
    const realArgs = args.slice(1);
    const func = this;

    const funcSym = Symbol('func');
    newThis[funcSym] = func;

    const res = newThis[funcSym](...realArgs);

    delete newThis[funcSym];

    return res;
}

function fun(text1, text2) {
    console.log(this.name, text1, text2)
}

const obj = {
    name: 'aa'
}
const obj2 = {
    name: 'bb'
}

fun.myCall(obj, 'hahaha', 'hehehe')

const bindTest = fun.myBind(obj2, 'hello')
bindTest('hello2')





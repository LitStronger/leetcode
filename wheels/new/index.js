// 1.根据原型创建实例对象
// 2.执行构造函数，其中this绑定到新对象
// 3.如果构造函数返回一个对象，那么返回该对象；
//   否则返回创建的对象

function _new(obj, ...rest) {

    // 基于obj的原型创建一个新的对象
    const newObj = Object.create(obj.prototype)

    // 添加属性到新创建的newObj上, 并获取obj函数执行的结果.
    const result = obj.apply(newObj, rest)

    // 如果执行结果有返回值并且是一个对象, 返回执行的结果, 否则, 返回新创建的对象 
    return typeof result === 'object' ? result : newObj;
}

// test
function Person(name, age) {
    this.name = name
    this.age = age
}
let person1 = new Person('John', 18)
let person2 = _new(Person, 'Mike', 19)

console.log(person1)
console.log(person2)
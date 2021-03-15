let stackA = []
let stackB = []
function push(node) {
    stackA.push(node)
}

function pop() {
    if (!stackB.length) { // 注意，需要在B栈为空的时候，才能将A栈中的数据推到B中，否则会打乱顺序
        while (stackA.length) {
            stackB.push(stackA.pop())
        }
    }

    return stackB.pop()
}

push(1)
push(2)
push(3)
console.log(pop())
push(4)
console.log(pop())
console.log(pop())
console.log(pop())

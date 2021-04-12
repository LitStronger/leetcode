// 1 爆栈
function Fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    // write code here
    return Fibonacci(n - 1) + Fibonacci(n - 2)
}
console.log(Fibonacci(6))

// 2 占空间
function Fibonacci2(n) {
    let res = [0, 1];
    if (n <= 1) return n;


    for (let i = 2; i <= n; i++) {
        res[i] = res[i - 1] + res[i - 2];
    }
    console.log(res)
}
Fibonacci2(6)

// 3 
function Fibonacci(n) {
    let res = 0;
    let a = 0, b = 1;
    if (n <= 1) return n;

    for (let i = 2; i <= n; i++) {
        res = a + b;
        a = b;
        b = res;
    }
    return res
}
Fibonacci3(6)



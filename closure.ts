function outer() {
    let x = 10

    function inner() {
        return x
    }

    x = 5
    return inner
}

const foo = outer()

console.log(foo())

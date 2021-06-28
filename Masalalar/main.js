// N1


// #0043
let Reverse = (a, b) => {
    a = a - b       // a = 3-4 = -1
    b = a + b       // b = -1+4 = 3       b - ning oxirgi qiymati
    a = b - a       // a = 3-(-1) = 4     a - ning oxirgi qiymati
    return (a, b)
}
console.log(Reverse(3, 4))


// #0058
let Zarik = n => {
    return 7 - n
}
console.log(Zarik(6)


// #0059
let Kvadrat = n => {
    return n * n
    return n ** 2
    return Math.pow(n, 2)
}
console.log(Kvadrat(5))

// #0002
let KattaK = (A, B) => {
    if (A > B) {
        return ">"
    }
    else if (A < B) {
        return "<"
    }
    else {
        return "="
    }
}
console.log(KattaK(5, 6))


// #0010
let Prize = (N, A, B, C,) => {
    D = A + B + C
    if (D >= N) {
        return "Yes"
    }
    return "No"
}
console.log(Prize(1200, 700, 400, 200))


// #0013

let Virus = (N, K) => {
    if (N == 0 || N == 1) {
        return 1
    }
    else
        return K + 1
}
console.log(Virus(2, 7))


// #0019
let Niqob = (N, K) => {
    return Math.floor(K / N)
}
console.log(Niqob(3, 14))
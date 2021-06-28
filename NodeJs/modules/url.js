const url = require('url')

const newUrl = new URL('https://csolution.uz/members?name-Sanjar')

// Umumiy url manzil
console.log(newUrl.href)

// Hostimizda port boladigan bolsa port bn birga qaytaradi
console.log(newUrl.host)

// Hostimizni(Domen ni) o'zini qaytaradi
console.log(newUrl.hostname)

// path (qasyi faylga murojat qilayotganimizni ko'rsatib beradi) => bizda members
console.log(newUrl.pathname)


// Query parametrini ko'rsatib beradi => ?name-Sanjar
console.log(newUrl.search)

// Query parametini object ko'rinishida ko'rsatib ebrish un
console.log(newUrl.searchParams)

// Add new params
newUrl.searchParams.append('firstName', 'Ismonjonov')
console.log(newUrl.searchParams)

// Tsikl orqali chiqarish
console.log(newUrl.searchParams.forEach((name, value)=>{
    console.log(`${value}: ${name}`)
}))

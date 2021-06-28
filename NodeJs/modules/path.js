const path = require('path')

// Basename metodi
console.log(path.basename(__filename))

// Papka nomi
console.log(path.dirname(__filename))

// Extname (qanaqa formatdagi fayl ekanligini aniqlamoqchi bo'lsak)
console.log(path.extname(__filename))

// Agar biz ishlayotgan faylimzidagi ma'lumotlarni object ko'rinishiga keltirmoqchi bo'lsak
const pathObj = path.parse(__filename)
console.log(pathObj)

// Biron bir faylni string ko'rinishida qaytarish

// /database/mongodb/db.js

console.log(path.join(__dirname, 'database', 'mongodb', 'db.js'))
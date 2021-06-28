const fs = require('fs')  // fs - file system
const path = require('path')


// Papka yaratish metodi: mkdir
fs.mkdir(path.join(__dirname, '/papka'), {}, err => {
    if(err) throw err
    console.log('Papka yaratildi')
})

// Fayl yaratish metodi: writeFile
fs.writeFile(path.join(__dirname, '/papka', 'namuna.txt'), 'Node JS orqali yaratildi.', err => {
    if(err) throw err
    console.log('Fayl yaratildi')
})
// Node JS orqali yozildi degan contentnini o'zgaritirish un xuddi shu 4 qatorlik kod yozilib
// boshqa content yoziladi, faqat yangi contentimiz oldingi kontentdan qisqa bo'lsa, 
// content1 : hello world
// content2 : hi
// result : hillo wold

// shu muammolarni hal qilish uchun boshqa metod qo'llaniladi.
fs.appendFile(path.join(__dirname, '/papka', 'namuna.txt'), 'Node JS orqali yaratildi.', err => {
    if(err) throw err
    console.log('Content ozgartirildi.')
})

// Faylni o'qish
fs.readFile(path.join(__dirname, '/papka', 'namuna.txt', 'utf8'), (err, data) => {
    if(err) throw err
    console.log(data)
})

// Faylni nomini o'zgartirmoqchi bo'lsak
fs.rename(
    path.join(__dirname, '/papka', 'namuna.txt'),
    path.join(__dirname, '/papka', 'example.txt'),
    (err) => {
        if(err) throw err
    }
)
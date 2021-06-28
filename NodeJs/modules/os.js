const os = require('os') // os - operation system

// platform
console.log(os.platform())

// Arch (x32, x64 ,... shunga oxshash ma'lumotlarni aniqlab beradi)
console.log(os.arch())

// CPU Core (nechta yadro borligini aniqlab beradi, console da massivda nechta object
//  bo'ladigan bo'lsa shuncha yadro bo'ladi.)
console.log(os.cpus())

// Free memory (kompyuterimizda qancha bo'sh joy borligini aniqlab beradi.)
console.log(os.freemem())

// General memory (kompyuterimizda umumiy qancha joy borligini aniqlab beradi.) 
console.log(os.tatalmem())

// Uptime (operatsion sistema qachon ishga tushgani bilomoqchi bo'lsak)
console.log(os.uptime())
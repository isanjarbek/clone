//1
// const User = require('./users')

// const about = new User('Sanjar', 18)

// console.log(about)
// console.log(about.hello())

//2
// const Logger = require('./logger')

// const logger = new Logger()

// logger.on('message', data => {
//     console.log('Logging: ', data)
// })

// logger.log('GET', '/admin/dashboard')
// logger.log('POST', '/product/app')
// logger.log('DELETE', '/userrs/465453')

//3
const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req, res) => {
    // if (req.url === '/') {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
    //         if (err) throw err
    //         res.writeHead(200, { 'Content-Type': 'text/html' })
    //         res.end(content)
    //     })
    // }
    // else if (req.url === '/about') {
    //     fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
    //         if (err) throw err
    //         res.writeHead(200, { 'Content-Type': 'text/html' })
    //         res.end(content)
    //     })
    // }
    if(req.url === '/') {
        const books = [
            {name: 'Qobusnoma', author: 'Mirzo Ulugbek', page: 600},
            {name: 'Layli va Majnun', author: 'Alisher Navoiy', page: 450},
            {name: 'Temur tuzuklari', author: 'Amir Temur', page: 300},
        ]
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end(JSON.stringify(books))
    }



})

const PORT = process.env.PORT || 7000
server.listen(PORT, () => console.log(`Server running on port ${PORT}`))


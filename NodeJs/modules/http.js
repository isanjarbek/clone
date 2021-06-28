const http = require('http')

// const server = http.createServer((req, res) => {
//     res.write('Hello World')
//     res.end()
// })

// server.listen(7000, () => console.log('Server running on port: 7000'))


// tepadagi kodning qisqa ko'rinishi
http.createServer((req, res) => res.end('Hello from NodeJs')).listen(7000) 
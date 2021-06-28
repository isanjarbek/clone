const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 5000


app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'))
// })

// app.get('/about', (req,res) => {
//   res.sendFile(path.join(__dirname, 'public', 'about.html'))
// })

app.get('/download', (req, res) => {
  res.download(path.join(__dirname, 'public', 'index.html'))
})

app.use(express.static(path.join(__dirname, 'public')))
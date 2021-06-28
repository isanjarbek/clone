const express = require('express')

const app = express()

// Body parser
app.use(express.json())

app.use('/', require('./routes/auth'))

app.listen(7000, () => console.log("Server running on port : 7000"))
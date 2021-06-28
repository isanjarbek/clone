const EventEmitter = require('events')

// EventEmitter voris olish
class NewEmitter extends EventEmitter {}

// Instans object
const newEmitter = new NewEmitter()

// Event listenter
newEmitter.on('hello', ()=>{
    console.log('Hello world')
})

// Qabul qilib olish
newEmitter.emit('hello')
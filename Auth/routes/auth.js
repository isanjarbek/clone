const { Router } = require('express')
const router = Router()
const users = require('../config/users')
const isAuth = require('../middlewares/auth')


router.get('/', (req, res) => {
    res.json({ msg: users })
})

async function findByUsername(username) {
    const user = users.filter((user) => user.username === username)
    return user[0]
}
// Login route
router.post('/login', async (req, res) => {
    const user = await findByUsername(req.body.username)

    if (!user) {
        return res.status(4000).json({ msg: 'User not exist' })
    }

    const isMatch = user.password === req.body.password

    if (!isMatch) {
        return res.status(4000).json({ msg: 'Wrong answer' })
    }

    return res.status(200).json({
        msg: 'You are logged in',
        user
    })
})
// Register users
router.post('/signup', (req, res) => {
    const newUser = {
        id: new Date().getTime(),
        username: req.body.username,
        password: req.body.password
    }
    if (!req.body.username || !req.body.password) {
        return res.status(400).json({ msg: 'Please add username and password' })
    }
    users.push(newUser)

    return res.status(201).json({
        msg: 'You are successfully registered',
        newUser
    })
})

router.get('/profile', isAuth, (req, res) => {
    res.json({msg: 'You now in your profile'})
})
    
module.exports = router
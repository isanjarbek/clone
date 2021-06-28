function isAuth(req, res, next) {
    if(req.header('Authorization') === 'token 12345') {
        next()
    }

    res.status(401).json({msg: 'Wrong authorization'})
}

module.exports = isAuth
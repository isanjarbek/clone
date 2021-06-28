// Middlewars
// Logger middleware
const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalURL}: ${new Date()}`)
    next()
}

module.exports = logger
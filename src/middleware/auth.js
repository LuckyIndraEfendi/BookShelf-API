const auth = (req, res, next) => {
    console.log("Terjadi Logs di PATH : " + req.path)
    next()
}

module.exports = auth
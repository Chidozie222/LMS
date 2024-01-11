const { Router } = require("express");

const home = Router()

home.get('/', (req, res) => {
    res.send('<h1>Hello World!!!!</h1>')
})

module.exports = home
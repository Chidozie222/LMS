const { Router } = require("express");

const home = Router()

home.get('/', (req, res) => {
    res.send('<HHello World!!!!</h1>')
})
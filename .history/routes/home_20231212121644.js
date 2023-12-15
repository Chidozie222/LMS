const { Router } = require("express");

const home = Router()

home.get('/', (req, res) => {
    res.send('<Hello></Hello World!!!!</h1>')
})
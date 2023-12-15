const { Router } = require("express");

const home = Router()

home.get('/', (req, res) => {
    res.send('Hello World')
})
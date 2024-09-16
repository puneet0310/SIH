const express = require('express')
const route = express.Router()
const {jsSignup,jsLogin} = require('../Controllers/JSController')
route.post('/signup',jsSignup)
route.post('/login',jsLogin)


module.exports = route
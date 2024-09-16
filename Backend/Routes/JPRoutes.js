const express = require('express')
const route = express.Router()
const {jpSignup,jpLogin} = require('../Controllers/JPController')
route.post('/signup',jpSignup)
route.post('/login',jpLogin)


module.exports = route
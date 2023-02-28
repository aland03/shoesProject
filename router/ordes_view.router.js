const controller = require('../controller/orders_view.controller')
const express = require('express')
const app = express()

app.get('/get-all', controller.getAllOrdersView())

module.exports = app
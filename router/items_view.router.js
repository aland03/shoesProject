const controller = require('../controller/items_view.controller')
const express = require('express')
const app = express()

app.get('/get-all', controller.getAllItemsView())

module.exports = app
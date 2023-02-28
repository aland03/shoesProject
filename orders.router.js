const controller = require('../controller/orders.controller')
const express = require('express')
const app = express()

app.get('/get-all', controller.getAllOrdes())

app.get('/get-by-id/:order_id', controller.getByIdOrdes())

app.post('/add-new', controller.addNewOrdes())

app.delete('/delete/:order_id', controller.deleteOrdes())

app.put('/update/:order_id', controller.updateOrdes())

module.exports = app
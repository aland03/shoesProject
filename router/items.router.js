const controller = require('../controller/items.controller')
const express = require('express')
const app = express()

app.get('/get-all', controller.getAllItems())

app.get('/get-by-id/:item_id', controller.getByIdItems())

app.post('/add-new', controller.addNewItems())

app.delete('/delete/:item_id', controller.deleteItems())

app.put('/update/:item_id', controller.updateItems())

module.exports = app
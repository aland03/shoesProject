const controller = require('../controller/brand.controller')
const express = require('express')
const app = express()

app.get('/get-all', controller.getAllBrand())

app.get('/get-by-id/:brand_id', controller.getByIdBrand())

app.post('/add-new', controller.addNewBrand())

app.delete('/delete/:brand_id', controller.deleteBrand())

app.put('/update/:brand_id', controller.updateBrand())

module.exports = app
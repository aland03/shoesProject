const controller = require('../controller/users.controller')
const express = require('express')
const app = express()

app.get('/get-all', controller.getAllUsers())

app.get('/get-by-id/:user_id', controller.getByIdUsers())

app.post('/add-new', controller.addNewUsers())

app.delete('/delete/:user_id', controller.deleteUsers())

app.put('/update/:user_id', controller.updateUsers())

module.exports = app
const express = require('express')
const app = express()
const port = 5000

const bodyParser = require('body-parser')
app.use(bodyParser.json())

const brand = require('./router/brand.router')
app.use('/brand', brand)

const itemsView = require('./router/items_view.router')
app.use('/items_view', itemsView)

const items = require('./router/items.router')
app.use('/items', items)

const orders = require('./router/orders.router')
app.use('/orders', orders)

const ordersView = require('./router/ordes_view.router')
app.use('/orders_view', ordersView)

const users = require('./router/users.router')
app.use('/users', users)

app.listen(port , () => {
    console.log("app runing on "+port);
})
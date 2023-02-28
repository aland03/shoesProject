const model = require('../models/orders.model')
const validate = require("../validation/orders.validation")
class OrdersController {

    getAllOrdes = () => {
        return (req, res) => {
            model.getAllOrders().then(data => {
                res.send(data)
            }).catch(e => {
                res.send(e)
            })
        }
    }

    getByIdOrdes = () => {
        return (req, res) => {
            const order_id = req.params.order_id
            model.getByIdOrders(order_id).then(data => {
                res.send(data)
            }).catch(e => {
                res.send(e)
            })
        }
    }

    addNewOrdes = () => {
        return (req, res) => {
            const body = req.body
            if (validate.creatValidation(body).error) {
                res.send(validate.creatValidation(body).error.details[0].message)
            } else {
                model.addNewOrders(body).then(data => {
                    res.send(data)
                }).catch(e => {
                    res.send(e)
                })
            }
        }
    }

    deleteOrdes = () => {
        return (req, res) => {
            const order_id = req.params.order_id
            model.deleteOrders(order_id).then(data => {
                res.send("")
            }).catch(e => {
                res.send(e)
            })
        }
    }

    updateOrdes = () => {
        return (req, res) => {
            const body = req.body
            const order_id = req.params.order_id
            if (validate.updateValidation(body).error) {
                res.send(validate.updateValidation(body).error.details[0].message)
            } else {
                model.updateOrders(user_id, body).then(data => {
                    res.send("")
                }).catch(e => {
                    res.send(e)
                })
            }
        }
    }

}

module.exports = new OrdersController()
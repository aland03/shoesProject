const model = require('../models/items.model')
const validate = require("../validation/items.validation")
class ItemsController {

    getAllItems = () => {
        return (req, res) => {
            model.getAllItems().then(data => {
                res.send(data)
            }).catch(e => {
                res.send(e)
            })
        }
    }

    getByIdItems = () => {
        return (req, res) => {
            const item_id = req.params.item_id
            model.getByIdItems(item_id).then(data => {
                res.send(data)
            }).catch(e => {
                res.send(e)
            })
        }
    }

    addNewItems = () => {
        return (req, res) => {
            const body = req.body
            if (validate.creatValidation(body).error) {
                res.send(validate.creatValidation(body).error.details[0].message)
            } else {
                model.addNewItems(body).then(data => {
                    res.send(data)
                }).catch(e => {
                    res.send(e)
                })
            }
        }
    }

    deleteItems = () => {
        return (req, res) => {
            const item_id = req.params.item_id
            model.deleteItems(item_id).then(data => {
                res.send("")
            }).catch(e => {
                res.send(e)
            })
        }
    }

    updateItems = () => {
        return (req, res) => {
            const body = req.body
            const item_id = req.params.item_id
            if (validate.updateValidation(body).error) {
                res.send(validate.updateValidation(body).error.details[0].message)
            } else {
                model.updateItems(user_id, body).then(data => {
                    res.send("")
                }).catch(e => {
                    res.send(e)
                })
            }
        }
    }

}

module.exports = new ItemsController()
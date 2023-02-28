const model = require('../models/users.model')
const validate = require('../validation/users.validation')
class UsersController {

    getAllUsers = () => {
        return (req, res) => {
            model.getAllUsers().then(data => {
                res.send(data)
            }).catch(e => {
                res.send(e)
            })
        }
    }

    getByIdUsers = () => {
        return (req, res) => {
            const user_id = req.params.user_id
            model.getByIdUsers(user_id).then(data => {
                res.send(data)
            }).catch(e => {
                res.send(e)
            })
        }
    }

    addNewUsers = () => {
        return (req, res) => {
            const body = req.body
            if (validate.creatValidation(body).error) {
                res.send(validate.creatValidation(body).error.details[0].message)
            } else {
                model.addNewUsers(body).then(data => {
                    res.send(data)
                }).catch(e => {
                    res.send(e)
                })
            }
        }
    }

    deleteUsers = () => {
        return (req, res) => {
            const user_id = req.params.user_id
            model.deleteUsers(user_id).then(data => {
                res.send("")
            }).catch(e => {
                res.send(e)
            })
        }
    }

    updateUsers = () => {
        return (req, res) => {
            const body = req.body
            const user_id = req.params.user_id
            if (validate.updateValidation(body).error) {
                res.send(validate.updateValidation(body).error.details[0].message)
            } else {
                model.updateUsers(user_id, body).then(data => {
                    res.send("")
                }).catch(e => {
                    res.send(e)
                })
            }
        }
    }

}

module.exports = new UsersController()
const { date } = require('joi')
const model = require('../models/orders_view.model')

class Orsers_viewController {

    getAllOrdersView = () => {
        return (req, res) =>{
            model.getAllOrdersView().then(data => {
                res.send(data)
            }).catch(e => {
                res.send(e)
            })
        }
    }
}

module.exports = new Orsers_viewController()
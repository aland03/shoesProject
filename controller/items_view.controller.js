const model = require('../models/items_view.model')

class Items_viewController {

    getAllItemsView = () => {
        return (req, res) =>{
            model.getAllItemsView().then(data => {
                res.send(data)
            }).catch(e => {
                res.send(e)
            })
        }
    }

}

module.exports = new Items_viewController()
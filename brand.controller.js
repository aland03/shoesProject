const model = require('../models/brand.model')
const validate = require('../validation/brand.validation')
class BrandController {

    getAllBrand = () => {
        return (req, res) =>{
            model.getAllBrand().then(data => {
                res.send(data)
            }).catch(e => {
                res.send(e)
            })
        }
    } 

    getByIdBrand = () => {
        return (req, res) => {
            const brand_id = req.params.brand_id
            model.getByIdBrand(brand_id).then(data => {
                res.send(data)
            }).catch(e => {
                res.send(e)
            })
        }
    }

    addNewBrand = () => {
        return (req, res) => {
            const body = req.body
            if(validate.creatValidation(body).error){
                res.send(validate.creatValidation(body).error.details[0].message)
            }else{
                model.addNewBrand(body).then(data => {
                    res.send(data)
                }).catch(e => {
                    res.send(e)
                })
            }
        }
    }

    deleteBrand = () => {
        return (req, res) => {
            const brand_id = req.params.brand_id
            model.deleteBrand(brand_id).then(data => {
                res.send("")
            }).catch(e => {
                res.send(e)
            })
        }
    }

    updateBrand = () => {
        return (req, res) => {
            const body = req.body
            const brand_id = req.params.brand_id
            if (validate.updateValidation(body).error) {
                res.send(validate.updateValidation(body).error.details[0].message)
            } else {
                model.updateBrand(user_id, body).then(data => {
                    res.send("")
                }).catch(e => {
                    res.send(e)
                })
            }
        }
    }
}

module.exports = new BrandController()
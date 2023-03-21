const product = require('../models/product.model')

module.exports.createProduct = (req,res) => {
    product.create(req.body)
    .then((newProduct) => res.json(newProduct))
    .catch((err)=> res.json({message:'something went wrong', error:err}));
}
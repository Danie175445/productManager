const { model } = require('mongoose');
const product = require('../models/product.model')

module.exports.createProduct = (req,res) => {
    product.create(req.body)
    .then((newProduct) => res.json({product:newProduct}))
    .catch((err)=> res.json({message:'something went wrong', error:err}));
}
module.exports.findAllProducts = (req,res) => {
    product.find()
    .then((allProducts) => res.json(allProducts))
    .catch((err)=> res.json({message:'something went wrong', error:err}));
}
module.exports.findOneProduct = (req,res) =>{
    product.find({_id:req.params.id})
        .then((singleProduct)=> res.json(singleProduct))
        .catch((err)=> console.log('something went wrong',err))
}
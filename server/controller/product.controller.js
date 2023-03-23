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
    product.findOne({_id:req.params.id})
        .then((singleProduct)=> res.json(singleProduct))
        .catch((err)=> console.log('something went wrong',err))
}
module.exports.editProduct= (req,res)=>{
    product.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true,runValidator:true}
    )
        .then((updateProduct)=> res.json(updateProduct))
        .catch((err)=> console.log('something went wrong',err))
}
module.exports.deleteProduct = (req,res) =>{
    product.deleteOne({_id:req.params.id})
        .then(results =>res.json(results))
        .catch((err)=>console.log('something went wrong'))
}
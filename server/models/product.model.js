const mongoose = require('mongoose')

const Productschema = new mongoose.Schema({
    title: String,
    price: Number,
    description: String
},  {timestamps:true})

const product = mongoose.model('product', Productschema)
module.exports = product
const productcontroller = require('../controller/product.controller')

module.exports = app => {
    app.post('/api/products', productcontroller.createProduct)
}
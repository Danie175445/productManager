const productcontroller = require('../controller/product.controller')

module.exports = app => {
    app.post('/api/products', productcontroller.createProduct)
    app.get('/api/products',productcontroller.findAllProducts)
    app.get('/api/products/:id', productcontroller.findOneProduct)
}
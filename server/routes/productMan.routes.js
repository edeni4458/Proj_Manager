const ProductMan = require('../controllers/productMan.controller')

module.exports = (app) => {
    // Create 
    app.post('/api/products/new', ProductMan.addProductMan)

    // Read all
    app.get('/api/products', ProductMan.allProductMans)

    // Read one
    app.get('/api/product/:id', ProductMan.oneProductMan)

    // Update one
    app.put('/api/product/:id', ProductMan.updateProductMan)
    
    // Delete one
    app.delete('/api/product/:id', ProductMan.deleteProductMan)
}
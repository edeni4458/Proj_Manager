const ProductMan = require('../models/productMan.model')

// Create
module.exports.addProductMan = (req, res) => {
    const newProduct = req.body
    ProductMan.create(newProduct)
    .then(product => res.json(product))
    .catch(error => res.status(400).json(error))
}
// Read all
module.exports.allProductMans = (req, res) => {
    ProductMan.find()
    .then((product) => res.json(product))
    .catch((error) => res.json(error));
};
// Read One
module.exports.oneProductMan = (req, res) => {
    const idFromParams = req.params.id
    ProductMan.findOne ({_id:idFromParams})
    .then((oneproduct) => res.json (oneproduct))
    .catch((error) => res.json(error))
};
// Update
module.exports.updateProductMan=(req, res) => {
    const idFromParams = req.params.id
    const updatedValue = req.body
    ProductMan.findOneAndUpdate({_id: idFromParams}, updatedValue, {new: true, runValidators: true})
    .then((updatedProductMan) => res.json(updatedProductMan))
    .catch((error) => res.status(400).json(error))
};
// Delete - delete ProductMan
module.exports.deleteProductMan = (req, res) => {
    ProductMan.deleteOne({_id: req.params.id})
    .then((message) => res.json(message))
    .catch((error) => res.json(error));

}

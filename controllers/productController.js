import Product from '../models/productModel'

// @route  GET api/products
// @desc   get all products
// @access Public
export const GetAllProducts = async (req, res) => {
    try {
        const products = await Product.find().sort({ id: -1 })
        res.status(200).json(products)
    } catch (err) {
        console.log(err.message)
        res.send({ err: "Server Error" })
    }
}

// @route  GET api/products/:id
// @desc   Get Single Product
// @access PUBLIC
export const GetProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.headers.id)
        res.status(200).json(product)
    } catch (err) {
        console.log(err.message)
        res.send({ err: "Server Error" })
    }
}
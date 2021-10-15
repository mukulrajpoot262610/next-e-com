import mongoose from 'mongoose'
import Product from '../models/productModel'
import connectDB from '../config/db'
import product from '../public/product.list'

connectDB()

const importData = async () => {
    try {
        await Product.deleteMany()

        const sampleProducts = product.map(product => {
            return { ...product, user: 'd' }
        })

        await Products.insertMany(sampleProducts)

        console.log('Data Imported Successfully...')
        process.exit()

    } catch (err) {
        console.log('Data Import Failed...: ', err.message)
        process.exit(1)
    }
}

const DestroyData = async () => {
    try {
        await Product.deleteMany()

        console.log('Data Imported Successfully...')
        process.exit()

    } catch (err) {
        console.log('Data Import Failed...: ', err.message)
        process.exit(1)
    }
}

if (process.argv[2] === '-d') {
    DestroyData()
} else {
    importData()
}
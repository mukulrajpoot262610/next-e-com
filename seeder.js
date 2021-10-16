const mongoose = require('mongoose')
const Product = require('./models/productModel')
const User = require('./models/UserModel')
const connectDB = require('./config/db')
const product = require('./public/product.list')
const user = require('./public/user.list')

connectDB()

const importData = async () => {
    try {
        await Product.deleteMany()
        await User.deleteMany()

        const sampleUser = await User.insertMany(user)

        const adminUser = sampleUser[0]._id

        const sampleProducts = product.map(product => {
            return { ...product, user: adminUser }
        })

        await Product.insertMany(sampleProducts)

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
        await User.deleteMany()

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
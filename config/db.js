const mongoose = require('mongoose')

const connectDB = async () => {

    try {
        const response = await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        if (response) { console.log('MongoDB connected...') }
    } catch (err) {
        console.log(err.message)
        process.exit(1)
    }
}

module.exports = connectDB
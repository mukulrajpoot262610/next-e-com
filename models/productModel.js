import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema({
    name: { type: String },
    rating: { type: Number, default: 0 },
    comment: { type: String },
    title: { type: String },
}, {
    timestamps: true
})

const ProductSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    name: { type: String },
    image: { type: String },
    image1: { type: String },
    image2: { type: String },
    image3: { type: String },
    brand: { type: String },
    category: { type: String },
    description: { type: String },
    rating: { type: Number, default: 0 },
    reviews: [reviewSchema],
    numOfReviews: { type: Number, default: 0 },
    price: { type: Number, default: 0 },
    salePrice: { type: Number, default: 0 },
    countInStock: { type: Number, default: 0 },
},
    { timestamps: true }
)

export default mongoose.models.Product || mongoose.model('Product', ProductSchema)
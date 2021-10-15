import mongoose from 'mongoose'

const OrderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    orderItems: [
        { name: { type: String }, },
        { qty: { type: Number, default: 1 } },
        { image: { type: String } },
        { price: { type: Number, default: 0 } },
        { product: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Product' } }
    ],
    shippingAddress: {
        address: { type: String },
        city: { type: String },
        postalCode: { type: String },
        country: { type: String },
    },
    paymentMethod: { type: String },
    paymentResult: {
        id: { type: String },
        status: { type: String },
        update_time: { type: String },
        email_address: { type: String },
    },
    taxPrice: { type: String, default: 0 },
    shippingPrice: { type: String, default: 0 },
    totalPrice: { type: String, default: 0 },
    isPaid: { type: Boolean, default: false },
    paidAt: { type: Date },
    isDelivered: { type: Boolean, default: false },
    deliveredAt: { type: Date }

},
    { timestamps: true }
)

export default mongoose.models.Order || mongoose.model('Order', OrderSchema)
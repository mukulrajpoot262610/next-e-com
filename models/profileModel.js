import mongoose from 'mongoose'

const shipping_AddressSchema = new mongoose.Schema({
    address: { type: String },
    landmark: { type: String },
    country: { type: String },
    state: { type: String },
    city: { type: String },
    pincode: { type: Number },
}, {
    timestamps: true
})

const ProfileSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    name: { type: String },
    email: { type: String },
    shipping_address: [shipping_AddressSchema],
},
    { timestamps: true }
)

export default mongoose.models.Profile || mongoose.model('Profile', ProfileSchema)
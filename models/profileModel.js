import mongoose from 'mongoose'

const ProfileSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    email: { type: String },
    avatar: { type: String },
    name: { type: String },
},
    { timestamps: true }
)

export default mongoose.models.Profile || mongoose.model('Profile', ProfileSchema)
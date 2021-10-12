import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String, required: true, unique: true },
    isAdmin: { type: Boolean, default: false },
    avatar: { type: String, default: '/man.png' }
},
    { timestamps: true }
)

export default mongoose.models.User || mongoose.model('User', UserSchema)
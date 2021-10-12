import mongoose from 'mongoose'

const NotificationSchema = new mongoose.Schema({
    userTo: { type: mongoose.Schema.Types.ObjectId, ref: 'user' }, // jisko notification deni hai
    userFrom: { type: mongoose.Schema.Types.ObjectId, ref: 'user' }, // jisne notification bheji hai
    nameFrom: { type: String },
    avatarFrom: { type: String },
    notificationType: { type: String },
    opened: { type: Boolean, default: false },
    entityId: mongoose.Schema.Types.ObjectId
},
    { timestamps: true }
)

NotificationSchema.statics.insertNotification = async (userTo, userFrom, nameFrom, avatarFrom, notificationType, entityId) => {
    const data = {
        userTo,
        userFrom,
        nameFrom,
        avatarFrom,
        notificationType,
        entityId
    }

    await Notification.deleteOne(data).catch(err => console.log(err))
    return Notification.create(data).catch(err => console.log(err))
}

export default mongoose.models.Notification || mongoose.model('Notification', NotificationSchema)
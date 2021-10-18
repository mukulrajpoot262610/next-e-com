import admin from '../config/index'
import User from '../models/UserModel'
import Profile from '../models/profileModel'

const firebaseAuth = async (req, res, next) => {
    try {
        const firebaseUser = await admin.auth().verifyIdToken(req.headers.token)
        if (!firebaseUser) {
            return res.status(400).json({ err: 'Invalid or Expired Token' })
        }
        const user = await User.findOne({ email: firebaseUser.email })
        const profile = await Profile.findOne({ email: firebaseUser.email })

        if (user) {
            req.currentUser = user
            if (profile) {
                req.currentUserProfile = profile
            } else {
                req.currentUserProfile = {}
            }
            next()
        } else {
            let newUser = await new User({
                name: firebaseUser.name,
                email: firebaseUser.email,
                avatar: firebaseUser.picture ? firebaseUser.picture : '/images/man.png',
            }).save();
            if (profile) {
                req.currentUserProfile = profile
            } else {
                req.currentUserProfile = {}
            }
            req.currentUser = newUser
            next()
        }

    } catch (err) {
        console.log(err)
        res.status(400).json({
            err: err.message
        })
    }
}

module.exports = firebaseAuth
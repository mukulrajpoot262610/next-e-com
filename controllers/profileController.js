import Profile from '../models/profileModel'

// @route  POST api/profile
// @desc   Create new Profile
// @access Private
export const CreateProfile = async (req, res) => {
    const { about, collegeYear, facebook, github, headline, wakatime, linkedin, name, project1, project2, project3, project4, skills, stack, twitter, website } = req.body;

    console.log(req.body)
    const { id, email, avatar } = req.currentUser;
    const profileFields = {
        user: id,
        email,
        avatar,
        about,
        collegeYear,
        facebook,
        github,
        headline,
        wakatime,
        linkedin,
        name,
        project1,
        project2,
        project3,
        project4,
        skills,
        stack,
        twitter,
        website
    }

    try {
        let profile = await Profile.findOne({ email })
        if (profile) {
            // UPDATE
            profile = await Profile.findOneAndUpdate({ email }, { $set: profileFields }, { new: true })

            return res.json({ profile })
        }

        // CREATE
        profile = new Profile(profileFields);

        await profile.save()
        res.json({ profile })

    } catch (err) {
        console.log(err.message)
        res.status(400).send('ROUTES: Server Error')
    }
}

// @route  DELETE api/profile/:id
// @desc   Delete a Profile
// @access PRIVATE
export const DeleteProfile = async (req, res) => {
    if ((req.user.id === req.params.id) || req.user.isAdmin) {
        try {
            await Profile.findByIdAndDelete(req.params.id)
            res.status(200).json({ msg: 'Profile Deleted...' })
        } catch (err) {
            console.log(err.message)
            res.send({ err: "Server Error" })
        }
    } else {
        res.status(401).json({ errors: [{ msg: 'You are not Allowed' }] })
    }
}

// @route  GET api/profile/:id
// @desc   Get Single Profile
// @access PUBLIC
export const GetProfile = async (req, res) => {
    try {
        const profile = await Profile.findById(req.headers.id)
        res.status(200).json({ profile })
    } catch (err) {
        console.log(err.message)
        res.send({ err: "Server Error" })
    }
}

// @route  GET api/profile
// @desc   Get All Profile
// @access PUBLIC
export const GetAllProfile = async (req, res) => {
    try {
        const profiles = await Profile.find().sort({ id: -1 })
        res.status(200).json({ profiles })
    } catch (err) {
        console.log(err.message)
        res.send({ err: "Server Error" })
    }
}

// @route  PUT api/profile/follow/:id
// @desc   Follow a User
// @access Private
// const FollowUser = async (req,res) => {
//     // req.params.id -- jisko follow krna hai
//     // req.currentUser -- jo follow krega
//     // req.currentUserProfile -- jo follow krega uski profile
//     try {
//         const profileTo = await Profile.findById(req.params.id)
//         const profileBy = await Profile.findById(req.currentUserProfile.id)

//         //Check Post Already be liked
//         if (profileTo.followers.filter(follow => follow.user.toString() === profileBy.id).length > 0) {
//             const removeIndexTo = profileTo.followers.map(follow => follow.user.toString()).indexOf(req.currentUser.id)
//             profileTo.followers.splice(removeIndexTo, 1)

//             const removeIndexBy = profileBy.following.map(f => f.user.toString()).indexOf(req.params.id)
//             profileBy.following.splice(removeIndexBy, 1)

//             await profileTo.save()
//             await profileBy.save()

//             res.json({ followers: profileTo.followers, following: profileBy.following })
//         } else {
//             profileTo.followers.unshift({
//                 user: profileBy.id,
//                 name: profileBy.name,
//                 headline: profileBy.headline,
//                 avatar: profileBy.avatar
//             })

//             profileBy.following.unshift({
//                 user: profileTo.id,
//                 name: profileTo.name,
//                 headline: profileTo.headline,
//                 avatar: profileTo.avatar,
//             })

//             await Notification.insertNotification(profileTo.id, profileBy.id, profileBy.name, profileBy.avatar, "Follow", profileBy.id)

//             await profileTo.save()
//             await profileBy.save()

//             res.json({ followers: profileTo.followers, following: profileBy.following })
//         }

//     } catch (err) {
//         console.log(err.message)
//         res.status(500).send('Server Error')
//     }
// }
// @route  GET api/firebase/user
// @desc   Auth User via firebase and get Profile
// @access PRIVATE
export const regsiterUser = async (req, res) => {
    res.status(200).json(req.currentUser)
}

// @route  GET api/firebase/profile
// @desc   Auth User via firebase and get Profile
// @access PRIVATE
export const GetProfile = async (req, res) => {
    res.status(200).json(req.currentUserProfile)
}


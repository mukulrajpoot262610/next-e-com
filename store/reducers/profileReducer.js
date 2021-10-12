// REDUCERS
export const profileReducer = (state = { profileData: {} }, action) => {
    switch (action.type) {
        case 'USER_PROFILE_REQUEST':
            return {
                ...state,
                loading: true,
                profileData: {}
            }
        case 'USER_PROFILE_UPDATE_REQUEST':
            return {
                ...state,
                loading: true,
            }
        case 'USER_PROFILE_SUCCESS':
            return {
                ...state,
                loading: false,
                profileData: action.payload,
                error: null,
            }
        case 'USER_PROFILE_FAIL':
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}

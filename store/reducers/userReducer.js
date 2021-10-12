// REDUCERS
export const userReducer = (state = { userData: {} }, action) => {
    switch (action.type) {
        case 'USER_AUTH_LOGIN_REQUEST':
        case 'USER_AUTH_REGISTER_REQUEST':
            return {
                ...state,
                loading: true,
                userData: {}
            }
        case 'USER_AUTH_LOGIN_SUCCESS':
        case 'USER_AUTH_REGISTER_SUCCESS':
            return {
                ...state,
                loading: false,
                userData: action.payload,
                error: null,
                isAuth: true,
            }
        case 'USER_AUTH_LOGIN_FAIL':
        case 'USER_AUTH_REGISTER_FAIL':
            return {
                ...state,
                loading: false,
                error: action.payload,
                isAuth: false,
            }
        case 'USER_LOGOUT':
            localStorage.clear()
            return {
                ...state,
                isAuth: false,
                loading: false,
                userData: {}
            }
        default:
            return state
    }
}

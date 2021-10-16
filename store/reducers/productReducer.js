// REDUCERS
export const productReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case 'PRODUCT_LIST_REQUEST':
            return {
                ...state,
                loading: true,
                products: []
            }
        case 'PRODUCT_LIST_SUCCESS':
            return {
                ...state,
                loading: false,
                products: action.payload,
            }
        case 'PRODUCT_LIST_FAIL':
            return {
                ...state,
                loading: false,
                error: action.payload,
                isAuth: false,
            }
        default:
            return state
    }
}

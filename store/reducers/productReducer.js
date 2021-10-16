// REDUCERS
export const productListReducer = (state = { products: [] }, action) => {
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
                products: [],
                error: action.payload,
            }
        default:
            return state
    }
}

export const productDetailReducer = (state = { products: { reviews: [] } }, action) => {
    switch (action.type) {
        case 'PRODUCT_DETAIL_REQUEST':
            return {
                ...state,
                loading: true,
                product: {}
            }
        case 'PRODUCT_DETAIL_SUCCESS':
            return {
                ...state,
                loading: false,
                product: action.payload,
            }
        case 'PRODUCT_DETAIL_FAIL':
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}
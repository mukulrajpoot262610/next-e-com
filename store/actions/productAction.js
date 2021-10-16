import axios from 'axios'

export const listProducts = () => async (dispatch) => {
    try {
        dispatch({ type: 'PRODUCT_LIST_REQUEST' })

        const { data } = await axios.get('/api/products')

        dispatch({
            type: 'PRODUCT_LIST_SUCCESS',
            payload: data
        })

    } catch (err) {
        dispatch({
            type: 'PRODUCT_LIST_FAIL',
            payload: err.message
        })
    }
}

export const detailProducts = (id) => async (dispatch) => {
    try {
        dispatch({ type: 'PRODUCT_DETAIL_REQUEST' })

        const { data } = await axios.get(`/api/products/${id}`, {
            headers: {
                id: id
            }
        })

        dispatch({
            type: 'PRODUCT_DETAIL_SUCCESS',
            payload: data
        })

    } catch (err) {
        dispatch({
            type: 'PRODUCT_DETAIL_FAIL',
            payload: err.message
        })
    }
}
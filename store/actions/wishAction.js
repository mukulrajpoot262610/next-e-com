import axios from "axios"

export const addToWish = (id, qty, size) => async (dispatch) => {
    try {
        const { data } = await axios.get(`/api/products/${id}`, {
            headers: {
                id: id
            }
        })

        dispatch({
            type: 'WISH_ADD_ITEM',
            payload: {
                product: data._id,
                name: data.name,
                image: data.image,
                price: data.price,
                salePrice: data.salePrice,
                brand: data.brand,
                countInStock: data.countInStock,
                size: size,
                qty: qty,
            }
        })

    } catch (err) {
        console.log(err.message)
    }
}

export const removeFromWish = (id) => async (dispatch) => {
    try {
        dispatch({
            type: 'WISH_REMOVE_ITEM',
            payload: id
        })

    } catch (err) {
        console.log(err.message)
    }
}
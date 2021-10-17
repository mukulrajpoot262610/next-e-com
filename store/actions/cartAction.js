import axios from "axios"

export const addToCart = (id, qty, size) => async (dispatch, getState) => {
    try {
        const { data } = await axios.get(`/api/products/${id}`, {
            headers: {
                id: id
            }
        })

        dispatch({
            type: 'CART_ADD_ITEM',
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

        localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))

    } catch (err) {
        console.log(err.message)
    }
}

export const removeFromCart = (id) => async (dispatch) => {
    try {
        dispatch({
            type: 'CART_REMOVE_ITEM',
            payload: id
        })

        localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))

    } catch (err) {
        console.log(err.message)
    }
}
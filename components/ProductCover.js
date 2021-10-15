import React from 'react'
import { Rate } from 'antd';


const ProductCover = ({ data }) => {

    const { title, rating, price, image } = data

    return (
        <div className="relative w-72 h-96 rounded-2xl bg-white shadow-lg m-2">
            <img src={image} alt="" className="h-3/5 w-full rounded-2xl" />
            <h1 className=" mt-2 mx-4 font-bold text-base">{title}</h1>
            <Rate disabled allowHalf defaultValue={rating.rate} className="mx-4" />
            <h1 className="my-2 mx-4 font-bold text-lg">${price}</h1>
            <button className="absolute bottom-0 p-4 w-full bg-red-400 rounded-b-2xl font-bold">Add to Cart</button>
        </div>
    )
}

export default ProductCover

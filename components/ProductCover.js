import React, { useEffect } from 'react'
import { Rate, Carousel } from 'antd';
import Link from 'next/link'


const ProductCover = ({ data }) => {

    const { _id, name, rating, price, salePrice, image, image1, image2, image3, numOfReviews } = data

    return (
        <div className="relative w-80 h-500 rounded-2xl bg-white shadow-lg m-2">
            <Link href={`/product/${_id}`}>
                <Carousel autoplay className="rounded-2xl">
                    <img src={image} className="h-72 object-cover rounded-2xl" />
                    <img src={image1} className="h-72 object-cover rounded-2xl" />
                    <img src={image2} className="h-72 object-cover rounded-2xl" />
                    <img src={image3} className="h-72 object-cover rounded-2xl" />
                </Carousel>
            </Link>
            <Link href={`/product/${_id}`}>
                <h1 className=" mt-2 mx-4 font-bold text-base cursor-pointer">{name}</h1>
            </Link>
            <div className="flex items-center">
                <Rate disabled allowHalf defaultValue={rating} className=" ml-4 mr-2 my-1" />
                <h1 className="text-lg">({numOfReviews})</h1>
            </div>
            <div className="flex items-center">
                {
                    salePrice === price ? "" : <h1 className="my-2 ml-4 font-light line-through text-lg">${salePrice}</h1>
                }
                <h1 className="my-2 mx-4 font-bold text-lg">${price}</h1>
            </div>
            <button className="absolute bottom-0 p-4 w-full bg-black text-white rounded-b-2xl font-bold">Add to Cart</button>
        </div>
    )
}

export default ProductCover

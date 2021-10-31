import React from 'react'
import { Carousel } from 'antd';
import Link from 'next/link'


const ProductCover = ({ data }) => {

    const { _id, name, price, salePrice, image, image1, image2, image3 } = data

    return (
        <div className="border-2 w-80 h-96 bg-white shadow-lg m-2 hover:border-black">
            <Link href={`/product/${_id}`}>
                <Carousel autoplay className="">
                    <img src={image} className="h-72 object-cover " />
                    <img src={image1} className="h-72 object-cover " />
                    <img src={image2} className="h-72 object-cover " />
                    <img src={image3} className="h-72 object-cover " />
                </Carousel>
            </Link>
            <Link href={`/product/${_id}`}>
                <h1 className=" mt-2 mx-4 font-normal text-sm cursor-pointer">{name}</h1>
            </Link>
            <div className="flex items-center">
                {
                    salePrice === price ? "" : <h1 className="my-2 ml-4 font-light line-through text-lg">${price}</h1>
                }
                <h1 className="my-2 mx-4 font-bold text-lg">${salePrice}</h1>
            </div>
        </div>
    )
}

export default ProductCover

import { Col, message, Row } from 'antd'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/actions/cartAction'
import { removeFromCart } from '../store/actions/cartAction'
import { CloseOutlined, HeartOutlined, HeartFilled } from '@ant-design/icons'

const CartCover = ({ data }) => {

    const dispatch = useDispatch()
    const { product, image, name, brand, size, qty, salePrice, price } = data
    const [QTY, setQty] = useState(qty)
    const [wishList, setWishList] = useState(false)

    const handleRemove = (id, name) => {
        message.success(`${name} removed Successfully`)
        dispatch(removeFromCart(id))
    }

    return (
        <div className="lg:h-72 mb-4 border-2 lg:overflow-hidden">
            <Row className="flex flex-col lg:flex-row">
                <Col span={24} lg={7}>
                    <img src={image} alt="" className="w-full h-72 object-cover" />
                </Col>
                <Col span={24} lg={15} className="p-4 pl-8">
                    <div className="flex justify-between items-center">
                        <h1 className="font-medium text-xl uppercase">{brand}</h1>
                        <div className="flex items-center">
                            {
                                salePrice === price ? "" : <h1 className="font-light line-through text-sm">${price * QTY}</h1>
                            }
                            <h1 className="my-1 ml-3 font-medium text-xl text-red-700">${salePrice * QTY}</h1>
                        </div>
                    </div>
                    <h1 className="font-semibold my-2 text-2xl uppercase">{name}</h1>
                    <h1 className="font-medium text-xl uppercase">Size: {size}</h1>
                    <select value={QTY} size="large" className="border-2 bg-transparent w-24 cursor-pointer active:text-white py-4 px-6 my-2" onChange={(e) => {
                        setQty(Number(e.target.value))
                        dispatch(addToCart(product, Number(e.target.value), size))
                    }}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                    </select>
                </Col>
                <Col span={24} lg={2} className="p-4 flex lg:flex-col justify-between lg:justify-center items-center h-full w-full">
                    <CloseOutlined className="cursor-pointer lg:mb-4" onClick={() => handleRemove(product, name)} />
                    {
                        wishList ? <HeartFilled className="cursor-pointer" onClick={() => setWishList(!wishList)} /> : <HeartOutlined className="cursor-pointer" onClick={() => setWishList(!wishList)} />
                    }

                </Col>
            </Row>
        </div>
    )
}

export default CartCover

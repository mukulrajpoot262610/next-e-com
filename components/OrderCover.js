import { Col, Row } from 'antd'
import React from 'react'

const OrderCover = ({ data }) => {

    const { name, image, brand, size, qty, salePrice, price } = data

    return (
        <div className="border mb-2">
            <Row>
                <Col span={6}>
                    <img src={image} height={100} width={100} />
                </Col>
                <Col span={18} className="p-2">
                    <h1>{brand}</h1>
                    <h1 className="font-bold">{name}</h1>
                    <div className="flex items-center">
                        <h1>Size: {size}</h1>
                        <h1 className="mx-2">Quantity: {qty}</h1>
                    </div>
                    <div className="flex items-center">
                        {
                            salePrice === price ? "" : <h1 className="my-2 mr-2 font-light line-through">${price}</h1>
                        }
                        <h1 className="my-2 font-bold">${salePrice}</h1>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default OrderCover

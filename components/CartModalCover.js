import { Col, Row } from 'antd'
import React from 'react'

const CartModalCover = ({ data }) => {

    const { image, name } = data

    return (
        <div className="h-250 border my-2 overflow-hidden">
            <Row>
                <Col span={12} className="p-4">
                    <img src={image} className="w-full h-auto" alt="" />
                </Col>
                <Col span={12} className="p-4">
                    <h1>{name}</h1>
                </Col>
            </Row>
        </div>
    )
}

export default CartModalCover

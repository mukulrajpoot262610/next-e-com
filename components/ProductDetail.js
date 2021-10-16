import React, { useState } from 'react'
import { Row, Col, Drawer, Button, Space, Carousel, Select } from 'antd';
import { ToolOutlined, HeartOutlined, CarOutlined } from '@ant-design/icons'

const ProductDetail = ({ data }) => {
    const [visible, setVisible] = useState(false);
    const { Option } = Select;

    const { name, description, rating, price, salePrice, image, image1, image2, image3, numOfReviews } = data

    const size = [7, 8, 9, 10, 11]

    const [cartData, setCartData] = useState({
        size: ''
    })

    const showLargeDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    function handleChange(value) {
        console.log(`selected ${value}`);
    }


    console.log(data)

    return (
        <>
            <div className="w-full flex flex-col items-center justify-center">
                <Row className="container hidden xl:flex">
                    <Col span={16} className="p-4">
                        <img src={image} className="object-cover h-900 w-full rounded-2xl" />
                        <Row className="">
                            <Col span={12}>
                                <img src={image1} className="object-cover h-500 w-full rounded-2xl" />
                            </Col>
                            <Col span={12}>
                                <img src={image2} className="object-cover h-500 w-full rounded-2xl" />
                            </Col>
                        </Row>
                        <img src={image3} className="object-cover h-900 w-full rounded-2xl" />
                    </Col>
                    <Col className="p-4" span={8}>
                        <h1 className="font-bold text-4xl mb-4">{name}</h1>
                        <p className="">{description}</p>
                        <div className="my-8">
                            <h1 className="my-1 font-bold text-2xl text-red-700">${price}</h1>
                            {
                                salePrice === price ? "" : <h1 className="font-light line-through text-sm">${salePrice}</h1>
                            }
                            <h1 className="font-light text-sm">(Prices include GST)</h1>
                        </div>
                        <hr className="text-gray-300" />
                        <h1 className="font-light my-8 text-red-700 text-sm">Use code SAVE15 to get extra 15% off</h1>
                        <hr className="text-gray-300" />
                        <div className="my-8">
                            <div className="w-full flex justify-between">
                                <h1 className="font-bold">SIZE</h1>
                                <h1 className="font-bold flex items-center cursor-pointer" onClick={showLargeDrawer}>SIZE CHART <ToolOutlined /></h1>
                            </div>
                            <div className="flex my-4">
                                {
                                    size.map((e, index) => <div className="border-2 cursor-pointer hover:border-black active:text-white py-4 px-6 m-2" key={index} onClick={() => setCartData({ size: e })} >{e}</div>)
                                }
                            </div>

                            <div className="flex items-center justify-between my-8">
                                <select defaultValue="1" size="large" className="border-2 bg-transparent w-24 cursor-pointer active:text-white py-4 px-6 m-2" onChange={handleChange}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                                <button className="border-2 w-full cursor-pointer bg-black text-white py-4 px-6 m-2">Add To Cart</button>
                                <button className="border-2 cursor-pointer hover:border-black active:text-white py-4 px-6 m-2"><HeartOutlined /></button>
                            </div>

                            <hr className="text-gray-300" />
                            <h1 className="font-light my-8 text-red-700 text-sm flex items-center"><CarOutlined /> &nbsp; This item is Eligible for free delivery</h1>
                            <hr className="text-gray-300" />
                        </div>
                    </Col>
                </Row>

                <div className="xl:hidden w-full">
                    <Carousel autoplay className="rounded-2xl w-full">
                        <img src={image} className=" object-cover rounded-2xl" />
                        <img src={image1} className=" object-cover rounded-2xl" />
                        <img src={image2} className=" object-cover rounded-2xl" />
                        <img src={image3} className=" object-cover rounded-2xl" />
                    </Carousel>
                </div>

                <div className="container xl:hidden w-full">
                    <h1 className="font-bold text-4xl mb-4">{name}</h1>
                    <p className="">{description}</p>
                    <div className="my-8">
                        <h1 className="my-1 font-bold text-2xl text-red-700">${price}</h1>
                        {
                            salePrice === price ? "" : <h1 className="font-light line-through text-sm">${salePrice}</h1>
                        }
                        <h1 className="font-light text-sm">(Prices include GST)</h1>
                    </div>
                    <hr className="text-gray-300" />
                    <h1 className="font-light my-8 text-red-700 text-sm">Use code SAVE15 to get extra 15% off</h1>
                    <hr className="text-gray-300" />
                    <div className="my-8">
                        <div className="w-full flex justify-between">
                            <h1 className="font-bold">SIZE</h1>
                            <h1 className="font-bold flex items-center cursor-pointer" onClick={showLargeDrawer}>SIZE CHART <ToolOutlined /></h1>
                        </div>
                    </div>
                </div>

            </div>
            <Drawer
                title={`Drawer`}
                placement="right"
                size='large'
                onClose={onClose}
                visible={visible}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </>
    )
}

export default ProductDetail

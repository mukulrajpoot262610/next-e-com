import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { CarOutlined, ArrowRightOutlined, MoneyCollectOutlined } from '@ant-design/icons'
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import { Col, Row, Spin, Form, Input, Steps, Collapse } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import CartCover from '../components/CartCover'
import OrderCover from '../components/OrderCover'

const Payment = () => {

    const dispatch = useDispatch()
    const { Panel } = Collapse;
    const cartItems = useSelector(state => state.cart.cartItems)
    const [delivery, setDelivery] = useState(10)
    const [OPrice, setOPrice] = useState()
    const [NPrice, setNPrice] = useState()
    const [DPrice, setDPrice] = useState()
    const [TPrice, setTPrice] = useState()

    const [country, setCountry] = useState()
    const [region, setRegion] = useState()

    const handleAmount = () => {
        setOPrice(cartItems.reduce((a, b) => a + b.qty * b.price, 0))
        setDPrice(cartItems.reduce((a, b) => a + b.qty * b.salePrice, 0))
        OPrice && DPrice && setNPrice(OPrice - DPrice)
        setTPrice(DPrice + delivery)
    }

    useEffect(() => {
        handleAmount()
    }, [dispatch, cartItems, OPrice])

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <div className="flex flex-col items-center justify-center">
            <Head>
                <title>Payment - theBootStore</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container w-full p-4 px-4 lg:px-10">
                <hr />
            </div>

            <div className="container w-full p-4 px-4 lg:px-10 mt-10">
                <Row className="flex flex-col xl:flex-row">
                    <Col span={24} xl={14} className="p-4">
                        <h1 className="font-bold text-5xl uppercase">PAYMENT METHOD</h1>
                        <p className="my-4">All transactions are safe and secure</p>
                        <Collapse defaultActiveKey={['1']} className="text-base font-bold uppercase">
                            <Panel header="Credit/Debit Card" key="1">
                                <p className="my-4 font-normal capitalize text-sm">You may be directed to your bank's 3D secure process to authenticate your information.</p>
                                <Form
                                    name="basic"
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                    autoComplete="off"
                                    size="large"
                                >

                                    <Form.Item
                                        name="cardNumber"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your Card!',
                                            },
                                        ]}
                                    >
                                        <Input type='text' className="w-full border outline-none p-4" placeholder="Enter Card Number Here..." />
                                    </Form.Item>
                                    <Form.Item
                                        name="nameOnCard"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input Card Number!',
                                            },
                                        ]}
                                    >
                                        <Input type='text' className="w-full border outline-none p-4" placeholder="Enter Name On Card Here..." />
                                    </Form.Item>
                                    <div className="flex items-center w-full">
                                        <Form.Item
                                            className="mr-2 w-full"
                                            name="date"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input Name!',
                                                },
                                            ]}
                                        >
                                            <Input type='text' className="w-full border outline-none p-4" placeholder="Enter Expiry Date Here..." />
                                        </Form.Item>
                                        <Form.Item
                                            name="cvv"
                                            className="ml-2 w-full"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input CVV!',
                                                },
                                            ]}
                                        >
                                            <Input type='text' className="w-full border outline-none p-4" placeholder="Enter CVV Here..." />
                                        </Form.Item>
                                    </div>
                                </Form>
                            </Panel>
                            <Panel header="Cash on Delivery" key="2">
                                <div className="flex justify-between items-center border p-4">
                                    <h1 className="font-bold text-xl uppercase">Cash On Delivery</h1>
                                    <img src="https://www.adidas.co.in/static/checkout/react/b5f86aa/assets/img/icon-adidas-cash-on-delivery.svg" alt="" />
                                </div>
                                <p className="my-4 font-normal text-sm">No online payment needed – pay in cash using the exact change once your items are delivered!

                                    Your bank account details will only be required if you wish to return anything for a refund.</p>
                            </Panel>
                        </Collapse>
                        <hr />
                        <button className="border-2 cursor-pointer bg-black text-white py-4 px-6 my-4 flex items-center uppercase">Place Order &nbsp; <ArrowRightOutlined /></button>
                        <hr />
                    </Col>
                    <Col span={24} xl={2}></Col>
                    <Col span={24} xl={8} className="p-4">
                        <div className="border p-4">
                            <h1 className="font-bold text-xl uppercase mb-4">Order summary</h1>
                            <div className="w-full flex justify-between items-center my-2">
                                <h1>Original Price: </h1>
                                <h1>{Number(OPrice).toFixed(2)}</h1>
                            </div>
                            <div className="w-full flex justify-between items-center my-2">
                                <h1>Discount (On Sale): </h1>
                                <h1>-{Number(NPrice).toFixed(2)}</h1>
                            </div>
                            <div className="w-full flex justify-between items-center my-2">
                                <h1>Net Price: </h1>
                                <h1>{Number(DPrice).toFixed(2)}</h1>
                            </div>
                            <div className="w-full flex justify-between items-center my-2">
                                <h1>Delivery: </h1>
                                <h1>{Number(delivery).toFixed(2)}</h1>
                            </div>
                            <div className="w-full flex justify-between items-center my-2">
                                <h1 className="font-bold text-xl">TOTAL: </h1>
                                <h1 className="font-bold text-xl">{Number(TPrice).toFixed(2)}</h1>
                            </div>
                        </div>
                        <div className="border p-4 mt-4">
                            <h1 className="font-bold text-xl uppercase mb-4">Order details</h1>
                            <div>
                                {
                                    cartItems.map((e, i) => <OrderCover data={e} key={i} />)
                                }
                            </div>
                        </div>
                        <hr />
                        <h1 className="font-bold text-xl mt-4 uppercase">NEED HELP?</h1>
                        <p className="underline mt-3 cursor-pointer">Delivery</p>
                        <p className="underline mt-3 cursor-pointer">Return & Refund</p>
                        <p className="underline mt-3 cursor-pointer">Ordering & Payment</p>
                        <p className="underline mt-3 cursor-pointer">Promotions & Vouchers</p>
                    </Col>
                </Row>

            </div>
        </div>
    )
}

export default Payment

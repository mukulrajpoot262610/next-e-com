import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { CarOutlined, ArrowRightOutlined } from '@ant-design/icons'
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { Col, Row, Form, Input } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import OrderCover from '../components/OrderCover'
import withAuth from '../utils/withAuth';

const Delivery = () => {

    const dispatch = useDispatch()
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
                <title>Delivery - theBootStore</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container w-full p-4 px-4 lg:px-10">
                <hr />
            </div>

            <div className="container w-full p-4 px-4 lg:px-10 mt-10">
                <Row className="flex flex-col xl:flex-row">
                    <Col span={24} xl={14} className="p-4">
                        <h1 className="font-bold text-5xl uppercase">SHIPPING ADDRESS</h1>
                        <Form
                            name="basic"
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                            size="large"
                        >
                            <div className="flex items-center w-full">
                                <Form.Item
                                    className="mr-2 w-full"
                                    name="firstName"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your FirstName!',
                                        },
                                    ]}
                                >
                                    <Input type='text' className="w-full border outline-none mt-4 p-4" placeholder="Enter FirstName Here..." />
                                </Form.Item>
                                <Form.Item
                                    className="ml-2 w-full"
                                    name="lastName"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your LastName!',
                                        },
                                    ]}
                                >
                                    <Input type='text' className="w-full border outline-none mt-4 p-4" placeholder="Enter LastName Here..." />
                                </Form.Item>
                            </div>
                            <Form.Item
                                name="street"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Street Address!',
                                    },
                                ]}
                            >
                                <Input type='text' className="w-full border outline-none mt-4 p-4" placeholder="Enter Street Address Here..." />
                            </Form.Item>
                            <Form.Item
                                name="landmark"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input nearest Landmark!',
                                    },
                                ]}
                            >
                                <Input type='text' className="w-full border outline-none mt-4 p-4" placeholder="Enter Nearest Landmark Here..." />
                            </Form.Item>
                            <div className="flex items-center w-full">
                                <Form.Item
                                    className="mr-2 w-full"
                                    name="country"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please Select your Country!',
                                        },
                                    ]}
                                >
                                    <CountryDropdown
                                        defaultOptionLabel="Select a country, man."
                                        value={country}
                                        className="w-full border outline-none mt-4 p-4"
                                        onChange={(e) => setCountry(e)} />
                                </Form.Item>
                                <Form.Item
                                    className="ml-2 w-full"
                                    name="state"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please Select your State!',
                                        },
                                    ]}
                                >
                                    <RegionDropdown
                                        blankOptionLabel="No country selected, man."
                                        defaultOptionLabel="Now select a region, pal."
                                        country={country}
                                        value={region}
                                        className="w-full border outline-none mt-4 p-4"
                                        onChange={(e) => setRegion(e)} />
                                </Form.Item>
                            </div>
                            <div className="flex items-center w-full">
                                <Form.Item
                                    className="mr-2 w-full"
                                    name="city"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your City or town!',
                                        },
                                    ]}
                                >
                                    <Input type='text' className="w-full border outline-none mt-4 p-4" placeholder="Enter City Here..." />
                                </Form.Item>
                                <Form.Item
                                    className="ml-2 w-full"
                                    name="pincode"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your pincode!',
                                        },
                                    ]}
                                >
                                    <Input type='number' className="w-full border outline-none mt-4 p-4" placeholder="Enter Pincode Here..." maxLength={6} />
                                </Form.Item>
                            </div>
                            <button type="submit" className="border-2 cursor-pointer bg-black text-white py-4 px-6 my-4 flex items-center uppercase">Review & Pay &nbsp; <ArrowRightOutlined /></button>
                        </Form>
                        <hr />
                        <h1 className="font-bold text-2xl uppercase my-4">ARRIVING</h1>
                        <div className="border p-4 mb-8">
                            <div className="flex justify-between items-center">
                                <h1 className="font-bold text-xl uppercase mb-2">Standard Delivery</h1>
                                <h1 className="font-bold text-xl uppercase mb-2">Free</h1>
                            </div>
                            <p className="cursor-pointer flex items-center"><CarOutlined /> &nbsp;within 3-9 business days</p>
                        </div>
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

export default withAuth(Delivery)

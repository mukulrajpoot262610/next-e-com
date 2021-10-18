import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { CarOutlined, ArrowRightOutlined } from '@ant-design/icons'
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import { Col, Row, Spin, Form, Input, Steps, Popover } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import CartCover from '../components/CartCover'
import OrderCover from '../components/OrderCover'

const OrderComplete = () => {

    const dispatch = useDispatch()
    const { Step } = Steps;
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
                <title>Order - theBootStore</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container w-full p-4 px-4 lg:px-10">
                <hr />
            </div>

            <div className="container w-full p-4 px-4 lg:px-10 mt-10">
                <Row className="flex flex-col xl:flex-row">
                    <Col span={24} xl={14} className="p-4">
                        <h1 className="font-bold text-5xl uppercase">YOUR ORDER WAS PLACED SUCCESSFULLY</h1>
                        <p className="my-4">Order Number: AIN00108556</p>
                        <p className="my-4">Hi Mukul, thanks for shopping with adidas! We'll send a confirmation email to <span className="font-bold">mukul@gmail.com</span> shortly</p>
                        <hr />
                        <div className="border p-4 mb-4">
                            <div className="flex justify-between items-center">
                                <h1 className="font-bold text-xl uppercase mb-2">Standard Delivery</h1>
                                <h1 className="font-bold text-xl uppercase mb-2">Free</h1>
                            </div>
                            <p className="cursor-pointer flex items-center"><CarOutlined /> &nbsp;within 3-9 business days</p>
                        </div>
                        <p className="my-4">Track and trace details will be sent to your email upon shipment.</p>
                        <hr />
                        <h1 className="mt-4 text-base font-bold">DELIVERY ADDRESS</h1>
                        <p className="my-1">Track</p>
                        <p className="my-1">Track</p>
                        <p className="my-1">Track</p>

                        <h1 className="mt-4 text-base font-bold">BILLING DETAILS</h1>
                        <p className="my-1">Track</p>
                        <p className="my-1">Track</p>
                        <p className="my-1">Track</p>

                        <h1 className="mt-4 text-base font-bold">PAYMENT OPTION</h1>
                        <p className="mt-1 mb-8">Cash On Delivey</p>

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

export default OrderComplete

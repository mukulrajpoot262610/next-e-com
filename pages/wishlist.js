import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { ArrowRightOutlined } from '@ant-design/icons'
import { Col, Row, Spin } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import CartCover from '../components/CartCover'

const Wishlist = () => {

    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cart.cartItems)
    const [delivery, setDelivery] = useState(10)
    const [OPrice, setOPrice] = useState()
    const [NPrice, setNPrice] = useState()
    const [DPrice, setDPrice] = useState()
    const [TPrice, setTPrice] = useState()

    const handleAmount = () => {
        setOPrice(cartItems.reduce((a, b) => a + b.qty * b.price, 0))
        setDPrice(cartItems.reduce((a, b) => a + b.qty * b.salePrice, 0))
        OPrice && DPrice && setNPrice(OPrice - DPrice)
        setTPrice(DPrice + delivery)
    }

    useEffect(() => {
        handleAmount()
    }, [dispatch, cartItems, OPrice])

    return (
        <div className="flex flex-col items-center justify-center">
            <Head>
                <title>WishList - theBootStore</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="w-full p-4 px-4 lg:px-10">
                <img src="" alt="" />
            </div>

            <div className="container w-full p-4 px-4 lg:px-10 mt-10">
                <Row className="flex flex-col xl:flex-row">
                    <Col span={24} xl={16} className="p-4">
                        {
                            cartItems.length === 0 ? (
                                <>
                                    <h1 className="font-bold text-5xl uppercase">YOUR BAG IS EMPTY</h1>
                                    <p className="my-4">Once you add something to your bag - it will appear here. Ready to get started?</p>
                                    <Link href="/">
                                        <button className="border-2 cursor-pointer bg-black text-white py-4 px-6 mb-4 flex items-center">Shop Now &nbsp; <ArrowRightOutlined /></button>
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <h1 className="font-bold text-5xl uppercase">YOUR BAG</h1>
                                    <p className="my-4 text-xl font-medium">TOTAL ({cartItems.length} items) ${Number(TPrice).toFixed(2)}</p>
                                    <div className="pr-4">
                                        {
                                            cartItems.map((e, index) => <CartCover key={index} data={e} setDPrice={setDPrice} setOPrice={setOPrice} />)
                                        }
                                    </div>
                                </>
                            )
                        }
                    </Col>
                    <Col span={24} xl={8} className="p-4">
                        {
                            cartItems.length === 0 ? (
                                <>
                                    <h1 className="font-bold text-xl uppercase">NEED HELP?</h1>
                                    <p className="underline mt-3 cursor-pointer">Delivery</p>
                                    <p className="underline mt-3 cursor-pointer">Return & Refund</p>
                                    <p className="underline mt-3 cursor-pointer">Ordering & Payment</p>
                                    <p className="underline mt-3 cursor-pointer">Promotions & Vouchers</p>
                                </>
                            ) : (
                                <>
                                    {
                                        (OPrice && DPrice) ? (
                                            <>
                                                <div className="h-72 border p-4">
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
                                            </>
                                        ) : <Spin />
                                    }
                                    <button className="border-2 cursor-pointer bg-black text-white w-full py-4 px-6 my-4 flex items-center uppercase">CheckOut &nbsp; <ArrowRightOutlined /></button>
                                    <hr />
                                    <input type='text' className="w-full border outline-none my-4 p-4" placeholder="Enter Code Here..." />
                                    <button className="border-2 cursor-pointer bg-black text-white w-full py-4 px-6 mb-4 flex items-center uppercase">Apply &nbsp; <ArrowRightOutlined /></button>
                                    <hr />
                                    <h1 className="font-bold text-xl mt-4 uppercase">NEED HELP?</h1>
                                    <p className="underline mt-3 cursor-pointer">Delivery</p>
                                    <p className="underline mt-3 cursor-pointer">Return & Refund</p>
                                    <p className="underline mt-3 cursor-pointer">Ordering & Payment</p>
                                    <p className="underline mt-3 cursor-pointer">Promotions & Vouchers</p>
                                </>
                            )
                        }

                    </Col>
                </Row>

            </div>
        </div>
    )
}

export default Wishlist

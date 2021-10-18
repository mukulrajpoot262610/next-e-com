import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { ArrowRightOutlined } from '@ant-design/icons'
import { Col, Row, Collapse } from 'antd'
import { useSelector, useDispatch } from 'react-redux'

const Account = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <Head>
                <title>Account - theBootStore</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container w-full p-4 px-4 lg:px-10">
                <hr />
            </div>

            <div className="container w-full p-4 px-4 lg:px-10 mt-10">
                <Row className="flex flex-col xl:flex-row">
                    <Col span={24} xl={14} className="p-4">
                        <h1 className="font-bold text-5xl uppercase">MY DETAILS</h1>
                        <p className="mb-4">Feel free to edit any of your details below so your account is up to date.</p>
                        <h1 className="font-bold text-3xl mt-4 uppercase">DEtails</h1>
                        <p className="my-1">Mukul Rajpoot</p>
                        <p className="my-1">1997-01-01</p>
                        <p className="underline mt-3 mb-8 cursor-pointer">Edit</p>

                        <h1 className="font-bold text-3xl mt-4 uppercase">Login DEtails</h1>
                        <h1 className="font-bold text-xl mt-4 uppercase">Email</h1>
                        <p className="my-1">mukul@gmail.com</p>
                        <h1 className="font-bold text-xl mt-4 uppercase">Password</h1>
                        <p className="my-1">****</p>
                        <p className="underline mt-3 mb-8 cursor-pointer">Edit</p>

                        <h1 className="font-bold text-3xl mt-4 uppercase">MANAGE ACCOUNT</h1>
                        <button type="submit" className="border-2 cursor-pointer bg-black text-white py-4 px-6 my-4 flex items-center uppercase">Delete Account &nbsp; <ArrowRightOutlined /></button>
                        <p className="my-4">By deleting your account you will no longer have access to the information stored in your theBootStoreoot account such as order history or your wishlist.</p>
                    </Col>
                    <Col span={24} xl={2}></Col>
                    <Col span={24} xl={8} className="p-4">
                        <hr />
                        <h1 className="font-bold text-xl mt-4 uppercase">Links</h1>
                        <Link href="/user/account">
                            <p className="mt-3 underline cursor-pointer">My Account</p>
                        </Link>
                        <Link href="/user/personal">
                            <p className="font-bold mt-3 cursor-pointer">Personal Information</p>
                        </Link>
                        <Link href="/user/address">
                            <p className="underline mt-3 cursor-pointer">Address Book</p>
                        </Link>
                        <Link href="/user/order">
                            <p className="underline mt-3 cursor-pointer">Order History</p>
                        </Link>
                        <Link href="/wishlist">
                            <p className="underline mt-3 cursor-pointer">Wish List</p>
                        </Link>
                        <hr className="my-4" />
                        <h1 className="font-bold text-xl mt-4 uppercase">Need Help?</h1>
                        <p className="underline mt-3 cursor-pointer">Products</p>
                        <p className="underline mt-3 cursor-pointer">Delivery</p>
                        <p className="underline mt-3 cursor-pointer">Return & Refund</p>
                        <p className="underline mt-3 cursor-pointer">Ordering & Payment</p>
                        <p className="underline mt-3 cursor-pointer">Promotions & Vouchers</p>
                        <p className="underline mt-3 cursor-pointer">Company Information</p>
                    </Col>
                </Row>

            </div>
        </div>
    )
}

export default Account


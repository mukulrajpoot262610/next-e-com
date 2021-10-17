import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Col, Row, Spin, Form, Input, Button, Checkbox } from 'antd'
import { ArrowRightOutlined, FacebookOutlined, GoogleOutlined, CheckOutlined } from '@ant-design/icons'

const Register = () => {

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <Head>
                <title>Register - theBootStore</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="w-full p-4 px-4 lg:px-10">
                <img src="" alt="" />
            </div>

            <div className="container w-full p-4 px-4 lg:px-10 mt-10">
                <Row className="flex flex-col xl:flex-row">
                    <Col span={24} xl={10} className="p-4">
                        <h1 className="font-bold text-5xl uppercase">REGISTER</h1>
                        <p className="my-4">Sign up with</p>
                        <div className="flex justify-between mb-4 border items-center p-4">
                            <h1 className="font-bold uppercase text-xl">Facebook</h1>
                            <FacebookOutlined className="text-2xl" />
                        </div>
                        <div className="flex justify-between mb-4 border items-center p-4">
                            <h1 className="font-bold uppercase text-xl">Google</h1>
                            <GoogleOutlined className="text-2xl" />
                        </div>
                        <hr />
                        <h1 className="font-bold text-xl uppercase text-center my-4">OR</h1>
                        <hr />
                        <h1 className="font-bold text-xl uppercase my-4">Your Name</h1>
                        <Form
                            name="basic"
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                            size="large"
                        >
                            <Form.Item
                                name="name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Name!',
                                    },
                                ]}
                            >
                                <Input type='text' className="w-full border outline-none p-4" placeholder="Enter Name Here..." />
                            </Form.Item>
                            <h1 className="font-bold text-xl uppercase my-4">Login Details</h1>
                            <Form.Item
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Email!',
                                    },
                                ]}
                            >
                                <Input type='text' className="w-full border outline-none p-4" placeholder="Enter Email Here..." />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Password!',
                                    },
                                ]}
                            >
                                <Input.Password className="w-full border outline-none p-4" placeholder="Enter Password Here..." />
                            </Form.Item>
                            <button type="submit" className="border-2 cursor-pointer bg-black text-white py-4 px-6 mb-4 flex items-center uppercase font-bold mt-4">Regsiter &nbsp; <ArrowRightOutlined /></button>
                        </Form>
                    </Col>
                    <Col span={24} xl={4}></Col>
                    <Col span={24} xl={10} className="p-4">
                        <h1 className="font-bold text-5xl uppercase">CREATE AN ACCOUNT</h1>
                        <h1 className="font-bold text-xl mt-4 uppercase">CREATE AN ACCOUNT:</h1>
                        <p className="mt-3 cursor-pointer flex items-center"><CheckOutlined /> &nbsp; &nbsp;Simple overview of your personal information</p>
                        <p className="mt-3 cursor-pointer flex items-center"><CheckOutlined /> &nbsp; &nbsp;Faster checkout</p>
                        <p className="mt-3 cursor-pointer flex items-center"><CheckOutlined /> &nbsp; &nbsp;A single global login to interact with adidas products and services</p>
                        <p className="mt-3 cursor-pointer flex items-center"><CheckOutlined /> &nbsp; &nbsp;Exclusive offers and promotions</p>
                        <p className="mt-3 cursor-pointer flex items-center"><CheckOutlined /> &nbsp; &nbsp;Latest products arrivals</p>
                        <p className="mt-3 cursor-pointer flex items-center"><CheckOutlined /> &nbsp; &nbsp;New season and limited collections</p>
                        <p className="mt-3 cursor-pointer flex items-center"><CheckOutlined /> &nbsp; &nbsp;Upcoming events</p>
                    </Col>
                </Row>
            </div>

        </div>
    )
}

export default Register

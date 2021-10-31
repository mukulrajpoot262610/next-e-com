import React, { useState } from 'react'
import Head from 'next/head'
import { useSelector } from 'react-redux'
import { Row, Col, Rate, Form, Input } from 'antd'

const SubmitReview = () => {

    const [rating, setRating] = useState()

    const productDetail = useSelector(state => state.productDetail)
    const { product, loading, error } = productDetail

    console.log(rating)

    return (
        <div className="flex flex-col items-center justify-center">
            <Head>
                <title>Submit Review - theBootStore</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container w-full p-4 my-6 px-4 lg:px-10">
                <h1 className="font-bold text-3xl my-6 uppercase">Write your Review</h1>
                <div className="bg-gray-100 h-250 w-full">
                    <Row>
                        <Col span={16} className="flex items-center justify-start px-10">
                            <h1 className="font-semibold text-xl uppercase">{product?.name}</h1>
                        </Col>
                        <Col span={8}>
                            <img src={product?.image} alt="" className="h-250" />
                        </Col>
                    </Row>
                </div>

                <div className="my-16">
                    <Row className="flex justify-between items-start w-full">
                        <div>
                            <h1 className="uppercase text-xl">Your Overall Rating</h1>
                            <h1 className="text-2xl my-4"><Rate defaultValue={0} className="text-black text-3xl" onChange={(values) => setRating(values)} />
                            </h1>
                        </div>
                        <div>
                            <h1 className="uppercase text-xl">WOULD YOU RECOMMEND THIS PRODUCT?</h1>
                            <div className="flex items-center my-6">
                                <input type='radio' value="yes" name="recommend" className="" />
                                <label className="text-xl mr-8">Yes</label>
                                <input type='radio' value="no" name="recommend" />
                                <label className="text-xl ">No</label>
                            </div>
                        </div>
                    </Row>

                    <div className="mt-16">
                        <h1 className="uppercase text-xl">YOUR REVIEW</h1>
                        <Form
                            name="basic"
                            // onFinish={onFinish}
                            // onFinishFailed={onFinishFailed}
                            autoComplete="off"
                            size="large"
                        >
                            <Form.Item
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Email!',
                                    },
                                ]}
                            >
                                <Input type='text' className="w-full border outline-none mt-4 p-4" placeholder="Enter Email Here..." />
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubmitReview

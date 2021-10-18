import React from 'react'
import Head from 'next/head'
import { Col, Row, Spin, Form, Input, message } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'
import firebase from '../config/firebase'
import { useRouter } from 'next/router'

const ResetPassword = () => {

    const router = useRouter()

    const onFinish = async (values) => {
        if (values.password !== values.cpassword) {
            return message.error('Password should Match!')
        }
        console.log('Success:', values);
        await firebase.auth().confirmPasswordReset(router.query.oobCode, values.password)
            .then(res => {
                message.success('Password has been changed, you acn login now!')
                router.push('/login')
            })
            .catch(err => message.error(err.message))
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <Head>
                <title>Password Reset - theBootStore</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="w-full p-4 px-4 lg:px-10">
                <img src="" alt="" />
            </div>

            <div className="container w-full p-4 px-4 lg:px-10 mt-10">
                <Row className="flex flex-col xl:flex-row">
                    <Col span={24} xl={14} className="p-4">
                        <h1 className="font-bold text-5xl uppercase">
                            CREATE YOUR NEW PASSWORD</h1>
                        <p className="my-4">Set a new password for theBootStore. After creating the password you’ll stay logged in.</p>
                        <Form
                            name="basic"
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                            size="large"
                        >
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Password!',
                                    },
                                ]}
                            >
                                <Input.Password type='text' className="w-full border outline-none mt-4 p-4" placeholder="Enter Password Here..." />
                            </Form.Item>
                            <Form.Item
                                name="cpassword"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Password!',
                                    },
                                ]}
                            >
                                <Input.Password type='text' className="w-full border outline-none mt-4 p-4" placeholder="Confirm Password Here..." />
                            </Form.Item>
                            <button type="submit" className="border-2 cursor-pointer bg-black text-white py-4 px-6 mb-4 flex items-center uppercase font-bold mt-4">Confirm &nbsp; <ArrowRightOutlined /></button>
                        </Form>
                    </Col>
                    <Col span={24} xl={10} className="p-4">

                    </Col>
                </Row>
            </div>

        </div>
    )
}

export default ResetPassword

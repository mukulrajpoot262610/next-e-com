import React, { useEffect, useState } from 'react'
import { Row, Col, Drawer, Progress, Carousel, Rate, Modal } from 'antd';
import { ToolOutlined, StarFilled, CarOutlined, ArrowRightOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router';

import ReviewCover from './ReviewCover';
// import { addToCart } from '../store/actions/cartAction'
import CartModalCover from './CartModalCover';

const ProductDetail = ({ data }) => {
    const router = useRouter()
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [visible, setVisible] = useState(false);
    const [setShoeSize] = useState()
    const [setQty] = useState(1)
    const [color, setColor] = useState()

    const cart = useSelector(state => state.cart.cartItems)
    const wish = useSelector(state => state.wish.wishItems)
    console.log(wish.filter(x => x.id === _id).length > 0)
    // const dispatch = useDispatch()

    const { _id, name, description, rating, price, salePrice, image, image1, image2, image3, numOfReviews, brand, category } = data

    const size = [7, 8, 9, 10, 11, 12]

    const showLargeDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    // const showModal = () => {
    //     setIsModalVisible(true);
    // };
    // const handleAddToCart = (e) => {
    //     e.preventDefault()
    //     if (shoeSize) {
    //         message.success('Successfully Added to Cart')
    //         dispatch(addToCart(_id, Number(qty), shoeSize))
    //         showModal()
    //     } else {
    //         message.error('Please Select Size!')
    //     }
    // }
    const handleOk = () => {
        setIsModalVisible(false);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const handleReview = () => {
        router.push(`/product/submit-review/${_id}`)
    }

    useEffect(() => {
        if (rating > 3.5) {
            setColor('bg-green-400')
        } else if (rating > 2.5) {
            setColor('bg-yellow-400')
        } else {
            setColor('bg-red-400')
        }
    }, [rating])


    return (
        <>
            <div className="w-full flex flex-col items-center">

                <Row className="w-full min-h-screen">
                    <Col span={17} className="w-full">
                        <Carousel autoplay className="w-full my-4 h-750 border overflow-hidden" >
                            <img src={image} className="h-750 object-cover " />
                            <img src={image1} className="h-750 object-cover " />
                            <img src={image2} className="h-750 object-cover " />
                            <img src={image3} className="h-750 object-cover " />
                        </Carousel>
                        <div className="">
                            <hr className="text-gray-300" />

                            <div className="px-20 my-8">
                                <h1 className="font-bold text-2xl uppercase my-4">Description</h1>
                                <Row className="my-8">
                                    <Col span={12} className="p-4">
                                        <h1 className="text-4xl uppercase italic font-bold my-6">{name}</h1>
                                        <p>{description}</p>
                                    </Col>
                                    <Col span={12} className="p-4 flex items-center justify-center">
                                        <img src={image} alt="" className="h-250" />
                                        <img src={image2} alt="" className="h-250" />
                                    </Col>
                                </Row>
                                <h1 className="font-bold text-2xl uppercase my-4">RATINGS & REVIEWS</h1>
                                <Row className="my-8">
                                    <Col span={6} className="p-4">
                                        <div className={`p-4 ${color}`}>
                                            <div className="flex items-center justify-between">
                                                <h1 className="font-bold text-6xl">{rating}</h1>
                                                <div>
                                                    <Rate disabled allowHalf defaultValue={rating} className="text-black" />
                                                    <h1><span className="font-bold">{numOfReviews}</span> Reviews</h1>
                                                </div>
                                            </div>
                                        </div>
                                        <h1 className="font-bold text-xl uppercase my-4">RATINGS BREAKDOWN</h1>
                                        <div className="flex items-center">
                                            <h1 className="flex items-center">5 <StarFilled className="text-black ml-1" /></h1>
                                            <Progress percent={90} className="mx-2" strokeColor="black" size="small" showInfo={false} />
                                            <h1>283</h1>
                                        </div>
                                        <div className="flex items-center">
                                            <h1 className="flex items-center">4 <StarFilled className="text-black ml-1" /></h1>
                                            <Progress percent={90} className="mx-2" strokeColor="black" size="small" showInfo={false} />
                                            <h1>283</h1>
                                        </div>
                                        <div className="flex items-center">
                                            <h1 className="flex items-center">3 <StarFilled className="text-black ml-1" /></h1>
                                            <Progress percent={90} className="mx-2" strokeColor="black" size="small" showInfo={false} />
                                            <h1>283</h1>
                                        </div>
                                        <div className="flex items-center">
                                            <h1 className="flex items-center">2 <StarFilled className="text-black ml-1" /></h1>
                                            <Progress percent={90} className="mx-2" strokeColor="black" size="small" showInfo={false} />
                                            <h1>283</h1>
                                        </div>
                                        <div className="flex items-center">
                                            <h1 className="flex items-center">1 <StarFilled className="text-black ml-1" /></h1>
                                            <Progress percent={90} className="mx-2" strokeColor="black" size="small" showInfo={false} />
                                            <h1>283</h1>
                                        </div>
                                    </Col>
                                    <Col span={18} className="px-10">
                                        <ReviewCover />
                                        <ReviewCover />
                                        <div className="flex">
                                            <button type="submit" className="my-2 border-2 cursor-pointer bg-white text-black py-4 px-6 w-full flex items-center uppercase mr-2">Load More &nbsp; <ArrowRightOutlined /></button>
                                            <button onClick={handleReview} className="my-2 border-2 cursor-pointer bg-black text-white py-4 px-6 w-full flex items-center uppercase ml-2">WRITE a Review &nbsp; <ArrowRightOutlined /></button>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                    <Col span={7} className=" border-l fixed right-0 w-full p-4 lg:px-10">
                        <div className="flex items-center justify-between">
                            <h1 className="font-extrabold uppercase text-xl">{brand}</h1>
                            <div className='flex items-center justify-center'>
                                <Rate disabled allowHalf defaultValue={rating} className="text-black text-xs" />
                                <h1 className="font-bold text-xs ml-3 underline">{numOfReviews}</h1>
                            </div>
                        </div>
                        <h1 className="text-4xl uppercase italic font-bold mt-6">{name}</h1>
                        <h1 className="text-sm mt-2">{category}</h1>
                        <div className="mt-2 mb-8">
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
                            <div className="flex justify-between flex-wrap mt-4">
                                {
                                    size.map((e, index) => <div className="border-2 cursor-pointer hover:border-black active:text-white py-4 px-6 m-1" key={index} onClick={() => setShoeSize(e)} >{e}</div>)
                                }
                            </div>
                            <h1 className="font-bold my-4 uppercase">Quantity</h1>
                            <div className="flex items-start justify-between my-2">
                                <select defaultValue="1" size="large" className="border-2 bg-transparent w-full cursor-pointer active:text-white py-4 px-6 " onChange={(e) => setQty(e.target.value)}>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                    <option value={6}>6</option>
                                </select>
                            </div>
                            <button type="submit" className="my-4 border-2 cursor-pointer bg-black text-white py-4 px-6 w-full flex items-center uppercase">Add to Bag &nbsp; <ArrowRightOutlined /></button>

                            <hr className="text-gray-300" />
                            <h1 className="font-light my-8 text-red-700 text-sm flex items-center"><CarOutlined /> &nbsp; This item is Eligible for free delivery</h1>
                            <hr className="text-gray-300" />
                        </div>
                    </Col>
                </Row>

                {/* <div className="container xl:hidden w-full">
                    <h1 className="font-bold text-4xl my-4">{name}</h1>
                    <p className="">{description}</p>
                    <div className='flex items-center'>
                        <h1 className="font-bold text-base mr-3">({rating})</h1>
                        <Rate disabled allowHalf defaultValue={rating} className="my-2 text-black" />
                    </div>
                    <div className="mt-2 mb-8">
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
                        <div className="flex flex-wrap my-4">
                            {
                                size.map((e, index) => <div className="border-2 cursor-pointer hover:border-black active:text-white py-4 px-6 m-2" key={index} onClick={() => setShoeSize(e)} >{e}</div>)
                            }
                        </div>

                        <div className="flex items-start justify-between my-8">
                            <select defaultValue="1" size="large" className="border-2 bg-transparent w-24 cursor-pointer active:text-white py-4 px-6 m-2" onChange={(e) => setQty(e.target.value)}>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                                <option value={6}>6</option>
                            </select>
                            <button className="border-2 cursor-pointer hover:border-black active:text-white py-4 px-6 m-2" onClick={handleAddToWishlist}>
                                {
                                    wish.filter(x => x.id === _id).length > 0 ? <HeartFilled /> : <HeartOutlined />
                                }
                            </button>
                        </div>
                        <button className="border-2 w-full cursor-pointer bg-black text-white py-4 px-6 mb-4" onClick={handleAddToCart}>Add To Cart</button>

                        <hr className="text-gray-300" />
                        <h1 className="font-light my-8 text-red-700 text-sm flex items-center"><CarOutlined /> &nbsp; This item is Eligible for free delivery</h1>
                        <hr className="text-gray-300" />
                        <div className="my-8">
                            <h1 className="font-bold text-xl uppercase">Free Shipping and Returns</h1>
                            <p className="my-2">Free standard delivery on all orders and free return within 30 days of your order delivery date. Visit our Return Policy for more information</p>
                            <p className="my-2">For any queries, please contact Customer Service at 8888888888 or via <span className="font-bold">care@thebootstore.com</span></p>
                        </div>
                        <div className="my-8">
                            <h1 className="font-bold text-xl uppercase">Reviews ({numOfReviews})</h1>
                            <ReviewCover />
                        </div>
                    </div>
                </div> */}
            </div>

            <Modal title={`${cart.length} item(s) added to your cart!`} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                {
                    cart.map((e, index) => <CartModalCover key={index} data={e} />)
                }
            </Modal>
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

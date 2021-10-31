// import React, { useState } from 'react'
// import { Row, Col, Drawer, Carousel, Select, Rate, message, Modal } from 'antd';
// import { ToolOutlined, HeartOutlined, HeartFilled, CarOutlined } from '@ant-design/icons'
// import { useDispatch, useSelector } from 'react-redux'

// import ReviewCover from './ReviewCover';
// import { addToCart } from '../store/actions/cartAction'
// import { addToWish } from '../store/actions/wishAction'
// import CartModalCover from './CartModalCover';

// const ProductDetail = ({ data }) => {
//     const [isModalVisible, setIsModalVisible] = useState(false);
//     const [visible, setVisible] = useState(false);
//     const [shoeSize, setShoeSize] = useState()
//     const [qty, setQty] = useState(1)

//     const cart = useSelector(state => state.cart.cartItems)
//     const wish = useSelector(state => state.wish.wishItems)
//     console.log(wish.filter(x => x.id === _id).length > 0)
//     const dispatch = useDispatch()

//     const { _id, name, description, rating, price, salePrice, image, image1, image2, image3, numOfReviews, reviews } = data

//     const size = [7, 8, 9, 10, 11]

//     const showLargeDrawer = () => {
//         setVisible(true);
//     };
//     const onClose = () => {
//         setVisible(false);
//     };
//     const showModal = () => {
//         setIsModalVisible(true);
//     };
//     const handleAddToCart = (e) => {
//         e.preventDefault()
//         if (shoeSize) {
//             message.success('Successfully Added to Cart')
//             dispatch(addToCart(_id, Number(qty), shoeSize))
//             showModal()
//         } else {
//             message.error('Please Select Size!')
//         }
//     }
//     const handleOk = () => {
//         setIsModalVisible(false);
//     };
//     const handleCancel = () => {
//         setIsModalVisible(false);
//     };
//     const handleAddToWishlist = () => {
//         if (shoeSize) {
//             message.success('Successfully Added to Wishlist')
//             dispatch(addToWish(_id, Number(qty), shoeSize))
//         } else {
//             message.error('Please Select Size!')
//         }
//     }

//     return (
//         <>
//             <div className="w-full flex flex-col items-center justify-center">
//                 <Row className="container hidden xl:flex">
//                     <Col span={16} className="p-4">
//                         <img src={image} className="object-cover h-900 w-full " />
//                         <Row className="">
//                             <Col span={12}>
//                                 <img src={image1} className="object-cover h-500 w-full " />
//                             </Col>
//                             <Col span={12}>
//                                 <img src={image2} className="object-cover h-500 w-full " />
//                             </Col>
//                         </Row>
//                         <img src={image3} className="object-cover h-900 w-full " />
//                     </Col>

//                     <Col className="p-4" span={8}>
//                         <h1 className="font-bold text-4xl mb-4">{name}</h1>
//                         <p className="">{description}</p>
//                         <div className='flex items-center'>
//                             <h1 className="font-bold text-base mr-3">({rating})</h1>
//                             <Rate disabled allowHalf defaultValue={rating} className="my-2 text-black" />
//                         </div>
//                         <div className="mt-2 mb-8">
//                             <h1 className="my-1 font-bold text-2xl text-red-700">${price}</h1>
//                             {
//                                 salePrice === price ? "" : <h1 className="font-light line-through text-sm">${salePrice}</h1>
//                             }
//                             <h1 className="font-light text-sm">(Prices include GST)</h1>
//                         </div>
//                         <hr className="text-gray-300" />
//                         <h1 className="font-light my-8 text-red-700 text-sm">Use code SAVE15 to get extra 15% off</h1>
//                         <hr className="text-gray-300" />
//                         <div className="my-8">
//                             <div className="w-full flex justify-between">
//                                 <h1 className="font-bold">SIZE</h1>
//                                 <h1 className="font-bold flex items-center cursor-pointer" onClick={showLargeDrawer}>SIZE CHART <ToolOutlined /></h1>
//                             </div>
//                             <div className="flex my-4">
//                                 {
//                                     size.map((e, index) => <div className="border-2 cursor-pointer hover:border-black active:text-white py-4 px-6 m-2" key={index} onClick={() => setShoeSize(e)} >{e}</div>)
//                                 }
//                             </div>

//                             <div className="flex items-center justify-between my-8">
//                                 <select defaultValue="1" size="large" className="border-2 bg-transparent w-24 cursor-pointer active:text-white py-4 px-6 m-2" onChange={(e) => setQty(e.target.value)}>
//                                     <option value={1}>1</option>
//                                     <option value={2}>2</option>
//                                     <option value={3}>3</option>
//                                     <option value={4}>4</option>
//                                     <option value={5}>5</option>
//                                     <option value={6}>6</option>
//                                 </select>
//                                 <button className="border-2 w-full cursor-pointer bg-black text-white py-4 px-6 m-2" onClick={handleAddToCart}>Add To Cart</button>
//                                 <button className="border-2 cursor-pointer hover:border-black active:text-white py-4 px-6 m-2" onClick={handleAddToWishlist}>
//                                     {
//                                         wish.filter(x => x.id === _id).length > 0 ? <HeartFilled /> : <HeartOutlined />
//                                     }
//                                 </button>
//                             </div>

//                             <hr className="text-gray-300" />
//                             <h1 className="font-light my-8 text-red-700 text-sm flex items-center"><CarOutlined /> &nbsp; This item is Eligible for free delivery</h1>
//                             <hr className="text-gray-300" />
//                             <div className="my-8">
//                                 <h1 className="font-bold text-xl uppercase">Free Shipping and Returns</h1>
//                                 <p className="my-2">Free standard delivery on all orders and free return within 30 days of your order delivery date. Visit our Return Policy for more information</p>
//                                 <p className="my-2">For any queries, please contact Customer Service at 8888888888 or via <span className="font-bold">care@thebootstore.com</span></p>
//                             </div>
//                             <div className="my-8">
//                                 <h1 className="font-bold text-xl uppercase">Reviews ({numOfReviews})</h1>
//                                 <ReviewCover />
//                             </div>
//                         </div>
//                     </Col>
//                 </Row>

//                 <div className="xl:hidden w-full max-h-900">
//                     <Carousel autoplay className=" w-full">
//                         <img src={image} className="max-h-900 object-cover " />
//                         <img src={image1} className="max-h-900 object-cover " />
//                         <img src={image2} className="max-h-900 object-cover " />
//                         <img src={image3} className="max-h-900 object-cover " />
//                     </Carousel>
//                 </div>

//                 <div className="container xl:hidden w-full">
//                     <h1 className="font-bold text-4xl my-4">{name}</h1>
//                     <p className="">{description}</p>
//                     <div className='flex items-center'>
//                         <h1 className="font-bold text-base mr-3">({rating})</h1>
//                         <Rate disabled allowHalf defaultValue={rating} className="my-2 text-black" />
//                     </div>
//                     <div className="mt-2 mb-8">
//                         <h1 className="my-1 font-bold text-2xl text-red-700">${price}</h1>
//                         {
//                             salePrice === price ? "" : <h1 className="font-light line-through text-sm">${salePrice}</h1>
//                         }
//                         <h1 className="font-light text-sm">(Prices include GST)</h1>
//                     </div>
//                     <hr className="text-gray-300" />
//                     <h1 className="font-light my-8 text-red-700 text-sm">Use code SAVE15 to get extra 15% off</h1>
//                     <hr className="text-gray-300" />
//                     <div className="my-8">
//                         <div className="w-full flex justify-between">
//                             <h1 className="font-bold">SIZE</h1>
//                             <h1 className="font-bold flex items-center cursor-pointer" onClick={showLargeDrawer}>SIZE CHART <ToolOutlined /></h1>
//                         </div>
//                         <div className="flex flex-wrap my-4">
//                             {
//                                 size.map((e, index) => <div className="border-2 cursor-pointer hover:border-black active:text-white py-4 px-6 m-2" key={index} onClick={() => setShoeSize(e)} >{e}</div>)
//                             }
//                         </div>

//                         <div className="flex items-start justify-between my-8">
//                             <select defaultValue="1" size="large" className="border-2 bg-transparent w-24 cursor-pointer active:text-white py-4 px-6 m-2" onChange={(e) => setQty(e.target.value)}>
//                                 <option value={1}>1</option>
//                                 <option value={2}>2</option>
//                                 <option value={3}>3</option>
//                                 <option value={4}>4</option>
//                                 <option value={5}>5</option>
//                                 <option value={6}>6</option>
//                             </select>
//                             <button className="border-2 cursor-pointer hover:border-black active:text-white py-4 px-6 m-2" onClick={handleAddToWishlist}>
//                                 {
//                                     wish.filter(x => x.id === _id).length > 0 ? <HeartFilled /> : <HeartOutlined />
//                                 }
//                             </button>
//                         </div>
//                         <button className="border-2 w-full cursor-pointer bg-black text-white py-4 px-6 mb-4" onClick={handleAddToCart}>Add To Cart</button>

//                         <hr className="text-gray-300" />
//                         <h1 className="font-light my-8 text-red-700 text-sm flex items-center"><CarOutlined /> &nbsp; This item is Eligible for free delivery</h1>
//                         <hr className="text-gray-300" />
//                         <div className="my-8">
//                             <h1 className="font-bold text-xl uppercase">Free Shipping and Returns</h1>
//                             <p className="my-2">Free standard delivery on all orders and free return within 30 days of your order delivery date. Visit our Return Policy for more information</p>
//                             <p className="my-2">For any queries, please contact Customer Service at 8888888888 or via <span className="font-bold">care@thebootstore.com</span></p>
//                         </div>
//                         <div className="my-8">
//                             <h1 className="font-bold text-xl uppercase">Reviews ({numOfReviews})</h1>
//                             <ReviewCover />
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <Modal title={`${cart.length} item(s) added to your cart!`} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
//                 {
//                     cart.map((e, index) => <CartModalCover key={index} data={e} />)
//                 }
//             </Modal>
//             <Drawer
//                 title={`Drawer`}
//                 placement="right"
//                 size='large'
//                 onClose={onClose}
//                 visible={visible}
//             >
//                 <p>Some contents...</p>
//                 <p>Some contents...</p>
//                 <p>Some contents...</p>
//             </Drawer>
//         </>
//     )
// }

// export default ProductDetail

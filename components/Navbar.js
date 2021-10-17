import React from 'react'
import Link from 'next/link'
import { Badge } from 'antd'
import { useSelector } from 'react-redux'
import { UserOutlined, CodeOutlined, ShoppingCartOutlined, HeartOutlined } from '@ant-design/icons'

const Navbar = () => {

    const cartItems = useSelector(state => state.cart.cartItems)
    const wishItems = useSelector(state => state.wish.wishItems)

    return (
        <nav className="fixed top-0 z-50 backdrop-blur-lg w-full flex justify-between items-center h-20 px-4 lg:px-10">
            <div className=" flex items-center">
                <Link href='/'>
                    <h1 className="text-2xl uppercase font-extrabold cursor-pointer mr-2 hidden sm:block">theBootStore</h1>
                </Link>
                <Link href="/">
                    <img src="/logo.png" height={50} width={50} />
                </Link>
            </div>
            <div className="flex">
                <Badge count={wishItems.length ? wishItems.length : ""}>
                    <h1 className="text-xl font-bold uppercase flex items-center cursor-pointer bg-secondary p-2 sm:px-4 "><HeartOutlined />
                        &nbsp; <span className="hidden lg:block">WishList</span></h1>
                </Badge>
                <Badge count={cartItems.length ? cartItems.length : ""}>
                    <h1 className="text-xl font-bold ml-2 uppercase flex items-center cursor-pointer bg-secondary p-2 sm:px-4 ">
                        <Link href="/cart">
                            <ShoppingCartOutlined />
                        </Link>
                        &nbsp;<Link href="/cart"><span className="hidden lg:block">Cart</span></Link></h1>
                </Badge>
                <Link href="/login">
                    <h1 className="text-xl ml-2 font-bold uppercase flex items-center cursor-pointer bg-secondary p-2 sm:px-4 "><UserOutlined /> &nbsp; <span className="hidden lg:block">Login</span></h1>
                </Link>

            </div>
        </nav>
    )
}

export default Navbar

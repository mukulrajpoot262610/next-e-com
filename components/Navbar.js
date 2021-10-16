import React from 'react'
import Link from 'next/link'
import { Badge } from 'antd'
import { useSelector } from 'react-redux'
import { UserOutlined, CodeOutlined, ShoppingCartOutlined, HeartOutlined } from '@ant-design/icons'

const Navbar = () => {

    const cartItems = useSelector(state => state.cart.cartItems)

    return (
        <nav className="fixed top-0 z-50 backdrop-blur-lg rounded-b-2xl w-full flex justify-between items-center h-20 px-4 lg:px-10">
            <div className="">
                <Link href='/'>
                    <h1 className="text-base xl:text-2xl uppercase font-extrabold cursor-pointer">theBootStore.</h1>
                </Link>
            </div>
            <div className="flex">
                <Badge count={cartItems.length ? cartItems.length : ""}>
                    <h1 className="text-xl font-bold uppercase flex items-center cursor-pointer bg-secondary p-2 sm:px-4 rounded-2xl"><HeartOutlined />
                        &nbsp; <span className="hidden sm:block">WishList</span></h1>
                </Badge>
                <Badge count={cartItems.length ? cartItems.length : ""}>
                    <h1 className="text-xl font-bold ml-2 uppercase flex items-center cursor-pointer bg-secondary p-2 sm:px-4 rounded-2xl"><ShoppingCartOutlined />
                        &nbsp;<Link href="/cart"><span className="hidden sm:block">Cart</span></Link></h1>
                </Badge>
                <h1 className="text-xl ml-2 font-bold uppercase flex items-center cursor-pointer bg-secondary p-2 sm:px-4 rounded-2xl"><UserOutlined /> &nbsp; <span className="hidden sm:block">Login</span></h1>

            </div>
        </nav>
    )
}

export default Navbar

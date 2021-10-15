import React from 'react'

const Navbar = () => {
    return (
        <nav className="fixed top-0 z-50 backdrop-blur-lg rounded-b-2xl w-full flex justify-between items-center h-20 px-10">
            <div className="">
                <h1 className="font-bold text-2xl">theGadgetStore</h1>
            </div>
            <div className="flex">
                <h1 className="mx-2">Login</h1>
                <h1>More</h1>
            </div>
        </nav>
    )
}

export default Navbar

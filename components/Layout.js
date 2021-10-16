import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({ children }) => {

    return (
        <div className="bg-secondary">
            <Navbar />
            <div className="mt-16 min-h-screen overflow-hidden">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout

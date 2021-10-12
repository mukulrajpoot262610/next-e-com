import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({ children }) => {

    const theme = "cupcake"

    return (
        <div data-theme={theme}>
            <Navbar data-theme={theme} />
            <div className="min-h-screen bg-white">
                {children}
            </div>
            <Footer data-theme={theme} />
        </div>
    )
}

export default Layout

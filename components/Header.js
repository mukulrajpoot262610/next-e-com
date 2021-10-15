import React from 'react'
import { Carousel } from 'antd';

const Header = () => {
    return (
        <div className="w-full rounded-2xl">
            <Carousel autoplay className="rounded-2xl">
                <div className="bg-red-300 rounded-2xl shadow-lg p-4 h-900">
                    <h3>1</h3>
                </div>
                <div className="bg-green-500 rounded-2xl shadow-lg h-900">
                    <h3>2</h3>
                </div>
                <div className="bg-blue-500 rounded-2xl shadow-lg h-900">
                    <h3>3</h3>
                </div>
                <div className="bg-yellow-500 rounded-2xl shadow-lg h-900">
                    <h3>4</h3>
                </div>
            </Carousel>

            <div className='my-4 flex'>
                <div className="bg-blue-500 w-full mr-2 rounded-2xl shadow-lg h-500">
                    <h3>3</h3>
                </div>
                <div className="bg-green-500 w-full mr-2 ml-2 rounded-2xl shadow-lg h-500">
                    <h3>3</h3>
                </div>
                <div className="bg-yellow-500 w-full ml-2 rounded-2xl shadow-lg h-500">
                    <h3>4</h3>
                </div>
            </div>

            <div className='my-4 flex'>
                <div className="bg-red-500 w-full mr-2 rounded-2xl shadow-lg h-500">
                    <h3>3</h3>
                </div>
                <div className="bg-yellow-500 w-full ml-2 rounded-2xl shadow-lg h-500">
                    <h3>4</h3>
                </div>
            </div>
        </div>
    )
}

export default Header

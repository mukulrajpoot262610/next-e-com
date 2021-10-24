import React from 'react'
import { Carousel } from 'antd';

const Header = () => {
    return (
        <div className="w-full ">
            <Carousel autoplay className="">
                <img src="/banner_1.png" className=" h-250 lg:h-500 xl:h-900 object-cover object-left lg:object-bottom" />
                <img src="/banner_2.png" className=" h-250 lg:h-500 xl:h-900 object-cover object-left lg:object-bottom" />
                <img src="/banner_3.jpg" className=" h-250 lg:h-500 xl:h-900 object-cover object-left" />
                <img src="/banner_4.png" className=" h-250 lg:h-500 xl:h-900 object-cover object-right" />
            </Carousel>
        </div>
    )
}

export default Header

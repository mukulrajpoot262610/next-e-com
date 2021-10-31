/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Carousel } from 'antd';

const Header = () => {
    return (
        <div className="w-full ">
            <Carousel autoplay>
                <img src="/banner_1.png" alt="" className="h-250 object-cover object-left lg:h-750" />
                <img src="/banner_2.png" alt="" className="h-250 object-cover object-left lg:h-750" />
                <img src="/banner_3.png" alt="" className="h-250 object-cover object-left lg:h-750" />
                <img src="/banner_4.png" alt="" className="h-250 object-cover object-left lg:h-750" />
            </Carousel>
        </div>
    )
}

export default Header

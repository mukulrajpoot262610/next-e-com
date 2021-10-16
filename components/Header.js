import React from 'react'
import { Carousel } from 'antd';

const Header = () => {
    return (
        <div className="w-full rounded-2xl">
            <Carousel autoplay className="rounded-2xl">
                <img src="/banner_1.png" className="rounded-2xl h-500 xl:h-900" />
                <img src="/banner_2.png" className="rounded-2xl h-500 xl:h-900" />
                <img src="/banner_3.jpg" className="rounded-2xl h-500 xl:h-900 object-cover object-left" />
                <img src="/banner_4.png" className="rounded-2xl h-500 xl:h-900 object-cover object-right" />
            </Carousel>

            <div className="my-8">
                <h1 className="font-bold text-4xl text-center uppercase">Top Categories</h1>
            </div>

            <div className='my-4 flex'>
                <img src="https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-Library/default/dweb1fc86f/Two%20Image%20Block/2%20%20component%20banner%20Hush%20Puppies.jpg?sw=698&sfrm=png&q=100" className="rounded-2xl h-250 xl:h-500 w-full mr-2 object-cover object-bottom shadow-xl" />
                <img src="https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-Library/default/dwddde0603/Specular%20Images%20Block/Outdoor.jpg?sw=930&sfrm=jpg&q=100" className="rounded-2xl h-250 xl:h-500 w-full ml-2 object-cover object-bottom shadow-xl" />
            </div>

            <div className='my-4 flex'>
                <img src="https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-Library/default/dw34d8630d/Two%20Image%20Block/2%20%20component%20banner%20Lifestyle%20(Northstar.jpg?sw=698&sfrm=png&q=100" className="rounded-2xl h-250 xl:h-500 w-full mr-2 object-cover object-bottom shadow-xl" />
                <img src="https://www.bata.in/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-Library/default/dwe1404a22/Two%20Image%20Block/2%20%20component%20banner%20Performance%20(Power).jpg?sw=698&sfrm=png&q=100" className="rounded-2xl h-250 xl:h-500 w-full ml-2 object-cover object-bottom shadow-xl" />
            </div>
        </div>
    )
}

export default Header

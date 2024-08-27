import React from 'react'
import {assets} from "../assets/frontend_assets/assets"

const Footer = () => {
    return (
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

            <div>
                <img src={
                        assets.logo
                    }
                    alt=""
                    className='mb-5 w-32'/>
                <p className='w-full md:w-2/3 text-gray-400'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, saepe! Reprehenderit id excepturi enim in rerum saepe mollitia a illum, magnam doloremque nam sapiente corrupti modi facilis, tempore voluptatem maiores fugit vero reiciendis delectus! Magni adipisci reprehenderit cupiditate quo, molestiae perspiciatis, porro, veniam et voluptatum rem sit ab modi eos!
                </p>
            </div>
            <div>
                <p className='texr-xl font-medium mb-5'>
                    COMPANY
                </p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div>
                    <p className='text-xl font-medium mb-5'>
                        Contact me
                    </p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+998-94-899-99-49</li>
                        <li>nematxonovh@gmail.com</li> 
                    </ul>
                </div> 
        </div>
    )
}

export default Footer

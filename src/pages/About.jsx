import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
    return (
        <div>
            <div className='text-2xl text-center pt-8 border-t'>
                <Title text1={"About"}  text2={"Us"}/>
            </div>
            <div className='my-10 flex flex-col md:flex-row gap-16'>
                <img className='w-full md:max-w-[450px]' src={assets.about_img } alt="" />
                <div className='flex flex-col justify-center gap-6 md:w-2/4' >
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nihil eius laborum exercitationem doloremque eaque reprehenderit, facere placeat iusto consequuntur! Adipisci iure voluptas distinctio porro tenetur, exercitationem assumenda modi quo minima illo id? Voluptatum assumenda illo natus quaerat eos inventore iusto voluptatibus quidem? A similique eaque architecto? Nulla ad mollitia, neque corrupti sequi, tenetur nam ab officia quia enim commodi, corporis illo iure tempora eveniet consequuntur accusantium doloribus quidem. Atque.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae et, cupiditate pariatur corporis quis soluta. Officia, ea? Non eveniet dolores assumenda delectus quasi numquam vero porro quaerat facilis impedit voluptatem totam nostrum, fuga itaque modi error cum nisi doloribus. Excepturi quaerat est cupiditate quis perferendis officiis nobis? Minus, repellat iste.
                    </p>
                    <b className='text-gray-800'>
                      Our Mission
                    </b>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque omnis quaerat voluptatum laborum vitae, esse, deserunt cupiditate enim explicabo amet consectetur tenetur, eum perferendis incidunt dolore sint odio natus culpa. Voluptatum porro accusantium tempora fuga, optio ad possimus ut animi.
                    </p>
                </div>
            </div>
            <div className='text-4xl py-4 ' >
                  <Title text1={"Why"} text2={"Choose Us"}/>
            </div>
            <div className='flex flex-col md:flex-row text-sm mb-20'>
                 <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>
                      Quality Assurance:
                    </b>
                    <p className='text-gray-500'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime quia laborum odit culpa fuga ad ipsum odio debitis. Nostrum earum sint vel quam laborum maiores!
                    </p>
                </div>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>
                      Convenience:
                    </b>
                    <p className='text-gray-500'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime quia laborum odit culpa fuga ad ipsum odio debitis. Nostrum earum sint vel quam laborum maiores!
                    </p>
                </div>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>
                      Exceptional Customer Service:
                    </b>
                    <p className='text-gray-500'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime quia laborum odit culpa fuga ad ipsum odio debitis. Nostrum earum sint vel quam laborum maiores!
                    </p>
                </div>
            </div>
            <NewsletterBox/>

        </div>
    )
}

export default About

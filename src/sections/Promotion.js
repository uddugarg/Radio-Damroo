import React from 'react'
import img1 from '../assets/celebrities/anil-kapoor.jpg'
import img2 from '../assets/celebrities/ananya-panday.jpg'
import img3 from '../assets/celebrities/jackie-shroff.jpg'
import img4 from '../assets/celebrities/himesh-reshamiya.jpeg'
import img5 from '../assets/celebrities/rajat-kapoor.jpeg'
import img6 from '../assets/celebrities/rajkumar-rao.jpeg'

function Promotion() {
    return (
        <>
            <div className='copy-text relative sm:block md:grid grid-cols-12 p-20 font-poppins'>
                <div className='flex flex-col justify-start col-span-3 col-start-1'>
                    <div className='rounded-xl overflow-hidden w-28 mb-6 self-end'>
                        <img src={img3} alt='' />
                    </div>
                    <div className='rounded-xl overflow-hidden w-52 self-start'>
                        <img src={img2} alt='' />
                    </div>
                    <div className='rounded-xl overflow-hidden relative w-40 self-center -top-6 left-12'>
                        <img src={img1} alt='' />
                    </div>
                </div>

                <div class="relative z-20 col-start-4 col-span-6 pt-20">
                    <h2 class="text-homepage-eyebrow relative z-20 mb-4 text-center text-base font-semibold uppercase md:mb-8">CELEBRITIES OBSESSED</h2>
                    <p class="relative mx-auto text-center font-bold leading-[50px] tracking-tighter [&amp;>span]:block [&amp;>span]:whitespace-nowrap [&amp;_.mo-shopify]:px-1 [&amp;_.mo-shopify]:leading-[1.1] [&amp;_.mo-shopify]:inline-block [&amp;_.mo-shopify]:text-transparent [&amp;_.mo-shopify]:bg-clip-text [&amp;_.mo-shopify]:bg-homepage-merchant-obsessed-headline md:text-7xl min-[1020px]:text-8xl min-[1450px]:text-9xl richtext text-3xl">
                        <span>Meet </span>
                        <span>the people </span>
                        <span>who loves </span><br />
                        <span>
                            <span class="font-bold text-primary leading-tight">Radio Damroo</span>
                        </span>
                    </p>
                    <a href="/promotion" className='ml-5 text-white text-center flex items-center justify-center text-sm'>Visit Gallery →</a>
                </div>

                <div className='flex flex-col hidden sm:block justify-start col-span-3 col-start-10'>
                    <div className='rounded-xl overflow-hidden w-28 mb-6 self-start'>
                        <img src={img4} alt='' />
                    </div>
                    <div className='rounded-xl overflow-hidden w-52 self-end'>
                        <img src={img5} alt='' />
                    </div>
                    <div className='rounded-xl overflow-hidden relative w-40 self-center -top-6 right-12'>
                        <img src={img6} alt='' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Promotion
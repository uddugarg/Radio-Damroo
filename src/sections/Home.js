import React, { Suspense } from 'react'
import heroImg from '../assets/hero_section_img.png'
import logo from '../assets/logo.png'

function Home() {
    return (
        // <Suspense fallback={<></>}>
            <div className="bg-zinc-900 text-gray-200 font-poppins background-custom overflow-hidden relative" id='home'>
                <section className="min-h-screen flex items-center justify-center">
                    <div className="max-w-[1024px] w-[90%] mx-auto flex  items-center justify-center flex-col-reverse md:flex-row gap-10">
                        <div className="flex-1 text-center md:text-left">
                            <img className="mb-5 ml-24" width='150px'
                                src={logo} alt="" />
                            <h1 className="text-4xl md:text-[60px] font-bold text-primary leading-tight uppercase">89.6 Radio Damroo</h1>
                            <p className="text-sm md:text-lg">ETAWAH'S FIRST PERSONAL RADIO CHANNEL </p>
                            <a href="#" className="inline-block bg-primary py-2 px-3 mt-5 text-sm md:text-lg rounded-md hover:bg-orange-500 capitalize">Coming Soon</a>
                        </div>
                        <div className="flex-1 ">
                            <div className="w-full h-[50vh] md:h-screen overflow-hidden relative">
                                <img className="w-full h-full md:h-[150vh] object-contain md:absolute md:top-[-25%]"
                                    src={heroImg} alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        // </Suspense>
    )
}

export default Home
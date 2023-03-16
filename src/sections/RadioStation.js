import React from 'react'

function RadioStation() {
    return (
        <section className="flex items-center justify-center  py-[100px] radio-station-bg bg-cover bg-center font-poppins">
            <div className="max-w-[800px] w-[90%] mx-auto">
                <h1 className="text-4xl md:text-[80px] font-bold leading-tight uppercase text-white">Don't miss the next episode</h1>
                <a href="#" className="inline-block bg-primary py-2 px-3 mt-5 text-sm md:text-lg rounded-md hover:bg-orange-500 capitalize">Coming Soon</a>
                <a target='_blank' href="https://instagram.com/radio_damroo?igshid=ZDdkNTZiNTM=" className='ml-5 text-white'>Follow for more updates→</a>
            </div>
        </section>
    )
}

export default RadioStation
import React from 'react'

function RecordingsAndStats() {
    return (
        <div className='font-poppins pb-20'>
            <section className="flex items-center justify-center  py-[100px]">
                <div className="max-w-[1024px] w-[90%] mx-auto">
                    <h1 className="text-primary text-4xl font-bold text-center">Most listened <br /> Episodes</h1>

                    <div className="mt-10 max-w-[100%] overflow-x-auto rounded-lg">
                        <table className="w-fit rounded-lg min-w-[600px] text-center mx-auto overflow-hidden">
                            <thead>
                                <tr className="bg-orange-500">
                                    <th className="p-3">Guests</th>
                                    <th className="p-3">Date</th>
                                    <th className="p-3">Link</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border border-gray-500">
                                    <td className="p-3">Awaited</td>
                                    <td className="p-3">26/03/2023</td>
                                    <td className="p-3">
                                        <a href="#" className="inline-block bg-primary p-1 text-sm md:text-lg rounded-md hover:bg-orange-500 capitalize font-poppins">Listen</a>
                                    </td>
                                </tr>
                                <tr className="border border-gray-500">
                                    <td className="p-3">Awaited</td>
                                    <td className="p-3">26/03/2023</td>
                                    <td className="p-3">
                                        <a href="#" className="inline-block bg-primary p-1 text-sm md:text-lg rounded-md hover:bg-orange-500 capitalize font-poppins">Listen</a>
                                    </td>
                                </tr>
                                <tr className="border border-gray-500">
                                    <td className="p-3">-</td>
                                    <td className="p-3">-</td>
                                    <td className="p-3">
                                        <a href="#" className="inline-block bg-primary p-1 text-sm md:text-lg rounded-md hover:bg-orange-500 capitalize font-poppins">Listen</a>
                                    </td>
                                </tr>
                                <tr className="border border-gray-500">
                                    <td className="p-3">-</td>
                                    <td className="p-3">-</td>
                                    <td className="p-3">
                                        <a href="#" className="inline-block bg-primary p-1 text-sm md:text-lg rounded-md hover:bg-orange-500 capitalize font-poppins">Listen</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="flex items-center justify-center">
                <div className="max-w-[1000px] w-[100%] mx-auto">
                    <div className="flex justify-between md:flex-row flex-col md:gap-5 gap-10">
                        <div className="text-center">
                            <h1 className="text-[80px] font-bold text-primary leading-tight uppercase">2000+</h1>
                            <p className="text-xl">Registered Listeners</p>
                        </div>
                        <div className="text-center">
                            <h1 className="text-[80px] font-bold text-primary leading-tight uppercase">30+</h1>
                            <p className="text-xl">Planned Shows</p>
                        </div>
                        <div className="text-center">
                            <h1 className="text-[80px] font-bold text-primary leading-tight uppercase">50+</h1>
                            <p className="text-xl">Celebrity Guests</p>
                        </div>
                        <div className="text-center">
                            <h1 className="text-[80px] font-bold text-primary leading-tight uppercase">20+</h1>
                            <p className="text-xl">Team Members</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default RecordingsAndStats
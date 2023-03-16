import React from 'react'
import img1 from '../assets/team/shouhadra.jpeg'
import img3 from '../assets/team/aryan-yadav.png'
import img2 from '../assets/team/Komal-Nahta.png'

const people = [
    {
        name: 'Shouhadra Dixit',
        role: 'Chief Executive Officer',
        imageUrl: img1
    },
    {
        name: 'Komal Nahta',
        role: 'Programming Head & Show Host',
        imageUrl: img2
    },
    {
        name: 'Aryan Yadav',
        role: 'Co-Founder & Vice President',
        imageUrl: img3
    },
    // More people...
]

function Team() {
    return (
        <div className="bg-white py-24 sm:py-32 font-poppins">
            <div className="mx-auto grid max-w-7xl gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
                        suspendisse.
                    </p>
                </div>
                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                    {people.map((person) => (
                        <li key={person.name}>
                            <div className="flex items-center gap-x-6">
                                <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                                <div>
                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                    <li className='mt-5'>
                        <a href="#">Hear from our team →</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Team
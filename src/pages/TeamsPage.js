import React from 'react'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import Footer from '../sections/Footer';
import TeamSection from '../sections/TeamSection';

function TeamsPage() {
    return (
        <>
            <Link to='/'>
                <span className='text-xs flex text-center items-center fixed mt-10 ml-20 z-20 text-black'><HiOutlineArrowNarrowLeft className='mr-2' /> Go back home</span>
            </Link>
            <TeamSection />
            <Footer />
        </>
    )
}

export default TeamsPage
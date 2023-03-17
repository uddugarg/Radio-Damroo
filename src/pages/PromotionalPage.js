import React from 'react'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import Footer from '../sections/Footer';
import PromotionGallery from '../sections/PromotionGallery';

function PromotionalPage() {
    return (
        <>
            <Link to='/'>
                <span className='text-xs flex text-center items-center fixed mt-10 ml-20 z-20 text-white'><HiOutlineArrowNarrowLeft className='mr-2' /> Go back home</span>
            </Link>
            <PromotionGallery />
            <Footer />
        </>
    )
}

export default PromotionalPage
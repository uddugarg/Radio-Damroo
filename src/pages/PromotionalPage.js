import { AnimatePresence } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { ThemeProvider } from 'styled-components';
import ScrollTriggerProxy from '../components/ScrollTriggerProxy';
import Footer from '../sections/Footer';
import PromotionGallery from '../sections/PromotionGallery';
import GlobalStyles from '../styles/GlobalStyles';
import { dark } from '../styles/Themes';

function PromotionalPage() {

    const containerRef = useRef(null);
    const [Loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 3000);
    }, []);

    return (
        <>
            <GlobalStyles />
            <ThemeProvider theme={dark}>
                <LocomotiveScrollProvider
                    options={{
                        smooth: true,
                        // ... all available Locomotive Scroll instance options
                        smartphone: {
                            smooth: true,
                        },
                        tablet: {
                            smooth: true,
                        },
                    }}
                    watch={
                        [
                            //..all the dependencies you want to watch to update the scroll.
                            //  Basicaly, you would want to watch page/location changes
                            //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
                        ]
                    }
                    containerRef={containerRef}
                >
                    <main className="App" data-scroll-container ref={containerRef}>
                        <ScrollTriggerProxy />
                        <AnimatePresence>
                            <a href='/'>
                                <span className='text-xs flex text-center items-center fixed mt-10 ml-20 z-20 text-white'><HiOutlineArrowNarrowLeft className='mr-2' /> Go back home</span>
                            </a>
                            <PromotionGallery />
                            <Footer />
                        </AnimatePresence>
                    </main>
                </LocomotiveScrollProvider>
            </ThemeProvider>
        </>
    )
}

export default PromotionalPage
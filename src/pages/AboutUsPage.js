import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaMicrophoneAlt } from 'react-icons/fa';
import { RiInstagramFill, RiGroup2Fill } from 'react-icons/ri';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { GiLoveSong } from 'react-icons/gi';
import { SiShowtime } from 'react-icons/si';
import Footer from '../sections/Footer';
import Team from '../sections/Team';

const AboutUsPage = () => {
    return (
        <div className='h-full App' style={{ marginTop: '-50px' }}>
            <div className='container mx-auto lg:mt-12 lg:mb-18 mt-10 mb-10'>
                <div className='lg:col-start-2 lg:col-end-12 col-start-1 col-end-13 lg:px-0 px-4 relative'>
                    <a href='/'>
                        <span className='text-xs flex text-center items-center fixed mt-10'><HiOutlineArrowNarrowLeft className='mr-2' /> Go back home</span>
                    </a>
                    <div class="flex flex-wrap items-start mb-3">
                        <span class="text-subtitle py-3">About Radio Damroo</span>
                        <span class="sr-only">.</span>
                    </div>
                    <h1 class="text-6xl">Who We Are</h1>
                </div>
            </div>

            <div class="container mx-auto lg:mb-0 relative mb-8 grid gap-1 grid-cols-12">
                <div class="lg:col-start-2 lg:col-end-12 col-start-1 col-end-13 lg:px-0 px-4 relative">
                    <div data-v-a32cb6a4="" class="relative flex flex-row items-start border-collapse lg:absolute lg:top-0 lg:left-0 lg:flex-col">
                        <a data-v-a32cb6a4="" aria-label="Share to Facebook" href="https://www.facebook.com/profile.php?id=100089006416469&mibextid=ZbWKwL" class="border-gray-400 border-2 text-contrast-none w-12 h-12 text-2xl text-center justify-center flex" target="_blank" rel="noopener">
                            <FaFacebookF className='text-center mt-3 text-gray-500' />
                        </a>
                        <a data-v-a32cb6a4="" aria-label="Share to Instagram" href="https://instagram.com/radio_damroo?igshid=ZDdkNTZiNTM=" class="border-2 border-gray-400 text-contrast-none w-12 h-12 -ml-px text-2xl text-center justify-center flex lg:ml-0 lg:-mt-px" target="_blank" rel="noopener">
                            <RiInstagramFill className='text-center mt-3 text-gray-500' />
                        </a>
                        <a data-v-a32cb6a4="" aria-label="Share to LinkedIn" href="https://www.linkedin.com/company/radio-damroo/" class="border-2 border-gray-400 text-contrast-none w-12 h-12 -ml-px text-2xl text-center justify-center flex lg:ml-0 lg:-mt-px" target="_blank" rel="noopener">
                            <FaLinkedinIn className='text-center mt-3 text-gray-500' />
                        </a>
                    </div>
                </div>
            </div>
            <div class="LayoutHelper BaseGrid container mx-auto lg:mb-8 mb-5 grid gap-1 grid-cols-12">
                <div class="lg:col-start-3 lg:col-end-11 col-start-1 col-end-13 lg:px-0 px-4 relative text-xl">
                    <div class="BlockText text-body-lg">
                        <p data-block-key="zwi6i"></p>
                        <p data-block-key="5u187">89.6 Radio Damroo Etawah first community radio station CR is radio broadcasting with the objective of serving the cause of the community in the service area by involving members of the community in the broadcast of their programmes.</p>
                        <p data-block-key="5u187">It affords a unique advantage of receiving transmission through low cost, battery operated portable receiving sets.</p>
                        <p data-block-key="5u187">The Ministry encourages setting up the CR, as it promises to provide an opportunity to the local communities to express themselves, share their views and particularly empower the women, youth and the marginalized groups to take part in local self governance and overall socio-economic and cultural development of the area.</p>
                    </div>
                </div>
            </div>

            <div class="LayoutHelper BaseGrid container mx-auto lg:mb-8 mb-5 grid gap-1 grid-cols-12">
                <div class="lg:col-start-3 lg:col-end-11 col-start-1 col-end-13 lg:px-0 px-4 relative text-xl">
                    <div class="BlockText text-body-lg">
                        <p data-block-key="zwi6i"></p>
                        <p data-block-key="5u187">Programs permissible on Community Radio should be of immediate relevance to the community and focus on issues relating to education, health, environment, and agriculture and rural and community development.</p>
                        <p data-block-key="5u187">At least 50 percent of content shall be generated with the participation of the local community, for which the station has been set up.</p>
                        <p data-block-key="5u187">Transmission of sponsored programmes shall not be permitted except programmes sponsored by Central and State Governments and other organizations to broadcast public interest information.</p>
                        <p data-block-key="5u187">Such station cannot broadcast any programmes, which relate to news and current affairs and are otherwise political in nature. Location for CR is to be located within the campus in case of educational institutes.</p>
                        <p data-block-key="5u187">NGOs and others have to locate their transmitter, antenna with the centre of geographical area of the community they seek to serve.</p>
                    </div>
                </div>
            </div>

            <div className='container mx-auto lg:mt-12 lg:mb-18 mt-10 mb-10'>
                <div className='lg:col-start-2 lg:col-end-12 col-start-1 col-end-13 lg:px-0 px-4 relative'>
                    <div class="flex flex-wrap items-start mb-3">
                        <span class="text-subtitle py-3">Facts About Radio Damroo</span>
                        <span class="sr-only">.</span>
                    </div>
                    <h1 class="text-6xl">Why Us</h1>
                </div>
            </div>

            <div class="flex justify-around items-center py-10 min-[1020px]:flex-row min-[1450px]:flex-row flex-col">
                <div class="group rounded-lg shadow-globe-product-card bg-white p-6 inline-block w-[80vw] shrink-0 snap-center first:ml-[var(--margin)] last:mr-[var(--margin)] md:first:ml-0 md:last:mr-0 md:w-1/5-gutter min-[1020px]:w-[20vw] min-[1450px]:w-[20vw] mb-5">
                    <GiLoveSong className='mb-7 flex h-14 w-14 place-items-center rounded-full justify-center relative -left-2 text-orange-500' />
                    <h3 class="mb-2 text-lg font-medium">
                        Apka Apna
                        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" class="group-hover:opacity-100 opacity-0 w-4 h-4 inline-block transition-all duration-500 group-hover:translate-x-2 will-change-transform">
                            <path d="M17.707 9.293l-5-5a.999.999 0 10-1.414 1.414L14.586 9H3a1 1 0 100 2h11.586l-3.293 3.293a.999.999 0 101.414 1.414l5-5a.999.999 0 000-1.414z" fill="currentColor"></path>
                        </svg>
                    </h3>
                    <p class="text-shade-60 richtext">Ji Bilkul! aapka apna aapke liye aapki apni pasando ke saath "kaa kr rhe wali" etawah ki madhur boli me... 89.6 RADIO DAMROO
                        Jald Aa Rha Hai!</p>
                </div>
                <div class="group rounded-lg shadow-globe-product-card bg-white p-6 inline-block w-[80vw] shrink-0 snap-center first:ml-[var(--margin)] last:mr-[var(--margin)] md:first:ml-0 md:last:mr-0 md:w-1/5-gutter min-[1020px]:w-[20vw] min-[1450px]:w-[20vw] mb-5">
                    <SiShowtime className='mb-7 flex h-14 w-14 place-items-center rounded-full justify-center relative -left-2 text-orange-500' />
                    <h3 class="mb-2 text-lg font-medium">
                        Community Shows
                        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" class="group-hover:opacity-100 opacity-0 w-4 h-4 inline-block transition-all duration-500 group-hover:translate-x-2 will-change-transform">
                            <path d="M17.707 9.293l-5-5a.999.999 0 10-1.414 1.414L14.586 9H3a1 1 0 100 2h11.586l-3.293 3.293a.999.999 0 101.414 1.414l5-5a.999.999 0 000-1.414z" fill="currentColor"></path>
                        </svg>
                    </h3>
                    <p class="text-shade-60 richtext">Etawah city located in UP has a very distinctive and amazingly different taste in songs and shows. Etawah still prefers Classical over Pop, Family Drama over Thriller. And we plan to give them what they want &amp; love!</p>
                </div>
                <div class="group rounded-lg shadow-globe-product-card bg-white p-6 inline-block w-[80vw] shrink-0 snap-center first:ml-[var(--margin)] last:mr-[var(--margin)] md:first:ml-0 md:last:mr-0 md:w-1/5-gutter min-[1020px]:w-[20vw] min-[1450px]:w-[20vw] mb-5">
                    <FaMicrophoneAlt className='mb-7 flex h-14 w-14 place-items-center rounded-full justify-center relative -left-2 text-orange-500' />
                    <h3 class="mb-2 text-lg font-medium">
                        Vocal For Local
                        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" class="group-hover:opacity-100 opacity-0 w-4 h-4 inline-block transition-all duration-500 group-hover:translate-x-2 will-change-transform">
                            <path d="M17.707 9.293l-5-5a.999.999 0 10-1.414 1.414L14.586 9H3a1 1 0 100 2h11.586l-3.293 3.293a.999.999 0 101.414 1.414l5-5a.999.999 0 000-1.414z" fill="currentColor"></path>
                        </svg>
                    </h3>
                    <p class="text-shade-60 richtext">Radio Damroo began mainly for this reason to promote and circulate local vocals. Shows here will be community based, songs will sing the community anthem and news will help & guide the community.</p>
                </div>
                <div class="group rounded-lg shadow-globe-product-card bg-white p-6 inline-block w-[80vw] shrink-0 snap-center first:ml-[var(--margin)] last:mr-[var(--margin)] md:first:ml-0 md:last:mr-0 md:w-1/5-gutter min-[1020px]:w-[20vw] min-[1450px]:w-[20vw] mb-5">
                    <RiGroup2Fill className='mb-7 flex h-14 w-14 place-items-center rounded-full justify-center relative -left-2 text-orange-500' />
                    <h3 class="mb-2 text-lg font-medium">
                        Highly Experienced Team
                        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" class="group-hover:opacity-100 opacity-0 w-4 h-4 inline-block transition-all duration-500 group-hover:translate-x-2 will-change-transform">
                            <path d="M17.707 9.293l-5-5a.999.999 0 10-1.414 1.414L14.586 9H3a1 1 0 100 2h11.586l-3.293 3.293a.999.999 0 101.414 1.414l5-5a.999.999 0 000-1.414z" fill="currentColor"></path>
                        </svg>
                    </h3>
                    <p class="text-shade-60 richtext">Our team members have experience from some of the tops in the industry like ZEE NEWS, AAJ TAK, 91.2 Big Fm, 93.5 Red Fm, 98.3 Radio Mirchi etc..</p>
                </div>
            </div>
            <Team />
            <div className='bg-zinc-900 text-white'>
                <Footer />
            </div>
        </div>
    )
}

export default AboutUsPage
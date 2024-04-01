"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// images
import img1 from '@/images/img1.png'
import img2 from '@/images/img2.png'
import img3 from '@/images/img3.png'
import img4 from '@/images/img4.png'
import img5 from '@/images/img5.png'

const FirstSection = () => {
    return (
        <section className='w-screen md:w-[1241px] p-2 md:h-[673px] '>

            {/* title */}
            <h1 className='text-[24px] font-poppins inline-block border-b-[2px] border-[#738FFF] sportBorder font-bold leading-[36px] text-black dark:text-white'>Sports</h1>

            {/* card container */}
            <div className='flex overflow-scroll gap-2 md:justify-between mt-2 md:p-0 md:mt-7 md:overflow-hidden'>
                {/* card one */}
                <div className='cardM w-[237px] h-[511px] dark:bg-dark-two'>
                    <div className='p-3 flex flex-col justify-between h-full'>
                        <Image src={img1} alt='' />
                        <h1 className='font-medium text-black font-inter dark:text-white text-[17px]'>Sacramento River Cats</h1>
                        <div className='flex items-center gap-6 w-[210px] md:w-full h-[54px] bg-white dark:bg-dark-one pl-2'>
                            <div className='font-inter'>
                                <h1 className='text-black dark:text-[#DFDFDF] text-[12px] font-normal'>Total Events</h1>
                                <h1 className='text-black dark:text-white text-[14px] font-medium'>48 Events</h1>
                            </div>

                            <div className='font-inter'>
                                <h1 className='text-black dark:text-[#DFDFDF] text-[12px] font-normal'>Sport</h1>
                                <h1 className='text-black dark:text-white text-[14px] font-medium'>Baseball</h1>
                            </div>
                        </div>
                    </div>
                </div>  

                {/* card two */}
                <div className='cardM w-[237px] h-[511px] bg-white dark:bg-dark-two'>
                    <div className='p-3 flex flex-col justify-between h-full'>
                        <Image src={img2} alt='' />
                        <h1 className='font-medium text-black font-inter dark:text-white text-[17px]'>Las Vegas Aviators</h1>
                        <div className='flex items-center gap-6 w-[210px] md:w-full h-[54px] bg-white dark:bg-dark-one pl-2'>
                            <div className='font-inter'>
                                <h1 className='text-black dark:text-[#DFDFDF] text-[12px] font-normal'>Total Events</h1>
                                <h1 className='text-black dark:text-white text-[14px] font-medium'>28 Events</h1>
                            </div>

                            <div className='font-inter'>
                                <h1 className='text-black dark:text-[#DFDFDF] text-[12px] font-normal'>Sport</h1>
                                <h1 className='text-black dark:text-white text-[14px] font-medium'>Baseball</h1>
                            </div>
                        </div>
                    </div>
                </div>

                {/* card three */}
                <div className='cardM w-[237px] md:h-[511px] bg-white dark:bg-dark-two'>
                    <div className='p-3 flex flex-col justify-between h-full'>
                        <Image src={img3} alt='' />
                        <h1 className='font-medium text-black font-inter dark:text-white text-[17px]'>new jersey devils</h1>
                        <div className='flex items-center gap-6 w-[210px] md:w-full h-[54px] bg-white dark:bg-dark-one pl-2'>
                            <div className='font-inter'>
                                <h1 className='text-black dark:text-[#DFDFDF] text-[12px] font-normal'>Total Events</h1>
                                <h1 className='text-black dark:text-white text-[14px] font-medium'>15 Events</h1>
                            </div>

                            <div className='font-inter'>
                                <h1 className='text-black dark:text-[#DFDFDF] text-[12px] font-normal'>Sport</h1>
                                <h1 className='text-black dark:text-white text-[14px] font-medium'>Ice Hockey</h1>
                            </div>
                        </div>
                    </div>
                </div>

                {/* card four */}
                <div className='cardM w-[237px] h-[511px] bg-white dark:bg-dark-two'>
                    <div className='p-3 flex flex-col justify-between h-full'>
                        <Image src={img4} alt='' />
                        <h1 className='font-medium text-black font-inter dark:text-white text-[17px]'>Las Vegas Aviators</h1>
                        <div className='flex items-center gap-6 w-[210px] md:w-full h-[54px] bg-white dark:bg-dark-one pl-2'>
                            <div className='font-inter'>
                                <h1 className='text-black dark:text-[#DFDFDF] text-[12px] font-normal'>Total Events</h1>
                                <h1 className='text-black dark:text-white text-[14px] font-medium'>2    8 Events</h1>
                            </div>

                            <div className='font-inter'>
                                <h1 className='text-black dark:text-[#DFDFDF] text-[12px] font-normal'>Sport</h1>
                                <h1 className='text-black dark:text-white text-[14px] font-medium'>Baseball</h1>
                            </div>
                        </div>
                    </div>
                </div>

                {/* card five */}
                <div className='cardM w-[237px] h-[511px] bg-white dark:bg-dark-two'>
                    <div className='p-3 flex flex-col h-full w-[237px]'>
                        <div className='relative'>
                            <Image src={img5} alt='' />
                            <div className='flex items-center justify-center absolute right-0 top-0 bg-black w-[47.78px] h-[25px]'>
                                <h1 className='text-white text-[12.8px] font-bold'>Ad</h1>
                            </div>
                        </div>
                        <div className='border-[0.2px] border-[#006555] h-full'>
                            <h1 className='font-semibold font-inter text-center text-black dark:text-white text-[20px] mt-5'>Advertisement title</h1>
                            <p className='text-[12.8px] font-inter font-normal text-black dark:text-[#DFDFDF] w-[187px] mx-auto mt-2'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* button */}
            <div className='w-[124px] h-[46px] bg-[#2C9CF0] flex items-center justify-center mx-auto mt-4 md:mt-10 bShadow'>
                <button className='text-[14px] text-white font-semibold'>See More</button>
            </div>
        </section>
    )
}

export default FirstSection;
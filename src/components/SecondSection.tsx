"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

// icons
import { ChevronLeft, ChevronRight } from 'lucide-react';

// images
import img6 from '@/images/img6.png'
import img7 from '@/images/img7.png'
import img8 from '@/images/img8.png'

const SecondSection = () => {
    return (
        <section className='w-screen md:w-[1240px] h-[918px] bg-white dark:bg-gradient-to-b from-[#18282A] to-[#221A2C] mt-[32px]'>
            <div className='md:w-[1085.75px] h-[790px] mt-10 md:mt-[70px] mb-[50px] mx-auto'>
                {/* text content */}
                <div className='text-center text-black dark:text-white mb-8 md:mb-[51px]'>
                    <h1 className='text-3xl font-poppins md:text-[50px] font-bold'>Collection Spotlight</h1>
                    <p className='text-[14px] font-inter md:w-2/3 mx-auto font-normal mt-5 md:mt-[25px]'>Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</p>
                </div>

                {/* coursole */}
                {/* <div className='relative overflow-auto flex justify-center gap-10'>

                    card one
                    <div className='carouselCard relative flex flex-col justify-between w-[257px] h-[624px] bg-dark-two p-3'>
                        image
                        <div className='imgBox'>
                            <Image src={img6} alt='' className='mx-auto'/>
                        </div>

                        <div className='dashedBorder'></div>

                        text content
                        <div className='text-white flex flex-col gap-2 mt-[19px]'>
                            <h1 className='text-[17px] font-medium text-center'>Las Vegas Aviators</h1>

                            <div className='flex justify-center gap-2 text-[14px] items-center font-normal divide-x'> 
                                <h1>OCT 15</h1>
                                <h1 className='pl-2'>SUN</h1>
                                <h1 className='pl-2'> 4:30 PM</h1>
                            </div>

                            <p className='text-[14px] font-normal text-center text-[#DFDFDF] w-[257px]'>Las Vegas Ballpark, Las Vegas, Nevada</p>
                        </div>

                        button
                        <div className='bg-black text-white text-center text-[13px] font-medium py-[6px]'>
                            <button>Take Flight Collection</button>
                        </div>
                    </div>

                    card two
                    <div className='carouselCard relative flex flex-col justify-between w-[257px] h-[624px] bg-dark-two p-3'>
                        image
                        <div className='imgBox'>
                            <Image src={img7} alt='' className='mx-auto'/>
                        </div>

                        <div className='dashedBorder'></div>

                        text content
                        <div className='text-white flex flex-col gap-2 mt-[19px]'>
                            <h1 className='text-[17px] font-medium text-center'>Sacramento River Cats</h1>

                            <div className='flex justify-center gap-2 text-[14px] items-center font-normal divide-x'> 
                                <h1>OCT 15</h1>
                                <h1 className='pl-2'>SUN</h1>
                                <h1 className='pl-2'> 4:30 PM</h1>
                            </div>

                            <p className='text-[14px] font-normal text-center text-[#DFDFDF]'>Sutter Health Park, Sacramento, California</p>
                        </div>

                        button
                        <div className='bg-black text-white text-center text-[13px] font-medium py-[6px]'>
                            <button>Take Flight Collection</button>
                        </div>
                    </div>

                    card three
                    <div className='carouselCard relative flex flex-col justify-between w-[257px] h-[624px] bg-dark-two p-3'>
                        image
                        <div className='imgBox'>
                            <Image src={img8} alt='' className='mx-auto'/>
                        </div>

                        <div className='dashedBorder'></div>

                        text content
                        <div className='text-white flex flex-col gap-2 mt-[19px]'>
                            <h1 className='text-[17px] font-medium text-center'>Las Vegas Aviators</h1>

                            <div className='flex justify-center gap-2 text-[14px] items-center font-normal divide-x'> 
                                <h1>OCT 15</h1>
                                <h1 className='pl-2'>SUN</h1>
                                <h1 className='pl-2'> 4:30 PM</h1>
                            </div>

                            <p className='text-[14px] font-normal text-center text-[#DFDFDF]'>Las Vegas Ballpark, Las Vegas, Nevada</p>
                        </div>

                        button
                        <div className='bg-black text-white text-center text-[13px] font-medium py-[6px]'>
                            <button>Take Flight Collection</button>
                        </div>
                    </div>

                    buttons
                    <div className='absolute flex justify-between w-full top-1/2 left-1/2 -translate-x-1/2 text-[#2C9CF0] '>
                        <Link href={"./"} ><ChevronLeft className='w-[36.75px] h-[48px] border-[1px] border-[#2C9CF0]'/></Link>
                        <Link href={"./"}><ChevronRight className='w-[36.75px] h-[48px] border-[1px] border-[#2C9CF0]'/></Link>
                    </div>
                </div> */}


                <div className="carousel relative m-3 md:justify-center gap-10   w-full">
                    <div id="slide1" className="carousel-item relative">
                        <div className='carouselCard before:hidden dark:before:block after:hidden dark:after:block relative flex flex-col justify-between w-[257px] h-[624px] bg-white dark:bg-dark-two p-3'>
                            {/* image */}
                            <div className='imgBox'>
                                <Image src={img6} alt='' className='mx-auto' />
                            </div>

                            <div className='dashedBorder'></div>

                            {/* text content */}
                            <div className='text-black dark:text-white flex flex-col gap-2 mt-[19px]'>
                                <h1 className='text-[17px] font-poppins font-medium text-center'>Las Vegas Aviators</h1>

                                <div className='flex justify-center font-poppins gap-2 text-[14px] items-center font-normal divide-x'>
                                    <h1>OCT 15</h1>
                                    <h1 className='pl-2'>SUN</h1>
                                    <h1 className='pl-2'> 4:30 PM</h1>
                                </div>

                                <p className='text-[14px] font-inter font-normal text-center text-black dark:text-[#DFDFDF] w-[257px]'>Las Vegas Ballpark, Las Vegas, Nevada</p>
                            </div>

                            {/* button */}
                            <div className='bg-[#1D1D1F] font-inter dark:bg-black text-white text-center text-[13px] font-medium py-[6px]'>
                                <button>Take Flight Collection</button>
                            </div>
                        </div>
                    </div>

                    <div id="slide2" className="carousel-item relative">
                        <div className='carouselCard before:hidden dark:before:block after:hidden dark:after:block relative flex flex-col justify-between w-[257px] h-[624px] bg-white dark:bg-dark-two p-3'>
                            {/* image */}
                            <div className='imgBox'>
                                <Image src={img7} alt='' className='mx-auto' />
                            </div>

                            <div className='dashedBorder'></div>

                            {/* text content */}
                            <div className='text-black dark:text-white flex flex-col gap-2 mt-[19px]'>
                                <h1 className='text-[17px] font-poppins font-medium text-center'>Sacramento River Cats</h1>

                                <div className='flex justify-center gap-2 font-poppins text-[14px] items-center font-normal divide-x'>
                                    <h1>OCT 15</h1>
                                    <h1 className='pl-2'>SUN</h1>
                                    <h1 className='pl-2'> 4:30 PM</h1>
                                </div>

                                <p className='text-[14px] font-inter font-normal text-center text-black dark:text-[#DFDFDF]'>Sutter Health Park, Sacramento, California</p>
                            </div>

                            {/* button */}
                            <div className='bg-[#1D1D1F] dark:bg-black font-inter text-white text-center text-[13px] font-medium py-[6px]'>
                                <button>Take Flight Collection</button>
                            </div>
                        </div>
                    </div>

                    <div id="slide3" className="carousel-item relative">
                        <div className='carouselCard before:hidden dark:before:block after:hidden dark:after:block relative flex flex-col justify-between w-[257px] h-[624px] bg-white dark:bg-dark-two p-3'>
                            {/* image */}
                            <div className='imgBox'>
                                <Image src={img8} alt='' className='mx-auto' />
                            </div>

                            <div className='dashedBorder'></div>

                            {/* text content */}
                            <div className='text-black dark:text-white flex flex-col gap-2 mt-[19px]'>
                                <h1 className='text-[17px] font-poppins font-medium text-center'>Las Vegas Aviators</h1>

                                <div className='flex justify-center gap-2 font-poppins text-[14px] items-center font-normal divide-x'>
                                    <h1>OCT 15</h1>
                                    <h1 className='pl-2'>SUN</h1>
                                    <h1 className='pl-2'> 4:30 PM</h1>
                                </div>

                                <p className='text-[14px] font-inter font-normal text-center text-black dark:text-[#DFDFDF]'>Las Vegas Ballpark, Las Vegas, Nevada</p>
                            </div>

                            {/* button */}
                            <div className='bg-[#1D1D1F] dark:bg-black font-inter text-white text-center text-[13px] font-medium py-[6px]'>
                                <button>Take Flight Collection</button>
                            </div>
                        </div>
                    </div>

                    <div className='absolute hidden md:flex justify-between w-full top-1/2 left-1/2 -translate-x-1/2 text-[#2C9CF0] '>
                        <Link href={"./"} ><ChevronLeft className='w-[36.75px] h-[48px] border-[1px] border-[#2C9CF0]'/></Link>
                        <Link href={"./"}><ChevronRight className='w-[36.75px] h-[48px] border-[1px] border-[#2C9CF0]'/></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SecondSection
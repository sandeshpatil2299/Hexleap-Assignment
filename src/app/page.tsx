"use client"
import React, { useState } from 'react'
import FirstSection from '@/components/FirstSection'
import SecondSection from '@/components/SecondSection'

import {SunMedium, Moon} from 'lucide-react'

const Page = () => {
  
  const [darkMode, setDarkMode]= useState(false);

  const toggleDarkMode= () => {
    setDarkMode(!darkMode);
  }

  return (
    <div className={`${darkMode ? "" : "dark"}`}>
      <main className='bg-white h-[100%] w-[100%] py-[64px] grid place-content-center dark:bg-dark-one'>
        <FirstSection />
        <SecondSection />

        <button onClick={toggleDarkMode} className="absolute inline-flex justify-center items-center w-8 h-8 md:w-12 top-3 right-3 md:h-12 md:top-10 md:right-10 bg-neutral-900 dark:bg-slate-50 rounded-full text-white dark:text-black font-bold">
          {
            darkMode ? <SunMedium className='h-5 w-5 md:h-8 md:w-8'/> : <Moon className='h-5 w-5 md:h-8 md:w-8'/>
          }
        </button>
      </main>
    </div>
  )
}

export default Page;
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

        <button onClick={toggleDarkMode} className="absolute inline-flex justify-center items-center w-12 h-12 top-10 right-10 bg-neutral-900 dark:bg-slate-50 rounded-full text-white dark:text-black font-bold">
          {
            darkMode ? <SunMedium className='h-8 w-8'/> : <Moon className='h-8 w-8'/>
          }
        </button>
      </main>
    </div>
  )
}

export default Page;
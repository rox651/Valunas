import React from 'react'
import { IoLogoInstagram } from 'react-icons/io'
import { MasonryGridImages } from '../our-work'
import { Sofia } from 'next/font/google'

const sofia = Sofia({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})
const OurWork = () => {
  return (
    <section id="nuestro-trabajo" className={`${sofia.className} relative z-10  py-5 lg:py-7 `}>
      <div className="mx-auto  max-w-7xl space-y-5 px-5">
        <h2 className=" text-center    text-[2.5rem]  font-bold text-light-orchid-500 sm:text-5xl lg:text-6xl">
          Nuestro trabajo
        </h2>
        <MasonryGridImages />
      </div>
    </section>
  )
}

export default OurWork
import Link from 'next/link'
import { Poppins, Vibur } from 'next/font/google'
import { useState } from 'react'
import clsx from 'clsx'

import { IoMdCloseCircleOutline } from 'react-icons/io'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import { FaUserCircle } from 'react-icons/fa'
import HeaderLink from './HeaderLink'
import { navLinks } from '@/utils/constants/'

import { HandCircle } from '../icons'

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const vibur = Vibur({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState<Boolean>(false)

  function toggleNavBar() {
    setIsNavbarOpen((state) => !state)
  }

  function closeNavBar() {
    setIsNavbarOpen((state) => false)
  }

  return (
    <header className={`${poppins.className}  bg-transparent`}>
      <div className="  mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        <HiOutlineMenuAlt1 onClick={toggleNavBar} className="text-xl lg:hidden" role="button" />
        <Link href="/">
          <h1
            className={`${vibur.className}  relative z-10 font-bold text-light-orchid-500 text-5xl`}
          >
            Valuñas
          </h1>
        </Link>
        <nav
          role="menu"
          className={clsx(
            !isNavbarOpen && '-translate-x-full',
            ' fixed left-0 top-0 z-50 flex h-screen flex-col gap-5 bg-light-orchid-400 p-4 text-xs shadow-lg transition-transform lg:static lg:h-auto lg:translate-x-0 lg:flex-row lg:bg-transparent lg:shadow-none'
          )}
        >
          <IoMdCloseCircleOutline
            onClick={toggleNavBar}
            className="block text-2xl text-white lg:hidden"
            role="button"
          />
          {navLinks.map((link) => (
            <HeaderLink closeNavBar={closeNavBar} link={link} key={`${link.name} - header`} />
          ))}
        </nav>
        <button className="text-xs lg:text-sm">
          <FaUserCircle className=" text-xl lg:hidden" />
          <span className="hidden lg:block">Inicia sesión</span>
        </button>
      </div>
    </header>
  )
}

export default Header

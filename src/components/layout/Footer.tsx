import Link from 'next/link'
import { useMemo } from 'react'
import { footerNavigation } from '@/utils/constants/'
import { Hand } from '../icons'

export const Footer = () => {
  const date = useMemo(() => new Date(), [])

  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-4 py-12 sm:px-6 lg:px-8">
        <Hand />
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          {footerNavigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <Link
                href={item.href}
                className="text-base text-light-orchid-500 transition-colors  hover:text-light-orchid-900"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          {footerNavigation.social.map((item) => {
            return (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                className=" text-light-orchid-500 transition-colors hover:text-light-orchid-900"
              >
                <span className="sr-only">{item.name}</span>
                {item.icon}
              </a>
            )
          })}
        </div>
        <p className="mt-8 text-center text-xs text-light-orchid-700 ">
          &copy; {date.getFullYear()} Valuñas - Nails Spa, Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}

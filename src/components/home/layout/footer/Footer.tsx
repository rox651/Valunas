import { useMemo } from 'react'
import { footerNavigation } from '@/utils/constants/'
import { Hand } from '@/components'
import { FooterNavLink } from './FooterNavLink'
import { FooterSocialLink } from './FooterSocialLink'

export const Footer = () => {
  const date = useMemo(() => new Date(), [])

  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-4 py-12 sm:px-6 lg:px-8">
        <Hand />
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          {footerNavigation.main.map((item) => (
            <FooterNavLink key={item.name} item={item}></FooterNavLink>
          ))}
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          {footerNavigation.social.map((item) => (
            <FooterSocialLink key={item.name} item={item}></FooterSocialLink>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-light-orchid-700 ">
          &copy; {date.getFullYear()} Valuñas - Nails Spa, Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}

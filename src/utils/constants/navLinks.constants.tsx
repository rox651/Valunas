import { IoLogoWhatsapp, IoLogoInstagram } from 'react-icons/io'
import { FaTiktok } from 'react-icons/fa'

export const navLinks = [
  {
    href: '/#sobre-nosotras',
    name: 'Sobre nosotras',
  },
  {
    href: '/#precios',
    name: 'Lista de precios',
  },
  {
    href: '/#nuestro-trabajo',
    name: 'Nuestro trabajo',
  },
  {
    href: '/#contactanos',
    name: 'Contactanos',
  },
]

export const footerNavigation = {
  main: [...navLinks],
  social: [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/valunas_nailsspa/',
      Icon: <IoLogoInstagram className="h-6 w-6" />,
    },
    {
      name: 'TikTok',
      href: 'https://www.tiktok.com/@valunasnailsspa',
      Icon: <FaTiktok className="h-6 w-5" />,
    },
    {
      name: 'Whatsapp',
      href: 'https://api.whatsapp.com/send?phone=+573174398619&text=Hola!%20Quiero%20saber%20precios%20de%20los%20servicios!',
      Icon: <IoLogoWhatsapp className="h-6 w-6" />,
    },
  ],
}

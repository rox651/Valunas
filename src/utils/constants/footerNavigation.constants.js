import { IoLogoWhatsapp, IoLogoInstagram } from 'react-icons/io'
import { FaTiktok } from 'react-icons/fa'
export const footerNavigation = {
  main: [
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
  ],
  social: [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/valunas_nailsspa/',
      icon: <IoLogoInstagram className="h-6 w-6" />,
    },
    {
      name: 'TikTok',
      href: 'https://www.tiktok.com/@valunasnailsspa',
      icon: <FaTiktok className="h-6 w-5" />,
    },
    {
      name: 'Whatsapp',
      href: 'https://api.whatsapp.com/send?phone=+573174398619&text=Hola!%20Quiero%20saber%20precios%20de%20los%20servicios!',
      icon: <IoLogoWhatsapp className="h-6 w-6" />,
    },
  ],
}

import { IoLogoWhatsapp } from 'react-icons/io'

const WhatsAppLink = () => {
  return (
    <a
      className="relative z-10 mx-auto mt-8 flex max-w-max items-center gap-2 rounded-md border  border-light-orchid-500 bg-light-orchid-500 px-5 py-2 font-medium text-light-orchid-50 transition-colors hover:bg-light-orchid-50 hover:text-light-orchid-500 md:text-lg"
      target="_blank"
      href="https://api.whatsapp.com/send?phone=+573174398619&text=Hola!%20Quiero%20saber%20precios%20de%20los%20servicios!"
    >
      Pide tu cita ahora
      <IoLogoWhatsapp className="h-6 w-6" />
    </a>
  )
}

export default WhatsAppLink

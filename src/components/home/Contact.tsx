import { Poppins, Sofia } from 'next/font/google'
import { WhatsAppLink } from '../common'

const sofia = Sofia({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

const poppins = Poppins({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})
const Contact = () => {
  return (
    <section
      id="contactanos"
      className={`${sofia.className} bg-[url('/public/images/Contactanos -  Valuñas.jpg')] relative z-10 px-5 py-5 lg:py-7 `}
    >
      <div className="space-y-5 text-center">
        <h3 className="  text-[2.2rem]   font-bold leading-[1] text-light-orchid-500 sm:text-5xl lg:text-6xl">
          ¿Quieres saber más?
        </h3>
        <p className={`${poppins.className} mx-auto w-full text-base md:w-1/2 md:text-xl`}>
          ¡Ven y permítenos hacerte sentir y lucir espectacular!
        </p>
        <WhatsAppLink />
      </div>
    </section>
  )
}

export default Contact

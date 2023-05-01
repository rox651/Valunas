import Image from 'next/image'
import { Poppins, Sofia } from 'next/font/google'
import { useInView } from 'react-intersection-observer'
import clsx from 'clsx'

import AboutImg from '/public/images/Cuidado de uñas - Valunas Nails Spa.jpg'

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

const About = () => {
  const { ref: title, inView: inViewTitle } = useInView()
  const { ref: text, inView: inViewText } = useInView()
  return (
    <section id="sobre-nosotras" className={` ${sofia.className} relative z-10 bg-light-orchid-200 py-5 lg:py-10`}>
      <div className="  mx-auto  grid  max-w-7xl items-center gap-5 px-5 md:grid-cols-[1.3fr_1fr] md:gap-10  ">
        <article className=" space-y-4 ">
          <h2
            ref={title}
            className={clsx(
              !inViewTitle && ' -translate-x-full opacity-0',
              ' text-center text-[2.5rem] font-bold transition-all duration-500 md:text-4xl lg:text-left lg:text-6xl '
            )}
          >
            Sobre nosotras
          </h2>
          <p
            ref={text}
            className={clsx(
              !inViewText && ' -translate-x-full opacity-0',
              `${poppins.className} text-xs transition-all delay-75 duration-500 md:text-base`
            )}
          >
            <strong className=" font-extrabold text-light-orchid-600">¡Bienvenidos a Valuñas!</strong> somos un equipo
            de expertas en cuidado de uñas que nos apasiona ayudarte a lucir y sentirte espectacular. Ofrecemos
            servicios personalizados y de alta calidad para que puedas disfrutar de una experiencia de spa de uñas única
            en Medellín.
            <br />
            <br />
            En nuestro spa, nos enfocamos en el cuidado de tus manos y pies, utilizando productos de alta calidad y
            técnicas avanzadas para asegurarnos de que tus uñas queden perfectamente arregladas y saludables. Ofrecemos
            una amplia variedad de servicios, incluyendo manicuras, pedicuras, uñas acrílicas, uñas de gel, diseños de
            uñas personalizados, entre otros.
          </p>
        </article>
        <Image
          src={AboutImg}
          className="h-full w-full rounded-lg object-cover"
          alt="Sobre Nosotras - Valunas Nails Spa"
        />
      </div>
    </section>
  )
}

export default About

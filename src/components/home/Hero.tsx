import Image from 'next/image'
import { projectFonts } from '@/utils'
import HandLeft from '/public/images/mano-1.png'
import HandRight from '/public/images/mano-2.png'
import Particles from './Particles'
import { WhatsAppLink } from './common'

const { vibur, sofia } = projectFonts

const Home = () => {
  return (
    <main
      className={`${sofia.className} relative grid h-[calc(100vh-72px)]  place-content-center place-items-center overflow-hidden px-2 text-center`}
    >
      <Particles />
      <Image
        src={HandLeft}
        alt="Manicura - Valuñas"
        aria-hidden="true"
        className="absolute -left-20 bottom-0 z-0 max-w-[300px] -rotate-12 opacity-50 md:max-w-[500px] xl:max-w-[700px]  "
      />
      <Image
        src={HandRight}
        alt="Manicura - Valuñas"
        aria-hidden="true"
        className="absolute -right-20 top-8 z-0 max-w-[300px] -rotate-12 opacity-50 md:top-0  md:max-w-[500px] md:rotate-12 xl:max-w-[700px]  "
      />
      <h1
        className={`${vibur.className}  relative z-10 text-xl font-bold text-light-orchid-500  md:text-2xl lg:text-3xl   `}
      >
        Valuñas
      </h1>
      <h2 className="relative z-10 text-[2.5rem] font-bold  leading-[1] shadow-black   md:text-7xl lg:text-8xl">
        Encuentra la <strong className=" text-light-orchid-500 ">belleza </strong>
        <br /> en tus <strong className=" text-light-orchid-500 ">manos</strong>
      </h2>
      <WhatsAppLink />
    </main>
  )
}
export default Home

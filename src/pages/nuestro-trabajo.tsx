import { Loading, MasonryGridImages } from '@/components'
import { Sofia } from 'next/font/google'
import Head from 'next/head'
import { IoLogoInstagram } from 'react-icons/io'

const sofia = Sofia({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Nuestro trabajo | Valuñas - Nails Spa</title>
      </Head>
      <Loading/>

      <section className={`${sofia.className} relative z-10  py-5 lg:py-7 `}>
        <div className="mx-auto  max-w-7xl space-y-5 px-5">
          <h1 className=" text-center    text-[2.5rem]  font-bold text-light-orchid-500 sm:text-5xl lg:text-6xl">
            Nuestro trabajo
          </h1>

          <MasonryGridImages />
          <div className="space-y-5 text-center">
            <h3 className="    text-[2.5rem] font-bold text-light-orchid-500 sm:text-5xl lg:text-6xl">
              ¿Quieres ver más?
            </h3>
            <a
              className="mx-auto flex max-w-max items-center gap-2 rounded-md border border-light-orchid-500 bg-light-orchid-500 px-5 py-2 font-medium text-light-orchid-50 transition-colors hover:bg-light-orchid-50 hover:text-light-orchid-500 text-lg"
              href="https://www.instagram.com/valunas_nailsspa/"
              target="_blank"
            >
              Siguenos en Instagram
              <IoLogoInstagram className="h-6 w-6" />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

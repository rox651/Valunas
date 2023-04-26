import { About,  Hero, Loading, Pricing } from '@/components'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Valuñas - Nails Spa</title>
      </Head>
      <Loading />
      <Hero />
      <About />
      <Pricing />
    </>
  )
}

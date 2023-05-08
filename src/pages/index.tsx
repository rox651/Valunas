import { About, Hero, OurWork, Pricing, Contact, Layout } from '@/components'

export default function Home() {
  return (
    <>
      <Layout
        pageName="Manicuras, pedicuras y diseños de uñas en Medellín"
        pageDescription="Valuñas - nails spa ofrecemos servicios personalizados de manicuras, pedicuras, uñas acrílicas y diseños de uñas en Medellín. ¡Ven a visitarnos y disfruta de una experiencia única de spa de uñas en la ciudad!"
      >
        <Hero />
        <About />
        <Pricing />
        <OurWork />
        <Contact />
      </Layout>
    </>
  )
}

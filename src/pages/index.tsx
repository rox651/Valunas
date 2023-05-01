import { About, Hero, OurWork, Pricing, Contact } from '@/components'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>{`Valuñas - Nails spa | Manicuras, pedicuras y diseños de uñas en Medellín`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="Valuñas - Valentina Tovar" />
        <meta
          name="description"
          content={`Valuñas - nails spa ofrecemos servicios personalizados de manicuras, pedicuras, uñas acrílicas y diseños de uñas en Medellín. ¡Ven a visitarnos y disfruta de una experiencia única de spa de uñas en la ciudad!`}
        />
        <meta name="copyright" content="Valuñas - Valentina Tovar" />
        <meta name="image" content="" />
        <meta name="url" content="" />
        <meta
          name="keywords"
          content={`Valuñas - nails spa,Manicuras en Medellín,Pedicuras en Medellín,Uñas acrílicas en Medellín,Diseños de uñas en Medellín,Spa de uñas en Medellín`}
        />
        <meta name="google-site-verification" content="" />
        <meta
          property="og:title"
          content={`Valuñas - Nails spa | Manicuras, pedicuras y diseños de uñas en Medellín`}
        />
        <meta
          property="og:description"
          content={`Valuñas - nails spa ofrecemos servicios personalizados de manicuras, pedicuras, uñas acrílicas y diseños de uñas en Medellín. ¡Ven a visitarnos y disfruta de una experiencia única de spa de uñas en la ciudad!`}
        />
        <meta property="og:image" content={``} />
        <meta property="og:url" content={``} />
        <meta property="og:type" content="article" />

        {/* <meta property="fb:app_id" content="710360040603207" /> */}

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Valuñas - Nails spa | Manicuras, pedicuras y diseños de uñas en Medellín" />
        <meta
          name="twitter:description"
          content="Valuñas - nails spa ofrecemos servicios personalizados de manicuras, pedicuras, uñas acrílicas y diseños de uñas en Medellín. ¡Ven a visitarnos y disfruta de una experiencia única de spa de uñas en la ciudad!"
        />
        <meta name="twitter:image" content={``} />
      </Head>
      <Hero />
      <About />
      <Pricing />
      <OurWork />
      <Contact />
    </>
  )
}

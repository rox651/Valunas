import Head from 'next/head'
import { CircleText, HandCircle, Header, Footer } from '@/components'

interface MainLayoutProps {
  pageName: string
  children: React.ReactNode
  pageDescription: string
}

export const Layout = ({ children, pageName, pageDescription }: MainLayoutProps) => {
  return (
    <>
      <Head>
        <title>{`Valuñas - Nails spa | ${pageName}`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="Valuñas - Valentina Tovar" />
        <meta name="description" content={pageDescription} />
        <meta name="copyright" content="Valuñas - Valentina Tovar" />
        <meta name="image" content="" />
        <meta name="url" content="" />
        <meta
          name="keywords"
          content={`${pageName}, Valuñas - nails spa,Manicuras en Medellín,Spa de uñas,Pedicuras en Medellín,Uñas acrílicas en Medellín,Diseños de uñas en Medellín,Spa de uñas en Medellín`}
        />
        {/* <meta name="google-site-verification" content="" /> */}
        <meta property="og:title" content={`Valuñas - Nails spa | ${pageName}`} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={``} />
        <meta property="og:url" content={``} />
        <meta property="og:type" content="article" />

        {/* <meta property="fb:app_id" content=" /> */}

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={`Valuñas - Nails spa | ${pageName}`} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={``} />
      </Head>
      <Header />
      {children}
      <Footer />
      <a
        target="_blank"
        href="https://api.whatsapp.com/send?phone=+573174398619&text=Hola!%20Quiero%20saber%20precios%20de%20los%20servicios!"
        className="fixed bottom-0 z-50 grid place-items-center "
      >
        <CircleText classNames=" w-[130px] h-[130px] md:w-[175px] md:h-[175px] animate-[spin_8s_linear_infinite] " />
        <HandCircle classNames="absolute w-[70px] h-[70px]   md:w-[100px] md:h-[105px] " />
      </a>
    </>
  )
}

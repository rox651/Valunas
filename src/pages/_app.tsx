import NextNProgress from 'nextjs-progressbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress color="#c86dc1" />
      <Component {...pageProps} />
    </>
  )
}

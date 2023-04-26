import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'

import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { Layout } from '@/components/layout'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Component key={router.asPath} {...pageProps} />
      </AnimatePresence>
    </Layout>
  )
}

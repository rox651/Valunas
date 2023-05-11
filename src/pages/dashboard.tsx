import Head from 'next/head'
import { BigCalendar } from '@/components'

const dashboard = () => {
  return (
    <div>
      <Head>
        <title>Dashboard</title>
      </Head>
      <BigCalendar />
    </div>
  )
}

export default dashboard

import { DashBoardCalendar } from '@/components'
import Head from 'next/head'

const dashboard = () => {
  return (
    <div>
      <Head>
        <title>Dashboard</title>
      </Head>
      <DashBoardCalendar />
    </div>
  )
}

export default dashboard

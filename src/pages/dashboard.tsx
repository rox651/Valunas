import { AddEventButton, BigCalendar, CalendarModal } from '@/components'
import Head from 'next/head'

const dashboard = () => {
  return (
    <div>
      <Head>
        <title>Dashboard</title>
      </Head>
      <BigCalendar />
      <CalendarModal />
      <AddEventButton />
    </div>
  )
}

export default dashboard

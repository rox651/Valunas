import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { addHours } from 'date-fns'
import { localizer, getCalendarMessage } from '@/utils/helpers'
import CalendarEvent from './CalendarEvent'
import CalendarModal from './CalendarModal'

const events = [
  {
    title: 'Manicura',
    notes: 'Hay que comprar pastel',
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: '#c86dc1',
    user: {
      _id: '123',
      name: 'homero',
    },
  },
]

const BigCalendar = () => {
  return (
    <>
      <Calendar
        culture="es"
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 800 }}
        messages={getCalendarMessage()}
        components={{
          event: CalendarEvent,
        }}
      />
      <CalendarModal />
    </>
  )
}

export default BigCalendar

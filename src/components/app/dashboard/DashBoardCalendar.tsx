import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { useCalendarStore, useCalendarUI } from '@/store'
import { localizer, getCalendarMessage } from '@/utils'

import CalendarEvent from './CalendarEvent'
import CalendarModal from './CalendarModal'

const DashBoardCalendar = () => {
  const events = useCalendarStore((state) => state.events)
  const openModal = useCalendarUI((state) => state.openModal)

  const onDoubleClick = () => {
    openModal()
  }

  return (
    <>
      <Calendar
        culture="es"
        localizer={localizer}
        events={events}
        startAccessor="date"
        endAccessor="date"
        style={{ height: 800 }}
        messages={getCalendarMessage()}
        components={{
          event: CalendarEvent,
        }}
        onDoubleClickEvent={onDoubleClick}
      />
      <CalendarModal />
    </>
  )
}

export default DashBoardCalendar

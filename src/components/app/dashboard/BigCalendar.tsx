import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { useCalendarStore, useCalendarUI } from '@/store'
import { getCalendarMessage, localizer } from '@/utils'

import CalendarEvent from './CalendarEvent'
import { CalendarEventProps } from '../types'

const BigCalendar = () => {
  const events = useCalendarStore((state) => state.events)
  const updateActiveEvent = useCalendarStore((state) => state.updateActiveEvent)
  const openModal = useCalendarUI((state) => state.openModal)

  const onDoubleClick = () => {
    openModal()
  }

  const onSelect = (event: CalendarEventProps) => {
    updateActiveEvent(event)
  }

  return (
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
      onSelectEvent={onSelect}
      onDoubleClickEvent={onDoubleClick}
    />
  )
}

export default BigCalendar

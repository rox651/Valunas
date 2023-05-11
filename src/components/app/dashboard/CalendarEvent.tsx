import { format } from 'date-fns'
import { CalendarEventProps } from '../types'

const CalendarEvent = ({ event }: { event: CalendarEventProps }) => {
  return (
    <article className="grid">
      <strong>{event.appointmentType}</strong>
      <span>{format(event.date, 'PPpp')}</span>
    </article>
  )
}

export default CalendarEvent

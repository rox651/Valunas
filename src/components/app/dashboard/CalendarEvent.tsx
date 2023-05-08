import { CalendarEventProps } from '../types'

const CalendarEvent = ({ event }: { event: CalendarEventProps }) => {
  return (
    <article className="grid">
      <strong>{event.title}</strong>
      <span>{event.user.name}</span>
    </article>
  )
}

export default CalendarEvent

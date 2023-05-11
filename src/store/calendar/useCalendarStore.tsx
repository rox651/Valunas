import { CalendarEventProps } from '@/components'
import { create } from 'zustand'

interface calendarState {
  events: CalendarEventProps[]
}

export const useCalendarStore = create<calendarState>((set) => ({
  events: [
    {
      name: 'Homero',
      date: new Date(),
      appointmentType: 'Manos y pies tradi',
      description: 'Quiero que sean de color azul',
    },
  ],
}))

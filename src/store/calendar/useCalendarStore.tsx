import { CalendarEventProps } from '@/components'
import { create } from 'zustand'

interface calendarState {
  events: CalendarEventProps[]
  activeEvent: CalendarEventProps | null
  updateActiveEvent: (newEvent: CalendarEventProps) => void
  addNewEvent: (newEvent: CalendarEventProps) => void
}

export const useCalendarStore = create<calendarState>((set) => ({
  events: [
    {
      _id: '12312312313156546',
      name: 'Homero',
      date: new Date(),
      appointmentType: 'Manos y pies tradi',
      description: 'Quiero que sean de color azul',
    },
    {
      _id: '45452312313156546',
      name: 'Gabriela',
      date: new Date('2023-05-23'),
      appointmentType: 'Manos y pies tradi',
      description: 'Quiero que sean de color azul',
    },
  ],
  activeEvent: null,
  updateActiveEvent: (newEvent) => set({ activeEvent: newEvent }),
  addNewEvent: (newEvent) => set((state) => ({ activeEvent: null, events: [...state.events, newEvent] })),
}))

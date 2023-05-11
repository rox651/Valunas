import { Calendar } from 'react-big-calendar'

export interface CalendarEventProps {
  title: string
  notes: string
  start: Date
  end: Date
  bgColor: string
  user: {
    _id: string
    name: string
  }
}

export enum AppointmentOptions {
  'Manos y pies tradi' = 'Manos y pies tradi',
  'Manos y pies semi' = 'Manos y pies semi',
  'Acrílico esculpido' = 'Acrílico esculpido',
}

export interface CalendarInputs {
  name: string
  date: Date
  appointmentType: AppointmentOptions
  description: string
}

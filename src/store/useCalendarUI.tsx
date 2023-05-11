import { create } from 'zustand'

interface calendarUIState {
  calendarModalState: boolean
}

export const useCalendarUI = create<calendarUIState>((set) => ({
  calendarModalState: false,
}))

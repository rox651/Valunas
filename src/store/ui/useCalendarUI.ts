import { create } from 'zustand'

interface calendarUIState {
  isOpenModal: boolean
  openModal: () => void
  closeModal: () => void
}

export const useCalendarUI = create<calendarUIState>((set) => ({
  isOpenModal: false,
  openModal: () => set({ isOpenModal: true }),
  closeModal: () => set({ isOpenModal: false }),
}))

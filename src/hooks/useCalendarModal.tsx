import { useRef } from 'react'
import { useOnClickOutside } from '@/hooks'
import { useCalendarUI, useCalendarStore } from '@/store'

const useCalendarModal = () => {
  const modalRef = useRef(null)
  const isOpenModal = useCalendarUI((state) => state.isOpenModal)
  const closeModal = useCalendarUI((state) => state.closeModal)
  const activeEvent = useCalendarStore((state) => state.activeEvent)
  const addNewActive = useCalendarStore((state) => state.addNewEvent)

  useOnClickOutside(modalRef, closeModal)

  return { modalRef, closeModal, isOpenModal, addNewActive, activeEvent }
}

export default useCalendarModal

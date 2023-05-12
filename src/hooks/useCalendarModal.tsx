import { useRef, useEffect } from 'react'
import { useOnClickOutside } from '@/hooks'
import { useCalendarUI, useCalendarStore } from '@/store'
import { UseFormReset } from 'react-hook-form'
import { CalendarEventProps } from '@/components'

const useCalendarModal = (reset: UseFormReset<CalendarEventProps>) => {
  const modalRef = useRef(null)
  const isOpenModal = useCalendarUI((state) => state.isOpenModal)
  const closeModal = useCalendarUI((state) => state.closeModal)
  const activeEvent = useCalendarStore((state) => state.activeEvent)
  const addNewActive = useCalendarStore((state) => state.addNewEvent)

  useOnClickOutside(modalRef, closeModal)

  useEffect(() => {
    if (activeEvent !== null) {
      reset({ ...activeEvent })

      return
    }
  }, [activeEvent, reset])

  return { modalRef, closeModal, isOpenModal, addNewActive }
}

export default useCalendarModal

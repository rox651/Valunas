import { useRef, useEffect, useMemo } from 'react'
import { UseFormReset } from 'react-hook-form'
import { useOnClickOutside } from '@/hooks'
import { useCalendarUI, useCalendarStore } from '@/store'
import { CalendarEventProps } from '@/components'

const useCalendarModal = (reset: UseFormReset<CalendarEventProps>) => {
  const modalRef = useRef(null)
  const isOpenModal = useCalendarUI((state) => state.isOpenModal)
  const closeModal = useCalendarUI((state) => state.closeModal)
  const activeEvent = useCalendarStore((state) => state.activeEvent)
  const addNewActive = useCalendarStore((state) => state.addNewEvent)
  const editEvent = useCalendarStore((state) => state.editEvent)

  const isActiveIdEventTrue = activeEvent?._id !== null
  const titleForm = useMemo(() => (isActiveIdEventTrue ? 'Edita tu cita' : 'Agenda tu cita'), [isActiveIdEventTrue])
  const submitText = useMemo(() => (isActiveIdEventTrue ? 'Editar' : 'Agendar'), [isActiveIdEventTrue])

  useOnClickOutside(modalRef, closeModal)

  useEffect(() => {
    console.log(activeEvent)

    if (activeEvent !== null) {
      reset({ ...activeEvent })
      return
    }
  }, [activeEvent])

  return { modalRef, closeModal, isOpenModal, addNewActive, editEvent, titleForm, submitText }
}

export default useCalendarModal

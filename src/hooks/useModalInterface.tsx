import { useRef } from 'react'
import { useOnClickOutside } from '@/hooks'
import { useCalendarUI } from '@/store'

const useModalInterface = () => {
  const modalRef = useRef(null)
  const isOpenModal = useCalendarUI((state) => state.isOpenModal)
  const closeModal = useCalendarUI((state) => state.closeModal)

  useOnClickOutside(modalRef, closeModal)
  return { modalRef, isOpenModal }
}

export default useModalInterface

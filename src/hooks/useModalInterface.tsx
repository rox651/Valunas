import { useRef } from 'react'
import { useOnClickOutside, useToggle } from '@/hooks'

const useModalInterface = () => {
  const modalRef = useRef(null)
  const [isOpenModal, setIsOpenModal] = useToggle(true)
  const closeModal = () => setIsOpenModal(false)
  useOnClickOutside(modalRef, closeModal)
  return { modalRef, isOpenModal }
}

export default useModalInterface

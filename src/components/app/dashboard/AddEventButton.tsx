import { AiFillPlusCircle } from 'react-icons/ai'
import { useCalendarStore, useCalendarUI } from '@/store'

const AddEventButton = () => {
  const updateActiveEvent = useCalendarStore((state) => state.updateActiveEvent)
  const openModal = useCalendarUI((state) => state.openModal)

  const onClick = () => {
    updateActiveEvent({
      _id: null,
      date: new Date(),
      description: '',
      appointmentType: '',
    })
    openModal()
  }

  return (
    <AiFillPlusCircle
      onClick={onClick}
      role="button"
      className=" fixed bottom-3 right-3 z-40 text-5xl text-light-orchid-500 transition-transform duration-300 hover:rotate-90"
    />
  )
}

export default AddEventButton

import { useForm, SubmitHandler, Controller } from 'react-hook-form'

import DatePicker, { registerLocale } from 'react-datepicker'
import es from 'date-fns/locale/es'
import 'react-datepicker/dist/react-datepicker.css'

import clsx from 'clsx'

import { calendarFormValidations } from '@/utils'
import { useCalendarModal } from '@/hooks'
import { CalendarEventProps } from '../types'
import { ErrorFormMessage } from '../common'

registerLocale('es', es)

const CalendarModal = () => {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CalendarEventProps>()
  const { modalRef, isOpenModal, addNewActive, closeModal, editEvent, titleForm, submitText } = useCalendarModal(reset)

  const onSubmit: SubmitHandler<CalendarEventProps> = (data) => {
    if (data._id) {
      editEvent(data)
    } else {
      addNewActive(data)
    }
    closeModal()
  }

  return (
    <div
      role="dialog"
      className={clsx(
        !isOpenModal && 'invisible opacity-0',
        ` duration- fixed  inset-0 z-50 grid place-items-center bg-black/50 p-5 transition-[visibility_opacity]`
      )}
    >
      <form
        ref={modalRef}
        onSubmit={handleSubmit(onSubmit)}
        className=" grid h-full max-h-[500px] w-full max-w-[600px] place-items-center overflow-y-auto rounded-md bg-white p-10"
      >
        <h2 className="mb-5  text-center text-4xl font-semibold">{titleForm}</h2>

        <fieldset className="grid w-full">
          <label className="font-bold" htmlFor="name">
            Dia de la cita
          </label>
          <Controller
            control={control}
            name="date"
            rules={calendarFormValidations.date}
            render={({ field: { onChange, value } }) => (
              <DatePicker
                className=" w-full border px-2 py-1 capitalize outline-none"
                placeholderText="Select date"
                onChange={(date) => onChange(date)}
                selected={value}
                dateFormat="MMMM d, yyyy h:mm aa"
                showTimeSelect
                timeIntervals={15}
                timeCaption="Hora"
                locale="es"
                minDate={new Date()}
              />
            )}
          />
          {errors.date && <ErrorFormMessage message={errors.date.message} />}
        </fieldset>
        <fieldset className="grid w-full">
          <label className="font-bold" htmlFor="">
            Servicio
          </label>
          <select
            {...register('appointmentType', calendarFormValidations.appointmentType)}
            className="border px-2 py-1 outline-none"
          >
            <option value="Manos y pies tradi">Manos y pies tradi</option>
            <option value="Manos y pies semi">Manos y pies semi</option>
            <option value="Acrílico esculpido">Acrílico esculpido</option>
          </select>
          {errors.appointmentType && <ErrorFormMessage message={errors.appointmentType.message} />}
        </fieldset>

        <fieldset className=" grid w-full">
          <label className="font-bold" htmlFor="name">
            Descripcion <span className="font-normal">(Opcional)</span>
          </label>
          <input className="border px-3 py-2 outline-none" type="text" {...register('description')} />
        </fieldset>
        <button
          type="submit"
          className="mx-auto mt-8 flex max-w-max items-center gap-2 rounded-md border  border-light-orchid-500 bg-light-orchid-500 px-5 py-2 font-medium text-light-orchid-50 transition-colors hover:bg-light-orchid-50 hover:text-light-orchid-500 md:text-lg"
        >
          {submitText}
        </button>
      </form>
    </div>
  )
}

export default CalendarModal

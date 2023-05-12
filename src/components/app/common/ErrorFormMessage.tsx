const ErrorFormMessage = ({ message }: { message: string | undefined }) => {
  return (
    <small role="alert" className=" mt-1 text-base font-bold text-red-500">
      {message}
    </small>
  )
}

export default ErrorFormMessage

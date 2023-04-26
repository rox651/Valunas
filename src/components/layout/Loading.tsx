import { motion } from 'framer-motion'
import { HandLoading } from '../icons'
const Loading = () => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: '-100%' }}
      exit={{ y: 0 }}
      transition={{ duration: 1,delay:1, ease: 'easeInOut' }}
      className="fixed  left-0 top-0 z-[2000] grid h-screen w-full place-items-center bg-light-orchid-200"
    >
      <HandLoading />
    </motion.div>
  )
}

export default Loading

import clsx from 'clsx'
import { GiVanillaFlower } from 'react-icons/gi'
import { useInView } from 'react-intersection-observer'

interface pricingList {
  service: string
  price: string | number
}

const PricingListItem = ({ list }: { list: pricingList }) => {
  const { ref, inView } = useInView()
  return (
    <li
      ref={ref}
      className={clsx(
        !inView && ' translate-y-5 opacity-0',
        ' grid grid-cols-[0.2fr_2fr_1fr] items-center gap-5 border-b-[1px] border-light-orchid-700 text-xs transition-all delay-100 duration-500 md:text-sm'
      )}
    >
      <GiVanillaFlower className="h-6 w-6 text-light-orchid-800" /> {list.service}
      <span className=" text-right font-bold text-light-orchid-950">{list.price}</span>
    </li>
  )
}

export default PricingListItem

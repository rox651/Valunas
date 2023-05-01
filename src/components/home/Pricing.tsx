import { Poppins, Sofia } from 'next/font/google'
import PricingListItem from './PricingListItem'
import { listOfPrices } from '@/utils/constants/'

const sofia = Sofia({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})
const poppins = Poppins({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

const Pricing = () => {
  return (
    <section id="precios" className={`${sofia.className} py-10`}>
      <div className="  mx-auto   max-w-7xl   px-5 py-3 ">
        <div className="text-center ">
          <h2 className=" text-center text-[2.5rem] font-bold text-light-orchid-500 sm:text-5xl lg:text-6xl">
            Lista de precios
          </h2>
          <p className={`${poppins.className} mt-4 text-sm text-gray-600 sm:text-base`}>
            Aqui encontraras nuestra lista de precios para el tipo de tratamiento que desees
          </p>
        </div>
        <ul
          className={`${poppins.className} mt-5 grid gap-3 rounded-lg bg-light-orchid-200 p-5  shadow-lg md:grid-cols-2 md:gap-10 md:p-7 lg:mt-10  lg:grid-cols-3 lg:p-10 `}
        >
          {listOfPrices.map((list) => (
            <PricingListItem list={list} key={list.service} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Pricing

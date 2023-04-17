import { Poppins, Sofia } from "next/font/google";
import PricingListItem from "./PricingListItem";

const listOfPrices = [
   {
      service: "Manos y pies tradi",
      price: "40.000",
   },
   {
      service: "Manos tradi",
      price: "23.000",
   },
   {
      service: "Pies tradi",
      price: "20.000",
   },
   {
      service: "Manos y pies semi",
      price: "80.000",
   },
   {
      service: "Manos semi",
      price: "45.000",
   },
   {
      service: "Pies semi",
      price: "40.000",
   },
   {
      service: "Acrílico esculpido",
      price: "100.000",
   },
   {
      service: "Forrado (Acrílico o gel)",
      price: "80.000",
   },
   {
      service: "Retoque (Acrílico o gel)",
      price: "70.000",
   },
   {
      service: "Acrílico Babyboomer",
      price: "120.000",
   },
   {
      service: "Retiro Acrílico",
      price: "15.000",
   },
   {
      service: "Retiro semi",
      price: "10.000",
   },
];

const sofia = Sofia({
   weight: ["400"],
   style: ["normal"],
   subsets: ["latin"],
   display: "swap",
});
const poppins = Poppins({
   weight: ["400"],
   style: ["normal"],
   subsets: ["latin"],
   display: "swap",
});

const Pricing = () => {
   return (
      <section className={`${sofia.className} py-10`}>
         <div className="  mx-auto   max-w-7xl   px-5 py-3 ">
            <div className="text-center ">
               <h2 className={` text-[2.5rem] font-bold sm:text-5xl lg:text-6xl`}>
                  Lista de precios
               </h2>
               <p className={`${poppins.className} mt-4 text-sm text-gray-600 sm:text-base`}>
                  Aqui encontraras nuestra lista de precios para el tipo de tratamiento que desees
               </p>
            </div>
            <ul
               className={`${poppins.className} mt-5 grid gap-3 rounded-lg bg-light-orchid-200 p-5  shadow-lg md:grid-cols-2 md:gap-10 md:p-7 lg:mt-10  lg:grid-cols-3 lg:p-10 `}
            >
               {listOfPrices.map(list => (
                  <PricingListItem list={list} key={list.service} />
               ))}
            </ul>
         </div>
      </section>
   );
};

export default Pricing;

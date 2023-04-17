import Image from "next/image";
import { Poppins, Sofia } from "next/font/google";

import AboutImg1 from "/public/images/take-care-nails.jpg";

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

const About = () => {
   return (
      <section className={`${sofia.className} relative z-10 bg-light-orchid-200 py-5 lg:py-10`}>
         <div className="  mx-auto  grid  max-w-7xl items-center gap-5 md:gap-10 px-5 md:grid-cols-[1.3fr_1fr]  ">
            <article className=" space-y-4 ">
               <h2 className="text-center text-[2.5rem] font-bold md:text-4xl lg:text-left lg:text-6xl ">
                  Sobre nosotras
               </h2>
               <p className={`${poppins.className} text-xs md:text-sm`}>
                  ¡Bienvenidos a Valunas! Somos un exclusivo spa de uñas ubicado en el corazón de
                  Medellín, dedicado a brindarte una experiencia rejuvenecedora y relajante. Nuestro
                  equipo de expertos técnicos en uñas está comprometido en ofrecerte servicios de
                  primera clase que superen tus expectativas.
               </p>
               <p className={`${poppins.className} text-xs md:text-sm`}>
                  En Valunas, entendemos la importancia del cuidado personal y el papel que unas
                  uñas bien cuidadas juegan en realzar tu apariencia general y aumentar tu
                  confianza. Ofrecemos una amplia gama de servicios, incluyendo manicuras,
                  pedicuras, extensiones de uñas, nail art y mucho más. Ya sea que busques una
                  clásica manicura francesa, un diseño de uñas de moda o una relajante pedicura de
                  spa, nuestros talentosos técnicos te ayudarán a lograr el look perfecto.
               </p>
            </article>
            <Image
               src={AboutImg1}
               className="h-full w-full rounded-lg object-cover"
               alt="valuñas nails spa - sobre nosotras"
            />
         </div>
      </section>
   );
};

export default About;

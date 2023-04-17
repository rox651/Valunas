import Image from "next/image";
import { Vibur, Sofia } from "next/font/google";
import HandLeft from "/public/images/hand-1.png";
import HandRight from "/public/images/hand-2.png";
import Particles from "./Particles";

// import { gsap } from "gsap/dist/gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

const sofia = Sofia({
   weight: ["400"],
   style: ["normal"],
   subsets: ["latin"],
   display: "swap",
});
const vibur = Vibur({
   weight: ["400"],
   style: ["normal"],
   subsets: ["latin"],
   display: "swap",
});

const Home = () => {

   return (
      <main
         className={`${sofia.className} relative grid h-[calc(100vh-88px)]  place-content-center place-items-center overflow-hidden px-2 text-center`}
      >
         <Particles />
         <Image
            src={HandLeft}
            alt="hand"
            aria-hidden="true"
            className="absolute -left-20 bottom-0 z-0 max-w-[300px] -rotate-12 opacity-50 md:max-w-[500px]  lg:max-w-[700px]"
         />
         <Image
            src={HandRight}
            alt="hand"
            aria-hidden="true"
            className="absolute -right-20 top-8 z-0 max-w-[300px] -rotate-12 opacity-50 md:top-0 md:max-w-[500px] md:rotate-12  lg:max-w-[700px]"
         />
         <h1
            className={`${vibur.className}  relative z-10 text-xl font-bold text-light-orchid-500  md:text-2xl lg:text-3xl`}
         >
            Valuñas
         </h1>
         <h2 className="relative z-10 text-[2.5rem] font-bold  leading-[1]  md:text-7xl lg:text-8xl">
            En <span className=" text-light-orchid-500 ">busca </span>
            de <br /> <span className=" text-light-orchid-500">uñas</span> elegantes
         </h2>
      </main>
   );
};
export default Home;

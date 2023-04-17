import { ReactElement } from "react";
import Header from "./Header";
import { Footer } from "./Footer";
import { CircleText, Hand } from "../icons";

export const Layout = ({ children }: { children: ReactElement }) => {
   return (
      <>
         <Header />
         {children}
         <Footer />
         <a href="tel:+573174398619" className="fixed bottom-0 z-50 grid place-items-center ">
            <CircleText classNames=" w-[130px] h-[130px] md:w-[175px] md:h-[175px] animate-[spin_8s_linear_infinite] " />
            <Hand classNames="absolute w-[70px] h-[70px]   md:w-[100px] md:h-[105px] " />
         </a>
      </>
   );
};

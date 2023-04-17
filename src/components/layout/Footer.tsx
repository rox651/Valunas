import { useMemo } from "react";
import { IoLogoWhatsapp, IoLogoInstagram } from "react-icons/io";
import { FaTiktok } from "react-icons/fa";

const navigation = {
   main: [
      {
         href: "",
         name: "Sobre nosotras",
      },
      {
         href: "",
         name: "Como asignar una cita",
      },
      {
         href: "",
         name: "Nuestro trabajo",
      },
      {
         href: "",
         name: "Contactanos",
      },
   ],
   social: [
      {
         name: "Instagram",
         href: "https://www.instagram.com/valunas_nailsspa/",
         icon: <IoLogoInstagram className="h-6 w-6" />,
      },
      {
         name: "TikTok",
         href: "https://www.tiktok.com/@valunasnailsspa",
         icon: <FaTiktok className="h-5 w-5" />,
      },
      {
         name: "Whatsapp",
         href: "https://api.whatsapp.com/send?phone=+573174398619&text=Hola!%20Quiero%20saber%20precios%20de%20los%20servicios!",
         icon: <IoLogoWhatsapp className="h-6 w-6" />,
      },
   ],
};

export const Footer = () => {
   const date = useMemo(() => new Date(), []);

   return (
      <footer className="bg-white">
         <div className="mx-auto max-w-7xl overflow-hidden px-4 py-12 sm:px-6 lg:px-8">
            <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
               {navigation.main.map(item => (
                  <div key={item.name} className="px-5 py-2">
                     <a
                        href={item.href}
                        className="text-base text-light-orchid-500 transition-colors  hover:text-light-orchid-900"
                     >
                        {item.name}
                     </a>
                  </div>
               ))}
            </nav>
            <div className="mt-8 flex justify-center space-x-6">
               {navigation.social.map(item => {
                  return (
                     <a
                        key={item.name}
                        href={item.href}
                        className=" text-light-orchid-500 transition-colors hover:text-light-orchid-900"
                     >
                        <span className="sr-only">{item.name}</span>
                        {item.icon}
                     </a>
                  );
               })}
            </div>
            <p className="mt-8 text-center text-xs text-light-orchid-700 ">
               &copy; {date.getFullYear()} Valunas, Inc. All rights reserved.
            </p>
         </div>
      </footer>
   );
};

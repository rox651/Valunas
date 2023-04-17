import clsx from "clsx";
import { Poppins } from "next/font/google";
import { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";
import { Hand } from "../icons";
import Link from "next/link";
import HeaderLink from "./HeaderLink";

const poppins = Poppins({
   weight: ["400", "500", "600", "700", "800"],
   style: ["normal", "italic"],
   subsets: ["latin"],
   display: "swap",
});

const navLinks = [
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
];

const Header = () => {
   const [isNavbarOpen, setIsNavbarOpen] = useState<Boolean>(false);

   function toggleNavBar() {
      setIsNavbarOpen(state => !state);
   }
   return (
      <header className={`${poppins.className}  bg-transparent`}>
         <div className="  mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
            <HiOutlineMenuAlt1 onClick={toggleNavBar} className="text-xl lg:hidden" role="button" />
            <Link href="/">
               <Hand classNames="w-16 h-16 transition-opacity hover:opacity-80" />
            </Link>
            <nav
               role="menu"
               className={clsx(
                  !isNavbarOpen && "-translate-x-full",
                  " fixed left-0 top-0 z-50 flex h-screen flex-col gap-5 bg-light-orchid-400 p-4 text-xs shadow-lg transition-transform lg:static lg:h-auto lg:translate-x-0 lg:flex-row lg:bg-transparent lg:shadow-none"
               )}
            >
               <IoMdCloseCircleOutline
                  onClick={toggleNavBar}
                  className="block text-2xl text-white lg:hidden"
                  role="button"
               />
               {navLinks.map(link => (
                  <HeaderLink link={link} key={`${link.name} - header`} />
               ))}
            </nav>
            <button className="text-xs lg:text-sm">
               <FaUserCircle className=" text-xl lg:hidden" />
               <span className="hidden lg:block">Inicia sesión</span>
            </button>
         </div>
      </header>
   );
};

export default Header;

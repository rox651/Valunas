interface headerLink {
   name: string;
   href: string;
}

const HeaderLink = ({ link }: { link: headerLink }) => {
   const { name, href } = link;
   return (
      <a
         className="underline-link font-semibold text-white hover:text-white lg:font-normal lg:text-black lg:hover:text-light-orchid-500"
         href={href}
      >
         {name}
      </a>
   );
};

export default HeaderLink;

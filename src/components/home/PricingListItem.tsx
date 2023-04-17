import { GiVanillaFlower } from "react-icons/gi";

interface pricingList {
   service: string;
   price: string | number;
}

const PricingListItem = ({ list }: { list: pricingList }) => {
   return (
      <li className=" grid grid-cols-[0.2fr_2fr_1fr] items-center gap-5 text-xs border-b-[1px] border-light-orchid-700 md:text-sm">
         <GiVanillaFlower className="h-6 w-6 text-light-orchid-800" /> {list.service}
         <span className=" font-bold text-light-orchid-950 text-right">{list.price}</span>
      </li>
   );
};

export default PricingListItem;

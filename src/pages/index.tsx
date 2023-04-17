import { About, Hero, Pricing } from "@/components";
import Head from "next/head";

export default function Home() {
   return (
      <>
         <Head>
            <title>Valuñas - Nails Spa</title>
         </Head>
         <Hero />
         <About />
         <Pricing/>
      </>
   );
}

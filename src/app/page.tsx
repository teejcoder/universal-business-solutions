import Bookings from "@/components/bookings/Bookings";
import Hero from "@/components/hero/Hero";
import Products from "@/components/products/Products";
import Services from "@/components/services/Services";

export default function Home() {

  return (
    <div>
      <main className="">
        <Hero/>
        <Products/>
        <Services/>
        <Bookings/> 
      </main>
    </div>
  );
}

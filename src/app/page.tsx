import Bookings from "@/components/bookings/Bookings";
import Hero from "@/components/hero/Hero";
import Products from "@/components/products/Products";
import Services from "@/components/services/Services";
import FAQ from "@/components/faq/FAQ";
import Testimonials from "@/components/testimonials/Testimonials";
import WhyChooseUs from "@/components/why-choose-us/WhyChooseUs";
import FinalCTA from "@/components/cta/FinalCTA";

export default function Home() {

  return (
    <div>
      <main className="">
        <Hero/>
        <Products/>
        <Services/>
        <Bookings/> 
        <FAQ/>
        <Testimonials/>
        <WhyChooseUs/>
        <FinalCTA/>
      </main>
    </div>
  );
}

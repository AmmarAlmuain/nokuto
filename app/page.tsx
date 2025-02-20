import AboutUs from "@/components/about-us";
import Faq from "@/components/faq";
import Hero from "@/components/hero";
import HowItWork from "@/components/how-it-works";
import Products from "@/components/products";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <main className="px-20 py-20 max-xl:px-4">
        <Hero />
        <div className="py-20 divider max-xl:py-10"></div>
        <Products />
        <div className="py-20 divider max-xl:py-10"></div>
        <AboutUs />
        <div className="py-20 divider max-xl:py-10"></div>
        <Testimonials />
        <div className="py-20 divider max-xl:py-10"></div>
        <Faq />
        <div className="py-20 divider max-xl:py-10"></div>
        <HowItWork />
      </main>
    </>
  );
}

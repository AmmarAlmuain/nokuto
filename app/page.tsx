import AboutUs from "@/components/about-us";
import Faq from "@/components/faq";
import HeroContainer from "@/components/hero-container";
import HowItWorkContainer from "@/components/how-it-works-container";
import Products from "@/components/products";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <main className="px-20 py-20 max-xl:px-4">
        <HeroContainer />
        <div className="divider py-20 max-xl:py-10"></div>
        <Products />
        <div className="divider py-20 max-xl:py-10"></div>
        <AboutUs />
        <div className="divider py-20 max-xl:py-10"></div>
        <Testimonials />
        <div className="divider py-20 max-xl:py-10"></div>
        <Faq />
        <div className="divider py-20 max-xl:py-10"></div>
        <HowItWorkContainer />
      </main>
    </>
  );
}

import Faq from "@/components/faq";
import HeroContainer from "@/components/hero-container";
import HowItWorkContainer from "@/components/how-it-works-container";

export default function Home() {
  return (
    <>
      <main className="px-20 py-20 max-xl:px-4">
        <HeroContainer />
        <div className="divider py-20 max-xl:py-10"></div>
        <Faq />
        <div className="divider py-20 max-xl:py-10"></div>
        <HowItWorkContainer />
      </main>
    </>
  );
}

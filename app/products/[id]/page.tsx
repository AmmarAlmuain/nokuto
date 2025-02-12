import Faq from "@/components/faq";
import Details from "@/components/product/details";
import Reviews from "@/components/product/reviews";

export default function ProfuctDetails() {
  return (
    <>
      <main className="px-20 py-20 max-xl:px-4">
        <Details />
        <div className="py-20 divider max-xl:py-10"></div>
        <Reviews />
        <div className="py-20 divider max-xl:py-10"></div>
        <Faq />
      </main>
    </>
  );
}

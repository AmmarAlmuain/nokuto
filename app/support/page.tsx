import CancellationPolicy from "@/components/cancellation-policy";
import Faq from "@/components/faq";
import ReturnPolicy from "@/components/return-policy";
import SupportHeader from "@/components/support-header";

export default function Support() {
  return (
    <>
      <main className="px-20 py-20 max-xl:px-4">
        <SupportHeader />
        <div className="py-20 divider max-xl:py-10"></div>
        <ReturnPolicy />
        <div className="py-20 divider max-xl:py-10"></div>
        <CancellationPolicy />
        <div className="py-20 divider max-xl:py-10"></div>
        <Faq />
      </main>
    </>
  );
}

import Phone from "./icons/phone";

export default function SupportHeader() {
  return (
    <>
      <section className="header w-full">
        <div className="w-full flex flex-col gap-y-20 max-xl:gap-y-[60px]">
          <div className="flex w-full gap-x-[50px] max-xl:flex-col max-xl:gap-y-[30px]">
            <div className="flex">
              <div className="flex flex-col w-[525px] max-xl:gap-y-4 gap-y-5 max-md:gap-y-[10px]">
                <div className="flex justify-between gap-x-1 max-md:flex-col">
                  <h1 className="text-[38px] max-xl:text-[28px] font-semibold uppercase text-grey/10 max-md:order-2 max-md:text-[28px]">
                    Nokuto Support.
                  </h1>
                  <span className="text-sm font-semibold uppercase text-grey/60 max-md:order-1">
                    Your Style Partner
                  </span>
                </div>
                <p className="text-grey/40 max-md:text-sm">
                  Always Here to Help You Navigate Fashion with Ease and
                  Confidence.
                </p>
              </div>
            </div>
            <div className="w-full px-10 flex gap-x-4 py-[30px] max-xl:gap-y-5 max-xl:flex-wrap border border-white/95 rounded-[14px]">
              <div className="flex flex-col w-[188px] gap-y-2 max-xl:gap-y-1.5 items-start justify-center">
                <span className="text-sm text-grey/40">Email</span>
                <span className="text-grey/15 font-semibold">
                  support@nokuto.com
                </span>
              </div>
              <div className="w-px border-r border-white/95 h-full"></div>
              <div className="flex flex-col w-[188px] gap-y-2 max-xl:gap-y-1.5 items-start justify-center">
                <span className="text-sm text-grey/40">Call Us On</span>
                <span className="text-grey/15 font-semibold">
                  +1 (555) 987-6543
                </span>
              </div>
              <div className="w-px border-r border-white/95 h-full"></div>
              <div className="flex flex-col w-[188px] gap-y-2 max-xl:gap-y-1.5 items-start justify-center">
                <span className="text-sm text-grey/40">Working Hours</span>
                <span className="text-grey/15 font-semibold">
                  24/7 Support Available
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-5">
            <div>
              <span className="font-medium text-grey/40">
                Our Office Locations
              </span>
            </div>
            <div className="p-10 max-xl:p-6 border max-xl:gap-y-[30px] max-xl:flex-wrap flex gap-x-10 justify-start items-center border-white/95 rounded-2xl">
              <div className="flex flex-col gap-y-6 max-xl:gap-y-5 w-full max-w-96">
                <div className="flex flex-col gap-y-[6px]">
                  <span className="text-grey/15 font-semibold">
                    Los Angeles, USA
                  </span>
                  <span className="text-sm text-grey/14">
                    456 Sunset Blvd, Suite 789, Los Angeles, CA 90001
                  </span>
                </div>
                <div className="flex gap-x-2.5">
                  <button className="px-5 flex opacity-50 cursor-not-allowed gap-x-[6px] py-[14px] justify-center items-center text-sm text-grey/15 font-medium border border-white/95 rounded-[32px]">
                    <Phone />
                    Call Now
                  </button>
                  <button className="px-5 flex opacity-50 cursor-not-allowed gap-x-[6px] py-[14px] bg-grey/15 justify-center items-center text-sm text-white font-medium rounded-[32px]">
                    Get Directions -&gt;
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-y-6 w-full max-w-96">
                <div className="flex flex-col gap-y-[6px]">
                  <span className="text-grey/15 font-semibold">
                    Milan, Italy
                  </span>
                  <span className="text-sm text-grey/14">
                    321 Via della Moda, Milan 20123
                  </span>
                </div>
                <div className="flex gap-x-2.5">
                  <button className="px-5 opacity-50 cursor-not-allowed flex gap-x-[6px] py-[14px] justify-center items-center text-sm text-grey/15 font-medium border border-white/95 rounded-[32px]">
                    <Phone />
                    Call Now
                  </button>
                  <button className="px-5 flex opacity-50 cursor-not-allowed gap-x-[6px] py-[14px] bg-grey/15 justify-center items-center text-sm text-white font-medium rounded-[32px]">
                    Get Directions -&gt;
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-y-6 w-full max-w-96">
                <div className="flex flex-col gap-y-[6px]">
                  <span className="text-grey/15 font-semibold">London, UK</span>
                  <span className="text-sm text-grey/14">
                    100 Fashion Road, London, SW1A 1AA
                  </span>
                </div>
                <div className="flex gap-x-2.5">
                  <button className="px-5 flex opacity-50 cursor-not-allowed gap-x-[6px] py-[14px] justify-center items-center text-sm text-grey/15 font-medium border border-white/95 rounded-[32px]">
                    <Phone />
                    Call Now
                  </button>
                  <button className="px-5 flex opacity-50 cursor-not-allowed gap-x-[6px] py-[14px] bg-grey/15 justify-center items-center text-sm text-white font-medium rounded-[32px]">
                    Get Directions -&gt;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

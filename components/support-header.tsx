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
                    Klothink Support.
                  </h1>
                  <span className="text-sm font-semibold uppercase text-grey/60 max-md:order-1">
                    Your Fashion Ally
                  </span>
                </div>
                <p className="text-grey/40 max-md:text-sm">
                  24/7 Assistance for Seamless Shopping and Unmatched Customer
                  Satisfaction.
                </p>
              </div>
            </div>
            <div className="w-full px-10 flex gap-x-4 py-[30px] max-xl:gap-y-5 max-xl:flex-wrap border border-white/95 rounded-[14px]">
              <div className="flex flex-col w-[188px] gap-y-2 max-xl:gap-y-1.5 items-start justify-center">
                <span className="text-sm text-grey/40">Email</span>
                <span className="text-grey/15 font-semibold">
                  support@klothink.com
                </span>
              </div>
              <div className="w-px border-r border-white/95 h-full"></div>
              <div className="flex flex-col w-[188px] gap-y-2 max-xl:gap-y-1.5 items-start justify-center">
                <span className="text-sm text-grey/40">Call Us On</span>
                <span className="text-grey/15 font-semibold">
                  +1 (555) 123-4567
                </span>
              </div>
              <div className="w-px border-r border-white/95 h-full"></div>
              <div className="flex flex-col w-[188px] gap-y-2 max-xl:gap-y-1.5 items-start justify-center">
                <span className="text-sm text-grey/40">Working Hours</span>
                <span className="text-grey/15 font-semibold">
                  Available 24/7
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-5">
            <div>
              <span className="font-medium text-grey/40">Office Locations</span>
            </div>
            <div className="p-10 max-xl:p-6 border max-xl:gap-y-[30px] max-xl:flex-wrap flex gap-x-10 justify-start items-center border-white/95 rounded-2xl">
              <div className="flex flex-col gap-y-6 max-xl:gap-y-5 w-full max-w-96">
                <div className="flex flex-col gap-y-[6px]">
                  <span className="text-grey/15 font-semibold">
                    New York City, USA
                  </span>
                  <span className="text-sm text-grey/14">
                    123 Fashion Avenue, Suite 456, New York, NY 10001
                  </span>
                </div>
                <div className="flex gap-x-2.5">
                  <button className="px-5 flex gap-x-[6px] py-[14px] justify-center items-center text-sm text-grey/15 font-medium border border-white/95 rounded-[32px]">
                    <Phone />
                    Call Now
                  </button>
                  <button className="px-5 flex gap-x-[6px] py-[14px] bg-grey/15 justify-center items-center text-sm text-white font-medium rounded-[32px]">
                    Get Direction -&gt;
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-y-6 w-full max-w-96">
                <div className="flex flex-col gap-y-[6px]">
                  <span className="text-grey/15 font-semibold">
                    Paris, France
                  </span>
                  <span className="text-sm text-grey/14">
                    789 Rue de la Mode, Paris 75001
                  </span>
                </div>
                <div className="flex gap-x-2.5">
                  <button className="px-5 flex gap-x-[6px] py-[14px] justify-center items-center text-sm text-grey/15 font-medium border border-white/95 rounded-[32px]">
                    <Phone />
                    Call Now
                  </button>
                  <button className="px-5 flex gap-x-[6px] py-[14px] bg-grey/15 justify-center items-center text-sm text-white font-medium rounded-[32px]">
                    Get Direction -&gt;
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-y-6 w-full max-w-96">
                <div className="flex flex-col gap-y-[6px]">
                  <span className="text-grey/15 font-semibold">
                    Tokyo, Japan
                  </span>
                  <span className="text-sm text-grey/14">
                    456 Shibuya Fashion Street, Shibuya-ku, Tokyo
                  </span>
                </div>
                <div className="flex gap-x-2.5">
                  <button className="px-5 flex gap-x-[6px] py-[14px] justify-center items-center text-sm text-grey/15 font-medium border border-white/95 rounded-[32px]">
                    <Phone />
                    Call Now
                  </button>
                  <button className="px-5 flex gap-x-[6px] py-[14px] bg-grey/15 justify-center items-center text-sm text-white font-medium rounded-[32px]">
                    Get Direction -&gt;
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

import Phone from "./icons/phone";

export default function ProductsHeader() {
  return (
    <>
      <section className="header w-full">
        <div className="w-full flex flex-col gap-y-20 max-xl:gap-y-[60px]">
          <div className="flex w-full gap-x-[50px] max-xl:flex-col max-xl:gap-y-[30px] items-end">
            <div className="flex">
              <div className="flex flex-col w-[525px] max-xl:gap-y-4 gap-y-5 max-md:gap-y-[10px]">
                <div className="flex justify-start gap-x-1 max-md:flex-col">
                  <h1 className="text-[38px] max-xl:text-[28px] font-semibold uppercase text-grey/10 max-md:order-2 max-md:text-[28px]">
                    Discover Now
                  </h1>
                  <span className="text-sm px-[10px] py-1 font-semibold uppercase text-grey/60 max-md:order-1">
                    Products
                  </span>
                </div>
                <p className="text-grey/40 max-md:text-sm">
                  Dive into the world of fashion excellence at Klothink. Our
                  curated selection brings together the latest trends and
                  timeless classics, offering you a diverse array of clothing
                  items that resonate with your unique style.
                </p>
              </div>
            </div>
            <div className="w-full px-10 flex h-fit gap-x-4 py-[30px] max-xl:gap-y-5 max-xl:flex-wrap border border-white/95 rounded-[14px]">
              <div className="flex flex-col w-[188px] gap-y-2 max-xl:gap-y-1.5 items-start justify-center">
                <span className="text-lg text-grey/15 font-semibold">
                  Exclusive Offers
                </span>
                <span className="text-grey/40 text-sm font-medium">
                  30% off on select items
                </span>
              </div>
              <div className="w-px border-r border-white/95 h-full"></div>
              <div className="flex flex-col w-[188px] gap-y-2 max-xl:gap-y-1.5 items-start justify-center">
                <span className="text-lg text-grey/15 font-semibold">
                  New Arrivals
                </span>
                <span className="text-grey/40 text-sm font-medium">
                  50+ new arrivals Daily
                </span>
              </div>
              <div className="w-px border-r border-white/95 h-full"></div>
              <div className="flex flex-col w-[188px] gap-y-2 max-xl:gap-y-1.5 items-start justify-center">
                <span className="text-lg text-grey/15 font-semibold">
                  Over 1,500 +
                </span>
                <span className="text-grey/40 text-sm font-medium">
                  curated fashion products.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="py-[60px] flex justify-center items-center">
          <div className="border border-white/95 gap-x-[10px] rounded-full p-[10px] flex justify-center items-center">
            <button className="py-3 px-6 bg-white/97 border-white/95 rounded-full">
              <span className="uppercase text-sm font-semibold">all</span>
            </button>
            <button className="py-3 px-6 bg-yellow/50 rounded-full">
              <span className="uppercase text-sm font-semibold">
                Men&rsquo;s wear
              </span>
            </button>
            <button className="py-3 px-6 bg-white/97 border-white/95 rounded-full">
              <span className="uppercase text-sm font-semibold">
                Women&rsquo;s wear
              </span>
            </button>
            <button className="py-3 px-6 bg-white/97 border-white/95 rounded-full">
              <span className="uppercase text-sm font-semibold">
                Kid&rsquo;s wear
              </span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

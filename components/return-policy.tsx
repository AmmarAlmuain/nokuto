export default function ReturnPolicy() {
  return (
    <>
      <section className="return-policy w-full">
        <div className="flex flex-col gap-y-[60px]">
          {/* Here the header default message start! */}
          <div className="flex gap-x-[150px] justify-between max-xl:flex-col max-xl:gap-y-6">
            <div className="flex flex-col gap-y-5">
              <div className="flex h-[52px] max-md:h-fit max-md:flex-col max-md:gap-y-1">
                <h1 className="text-[38px] font-semibold uppercase text-grey/10 max-md:order-2 max-md:text-[28px]">
                  Return Policy
                </h1>
                <span className="px-[10px] pt-1 text-sm font-semibold text-grey/60 max-md:order-1 max-md:px-0 max-md:pt-0">
                  Easy Returns at Klothink
                </span>
              </div>
              <div>
                <p className="w-full max-w-6xl text-grey/40 max-md:text-sm">
                  Explore our hassle-free return policy designed to ensure your
                  satisfaction with every purchase.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center max-xl:justify-start">
              <button className="rounded-[32px] bg-white/97 border border-white/95 px-5 py-[14px]">
                <span className="whitespace-nowrap text-sm font-semibold">
                  Read Return Policy-&gt;
                </span>
              </button>
            </div>
          </div>
          {/* Here its end! */}
          <div className="w-full flex p-10 max-xl:flex-col max-xl:gap-y-5 gap-x-10 justify-between rounded-2xl border border-white/95">
            <div className="flex flex-col gap-y-[6px]">
              <span className="text-lg font-semibold text-grey/15">
                Eligibility
              </span>
              <p className="text-grey/40 w-fit">
                Items must be unused, with tags attached, and returned within 30
                days of delivery.
              </p>
            </div>
            <div className="border-white/95 border-r w-px max-xl:w-full max-xl:border-t max-xl:border-r-0"></div>
            <div className="flex flex-col gap-y-[6px]">
              <span className="text-lg font-semibold text-grey/15">
                Process
              </span>
              <p className="text-grey/40 w-fit">
                Initiate returns through our{" "}
                <span className="underline font-medium text-grey/15 text-base cursor-pointer">
                  Return Center
                </span>{" "}
                for a smooth and efficient process.
              </p>
            </div>
            <div className="border-white/95 border-r w-px max-xl:w-full max-xl:border-t max-xl:border-r-0"></div>
            <div className="flex flex-col gap-y-[6px]">
              <span className="text-lg font-semibold text-grey/15">Refund</span>
              <p className="text-grey/40 w-fit">
                Expect a refund to your original payment method within 7-10
                business days .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

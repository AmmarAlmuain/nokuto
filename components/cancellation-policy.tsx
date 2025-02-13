export default function CancellationPolicy() {
  return (
    <>
      <section className="cancellation-policy w-full">
        <div className="flex flex-col gap-y-[60px]">
          {/* Here the header default message start! */}
          <div className="flex gap-x-[150px] justify-between max-xl:flex-col max-xl:gap-y-6">
            <div className="flex flex-col gap-y-5">
              <div className="flex h-[52px] max-md:h-fit max-md:flex-col max-md:gap-y-1">
                <h1 className="text-[38px] font-semibold uppercase text-grey/10 max-md:order-2 max-md:text-[28px]">
                  Cancellation Policy
                </h1>
                <span className="px-[10px] pt-1 text-sm font-semibold text-grey/60 max-md:order-1 max-md:px-0 max-md:pt-0">
                  Flexible Ordering Experience
                </span>
              </div>
              <div>
                <p className="w-full max-w-6xl text-grey/40 max-md:text-sm">
                  Familiarize yourself with our cancellation policy to make
                  changes to your order with ease.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center max-xl:justify-start">
              <button className="rounded-[32px] bg-white/97 border border-white/95 px-5 py-[14px]">
                <span className="whitespace-nowrap text-sm font-semibold">
                  Read Cancellation Policy -&gt;
                </span>
              </button>
            </div>
          </div>
          {/* Here its end! */}
          <div className="w-full flex p-10 max-xl:flex-col max-xl:gap-y-5 gap-x-10 justify-between rounded-2xl border border-white/95">
            <div className="flex flex-col gap-y-[6px]">
              <span className="text-lg font-semibold text-grey/15">
                Cancellation Window
              </span>
              <p className="text-grey/40 w-fit">
                Orders can be canceled within 24 hours of placement for a full
                refund.
              </p>
            </div>
            <div className="border-white/95 border-r w-px max-xl:w-full max-xl:border-t max-xl:border-r-0"></div>
            <div className="flex flex-col gap-y-[6px]">
              <span className="text-lg font-semibold text-grey/15">
                Cancellation Process
              </span>
              <p className="text-grey/40 w-fit">
                Visit our Order Management section to cancel your order
                effortlessly.
              </p>
            </div>
            <div className="border-white/95 border-r w-px max-xl:w-full max-xl:border-t max-xl:border-r-0"></div>
            <div className="flex flex-col gap-y-[6px]">
              <span className="text-lg font-semibold text-grey/15">
                Refund Timeline
              </span>
              <p className="text-grey/40 w-fit">
                Refunds for canceled orders are processed within 5-7 business
                days.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

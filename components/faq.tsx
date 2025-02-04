import Plus from "@/components/icons/plus";

export default function Faq() {
  return (
    <>
      <section className="faq w-full">
        <div className="flex w-full flex-col gap-y-[60px] max-xl:gap-y-10">
          <div className="flex flex-col gap-y-5">
            <div className="flex h-[52px] max-md:h-fit max-md:flex-col max-md:gap-y-1">
              <h1 className="text-[38px] font-semibold uppercase text-grey/10 max-md:order-2 max-md:text-[28px]">
                Questions? We Have Answers.
              </h1>
              <span className="px-[10px] pt-1 text-sm font-semibold text-grey/60 max-md:order-1 max-md:px-0 max-md:pt-0">
                FAQ
              </span>
            </div>
            <div>
              <p className="w-full max-w-6xl text-grey/40 max-md:text-sm">
                Ease into the world of Klothink with clarity. Our FAQs cover a
                spectrum of topics, ensuring you have the information you need
                for a seamless shopping experience.
              </p>
            </div>
          </div>
          <div className="flex w-full items-center justify-start overflow-x-auto overflow-y-hidden border-b border-t border-white/95 py-[30px] max-xl:h-[62px] max-xl:py-5">
            <div className="flex">
              <button>
                <span className="font-semibold text-grey/10">All</span>
              </button>
              <div className="divider mx-4 border-r border-white/95 max-xl:mx-[10px]"></div>
              <button className="font-medium text-grey/60">Ordering</button>
              <div className="divider mx-4 border-r border-white/95 max-xl:mx-[10px]"></div>
              <button className="font-medium text-grey/60">Shipping</button>
              <div className="divider mx-4 border-r border-white/95 max-xl:mx-[10px]"></div>
              <button className="font-medium text-grey/60">Returns</button>
              <div className="divider mx-4 border-r border-white/95 max-xl:mx-[10px]"></div>
              <button className="whitespace-nowrap font-medium text-grey/60">
                Customer Support
              </button>
            </div>
          </div>
          <div className="flex w-full items-center justify-between gap-x-5 max-xl:flex-col max-xl:gap-y-4">
            <div className="flex w-full flex-col gap-y-4">
              <div className="flex h-[72px] items-center justify-between rounded-[14px] border border-white/95 p-6">
                <h4 className="font-medium text-grey/15">
                  Can I modify my order after placing it?
                </h4>
                <div className="flex">
                  <div className="divider px-5"></div>
                  <Plus />
                </div>
              </div>
              <div className="flex h-[72px] items-center justify-between rounded-[14px] border border-white/95 p-6">
                <h4 className="font-medium text-grey/15">
                  How do I initiate a return?
                </h4>
                <div className="flex">
                  <div className="divider px-5"></div>
                  <Plus />
                </div>
              </div>
              <div className="flex h-[72px] items-center justify-between rounded-[14px] border border-white/95 p-6">
                <h4 className="font-medium text-grey/15">
                  How can I unsubscribe from the newsletter?
                </h4>
                <div className="flex">
                  <div className="divider px-5"></div>
                  <Plus />
                </div>
              </div>
              <div className="flex h-[72px] items-center justify-between rounded-[14px] border border-white/95 p-6">
                <h4 className="font-medium text-grey/15">
                  Do you offer exchanges for products?
                </h4>
                <div className="flex">
                  <div className="divider px-5"></div>
                  <Plus />
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col gap-y-4">
              <div className="flex h-[72px] items-center justify-between rounded-[14px] border border-white/95 p-6">
                <h4 className="font-medium text-grey/15">
                  How can I place an order on Klothink?
                </h4>
                <div className="flex">
                  <div className="divider px-5"></div>
                  <Plus />
                </div>
              </div>
              <div className="flex h-[72px] items-center justify-between rounded-[14px] border border-white/95 p-6">
                <h4 className="font-medium text-grey/15">
                  What payment methods do you accept?
                </h4>
                <div className="flex">
                  <div className="divider px-5"></div>
                  <Plus />
                </div>
              </div>
              <div className="flex h-[72px] items-center justify-between rounded-[14px] border border-white/95 p-6">
                <h4 className="font-medium text-grey/15">
                  How can I track my order?
                </h4>
                <div className="flex">
                  <div className="divider px-5"></div>
                  <Plus />
                </div>
              </div>
              <div className="flex h-[72px] items-center justify-between rounded-[14px] border border-white/95 p-6">
                <h4 className="font-medium text-grey/15">
                  What is your shipping policy?
                </h4>
                <div className="flex">
                  <div className="divider px-5"></div>
                  <Plus />
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col gap-y-4">
              <div className="flex h-[72px] items-center justify-between rounded-[14px] border border-white/95 p-6">
                <h4 className="font-medium text-grey/15">
                  Are there any additional fees for returns?
                </h4>
                <div className="flex">
                  <div className="divider px-5"></div>
                  <Plus />
                </div>
              </div>
              <div className="flex h-[72px] items-center justify-between rounded-[14px] border border-white/95 p-6">
                <h4 className="font-medium text-grey/15">
                  How do I create an account on Klothink?
                </h4>
                <div className="flex">
                  <div className="divider px-5"></div>
                  <Plus />
                </div>
              </div>
              <div className="flex h-[72px] items-center justify-between rounded-[14px] border border-white/95 p-6">
                <h4 className="font-medium text-grey/15">
                  Can I change my account information?
                </h4>
                <div className="flex">
                  <div className="divider px-5"></div>
                  <Plus />
                </div>
              </div>
              <div className="flex h-[72px] items-center justify-between rounded-[14px] border border-white/95 p-6">
                <h4 className="font-medium text-grey/15">
                  Are my personal details secure on Klothink?
                </h4>
                <div className="flex">
                  <div className="divider px-5"></div>
                  <Plus />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

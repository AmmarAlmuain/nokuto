export default function HowItWorkContainer() {
  const cards = [
    {
      id: 1,
      title: "Discover Trends",
      description: "Explore our curated collection of over 1000 styles",
    },
    {
      id: 2,
      title: "Secure Checkout",
      description:
        "Add your items to the cart and proceed to our secure checkout.",
    },
    {
      id: 3,
      title: "Swift Dispatch",
      description: "Experience 95% same-day dispatch on orders.",
    },
    {
      id: 4,
      title: "Unbox Happiness",
      description: "Receive your carefully packaged Klothink order.",
    },
  ];
  return (
    <>
      <section className="w-full how-it-works-container">
        <div className="flex w-full flex-col gap-y-[50px] max-xl:gap-y-10">
          {/* Here the header default message start! */}
          <div className="flex flex-col gap-y-5">
            <div className="flex h-[52px] max-md:h-fit max-md:flex-col max-md:gap-y-1">
              <h1 className="text-[38px] font-semibold uppercase text-grey/10 max-md:order-2 max-md:text-[28px]">
                Seamless Experience.
              </h1>
              <span className="px-[10px] pt-1 text-sm font-semibold text-grey/60 max-md:order-1 max-md:px-0 max-md:pt-0">
                How it Works ?
              </span>
            </div>
            <div>
              <p className="w-full max-w-6xl text-grey/40 max-md:text-sm">
                At Klothink, we&apos;ve designed a straightforward shopping
                experience to make fashion accessible. Explore the journey from
                discovering the latest trends to receiving your handpicked
                styles with ease.
              </p>
            </div>
          </div>
          {/* Here its end! */}
          <div className="flex items-center justify-center gap-x-4 rounded-2xl bg-white/97 p-4 max-xl:flex-col max-xl:gap-y-[10px] max-xl:p-[10px]">
            {cards.map((card) => {
              return (
                <div
                  key={card.id}
                  className="flex h-fit w-full flex-col items-start justify-center gap-y-5 rounded-[14px] border border-white/95 bg-white p-6 max-xl:flex-row max-xl:items-center max-xl:justify-start max-xl:gap-x-5"
                >
                  <div className="text-[60px] font-medium leading-none text-white/90">
                    0{`${String(card.id)}`}
                  </div>
                  <div className="flex flex-col gap-y-[6px] max-xl:gap-y-1">
                    <span className="text-lg font-semibold text-grey/15 max-xl:text-base">
                      {card.title}
                    </span>
                    <p className="text-sm text-grey/40">{card.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

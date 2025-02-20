import ShoppingBag from "@/components/icons/shopping-bag";
import Image from "next/image";
import heroImage from "@/assets/images/hero-image.png";
import Link from "next/link";

export default function HeroContainer() {
  return (
    <>
      <section
        id="features"
        className="hero-container flex h-full gap-x-[80px] max-xl:flex-col max-xl:gap-y-10"
      >
        <div className="sub-container w-full max-xl:max-w-full">
          <div className="bg-yellow max-md:gapy-10 flex flex-col gap-y-[60px]">
            <div className="flex flex-col gap-y-10 max-md:gap-y-6">
              <div className="flex flex-col gap-y-5 max-md:gap-y-[10px]">
                <div className="flex justify-between max-md:flex-col">
                  <h1 className="w-full max-w-[520px] text-[38px] font-semibold uppercase text-grey/10 max-md:order-2 max-md:text-[28px]">
                    Unleash Your Style with Nokuto
                  </h1>
                  <span className="text-sm font-semibold uppercase text-grey/60 max-md:order-1">
                    Fashion Elevated.
                  </span>
                </div>
                <p className="text-grey/40 max-md:text-sm">
                  Discover the ultimate fashion destination at Nokuto, where
                  elegance meets affordability. Dive into the latest trends and
                  enjoy exclusive offers.
                </p>
              </div>
              <div className="flex gap-2 text-grey/15">
                <Link
                  href={"/products"}
                  className="flex w-36 items-center justify-center gap-x-[6px] rounded-[32px] bg-yellow/50 px-5 py-[14px]"
                >
                  <ShoppingBag />
                  <span className="text-sm font-semibold">Shop Now</span>
                </Link>
                <Link
                  href={"/support"}
                  className="w-36 rounded-[32px] border px-5 py-[14px] border-white/95 flex justify-center items-center hover:bg-white/95 transition-all duration-300"
                >
                  <span className="text-sm font-semibold">Get in Touch</span>
                </Link>
              </div>
            </div>
            <div></div>
          </div>
          <div className="border-shadow flex w-full flex-col justify-start gap-y-4 rounded-xl border-2 border-white bg-white/97 p-5 max-md:gap-y-[10px] max-md:p-[10px]">
            <div className="flex w-full max-sm:flex-col max-sm:gap-y-[10px] items-center justify-between gap-x-4 max-md:gap-x-[10px]">
              <div className="flex w-full flex-col gap-y-[6px] rounded-xl bg-white p-6 max-md:p-5">
                <span className="text-[26px] font-semibold text-grey/10 max-md:text-[20px]">
                  Over 1500+
                </span>
                <p className="text-grey/40 max-md:text-sm">Exclusive Styles</p>
              </div>
              <div className="flex w-full flex-col gap-y-[6px] rounded-xl bg-white p-6 max-md:p-5">
                <span className="text-[26px] font-semibold text-grey/10 max-md:text-[20px]">
                  98%
                </span>
                <p className="text-grey/40 max-md:text-sm">
                  Customer Happiness Rate
                </p>
              </div>
            </div>
            <div className="flex w-full items-center max-sm:flex-col max-sm:gap-y-[10px] justify-between gap-x-4 max-md:gap-x-[10px]">
              <div className="flex w-full flex-col gap-y-[6px] rounded-xl bg-white p-6 max-md:p-5">
                <span className="text-[26px] font-semibold text-grey/10 max-md:text-[20px]">
                  Round-the-Clock
                </span>
                <p className="text-grey/40 max-md:text-sm">Shopping Delight</p>
              </div>
              <div className="flex w-full flex-col gap-y-[6px] rounded-xl bg-white p-6 max-md:p-5">
                <span className="text-[26px] font-semibold text-grey/10 max-md:text-[20px]">
                  Easy
                </span>
                <p className="text-grey/40 max-md:text-sm">30-Day Returns</p>
              </div>
            </div>
          </div>
        </div>
        <div className="sub-container relative min-w-[565px] max-xl:min-w-fit flex items-center justify-center rounded-2xl bg-white/97 max-xl:py-16">
          <Image src={heroImage} alt="hero-image" width={564} height={619} />
          <div className="absolute flex h-full w-full flex-col justify-between px-4 py-5">
            <div className="flex w-full justify-start">
              <button className="rounded-[32px] bg-white px-[10px] py-[6px] text-grey/15">
                Top Pick
              </button>
            </div>
            <div className="flex w-full flex-wrap items-center justify-between max-md:gap-y-[10px]">
              <div className="flex gap-x-[6px] rounded-[32px] bg-white py-2 pl-4 pr-[10px] max-md:order-2">
                <div className="flex items-center">
                  <span className="text-sm font-medium text-grey/15">
                    Color
                  </span>
                </div>
                <div className="flex items-center justify-center gap-x-[2px] rounded-full border border-white/95 bg-white px-[5px] py-1">
                  <button className="h-4 w-4 rounded-full bg-[#739CDA]"></button>
                  <button className="h-4 w-4 rounded-full bg-[#DAA573]"></button>
                  <button className="h-4 w-4 rounded-full bg-[#DAD673]"></button>
                </div>
              </div>
              <div className="flex max-h-10 gap-x-[6px] rounded-[32px] bg-white py-2 pl-4 pr-[10px] max-md:order-1 max-md:h-full max-md:w-full max-md:justify-center">
                <div className="flex items-center">
                  <span className="text-sm font-medium text-grey/15">
                    Sizes
                  </span>
                </div>
                <div className="flex gap-x-[2px]">
                  <button className="flex w-10 items-center justify-center rounded-[32px] border border-white/95 bg-white/97 py-1 max-md:w-16">
                    <span className="text-xs text-grey/15">S</span>
                  </button>
                  <button className="flex w-10 items-center justify-center rounded-[32px] border border-white/95 bg-white/97 py-1 max-md:w-16">
                    <span className="text-xs text-grey/15">M</span>
                  </button>
                  <button className="flex w-10 items-center justify-center rounded-[32px] border border-white/95 bg-white/97 py-1 max-md:w-16">
                    <span className="text-xs text-grey/15">L</span>
                  </button>
                  <button className="flex w-10 items-center justify-center rounded-[32px] border border-white/95 bg-white/97 py-1 max-md:w-16">
                    <span className="text-xs text-grey/15">XL</span>
                  </button>
                </div>
              </div>
              <div className="flex max-h-9 gap-x-[2px] rounded-full bg-white py-2 pl-[14px] pr-2 max-md:order-3">
                <button className="flex items-center justify-center">
                  <span className="text-sm font-medium">
                    View Similar -{">"}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import Image from "next/image";
import pr from "@/assets/images/pr.png";
import pr2 from "@/assets/images/pr-2.png";
import pr3 from "@/assets/images/pr-3.png";
import pr4 from "@/assets/images/pr-4.png";
import ShoppingCart from "@/components/icons/shopping-cart";

export default function Products() {
  return (
    <>
      <section className="products w-full">
        <div className="flex flex-col gap-y-[60px]">
          <div className="flex gap-x-[150px] max-xl:flex-col max-xl:gap-y-6">
            <div className="flex flex-col gap-y-5">
              <div className="flex h-[52px] max-md:h-fit max-md:flex-col max-md:gap-y-1">
                <h1 className="text-[38px] font-semibold uppercase text-grey/10 max-md:order-2 max-md:text-[28px]">
                  Discover Fashion.
                </h1>
                <span className="px-[10px] pt-1 text-sm font-semibold text-grey/60 max-md:order-1 max-md:px-0 max-md:pt-0">
                  Products
                </span>
              </div>
              <div>
                <p className="w-full max-w-6xl text-grey/40 max-md:text-sm">
                  Dive into a world of fashion innovation at Klothink. Our
                  carefully curated collections bring together the latest trends
                  and timeless classics, ensuring you find the perfect pieces
                  for every occasion.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center max-xl:justify-start">
              <button className="rounded-[32px] bg-yellow/50 px-5 py-[14px]">
                <span className="whitespace-nowrap text-sm font-semibold">
                  View All Products
                </span>
              </button>
            </div>
          </div>
          <div>
            <div className="flex w-full items-center justify-between overflow-x-auto overflow-y-hidden border-b border-t border-white/95 py-[30px] max-xl:h-[62px] max-xl:py-5">
              <div className="flex">
                <button>
                  <span className="font-semibold text-grey/10">All</span>
                </button>
                <div className="divider mx-4 border-r border-white/95 max-xl:mx-[10px]"></div>
                <button className="font-medium text-grey/60">Menswear</button>
                <div className="divider mx-4 border-r border-white/95 max-xl:mx-[10px]"></div>
                <button className="font-medium text-grey/60">Womenswear</button>
                <div className="divider mx-4 border-r border-white/95 max-xl:mx-[10px]"></div>
                <button className="font-medium text-grey/60">Kidswear</button>
              </div>
              <div className="flex gap-x-2 max-xl:hidden">
                <button className="rounded-[32px] bg-grey/15 px-5 py-3">
                  <span className="text-sm font-semibold text-white">
                    Casual
                  </span>
                </button>
                <button className="rounded-[32px] border border-white/95 px-5 py-3">
                  <span className="text-sm font-semibold text-grey/15">
                    Formal
                  </span>
                </button>
                <button className="rounded-[32px] border border-white/95 px-5 py-3">
                  <span className="text-sm font-semibold text-grey/15">
                    Party
                  </span>
                </button>
              </div>
            </div>
            <div className="hidden w-full items-center justify-center py-5 max-xl:flex">
              <div className="flex gap-x-2">
                <button className="rounded-[32px] bg-grey/15 px-5 py-3">
                  <span className="text-sm font-semibold text-white">
                    Casual
                  </span>
                </button>
                <button className="rounded-[32px] border border-white/95 px-5 py-3">
                  <span className="text-sm font-semibold text-grey/15">
                    Formal
                  </span>
                </button>
                <button className="rounded-[32px] border border-white/95 px-5 py-3">
                  <span className="text-sm font-semibold text-grey/15">
                    Party
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-start gap-x-[30px] overflow-x-auto pb-[60px]">
            <div className="flex flex-col gap-y-5">
              <div className="relative">
                <div className="absolute scale-90">
                  <Image
                    src={pr}
                    alt="product-image"
                    className="h-[318px] w-[300px] object-contain"
                  />
                </div>
                <div className="absolute bottom-0 right-0">
                  <button className="flex items-center justify-center rounded-full bg-yellow/50 p-4">
                    <ShoppingCart />
                  </button>
                </div>
                <svg
                  width="298"
                  height="318"
                  viewBox="0 0 298 318"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M297.5 16C297.5 7.16344 290.337 0 281.5 0H16C7.16344 0 0 7.16345 0 16V302C0 310.837 7.16346 318 16 318H228.971C234.65 318 238.398 311.588 237.467 305.985L235.989 297.087C232.026 273.236 252.334 252.386 276.281 255.717C284.927 256.92 297.5 251.076 297.5 242.347V16Z"
                    fill="#F7F7F8"
                  />
                </svg>
              </div>
              <div className="flex flex-col items-start justify-center gap-y-0.5">
                <span className="font-semibold text-grey/15">
                  Classic Denim Jeans
                </span>
                <span className="font-medium text-grey/30">$49.99</span>
              </div>
            </div>
            <div className="flex flex-col gap-y-5">
              <div className="relative">
                <div className="absolute scale-90">
                  <Image
                    src={pr2}
                    alt="product-image"
                    className="h-[318px] w-[300px] object-contain"
                  />
                </div>
                <div className="absolute bottom-0 right-0">
                  <button className="flex items-center justify-center rounded-full bg-yellow/50 p-4">
                    <ShoppingCart />
                  </button>
                </div>
                <svg
                  width="298"
                  height="318"
                  viewBox="0 0 298 318"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M297.5 16C297.5 7.16344 290.337 0 281.5 0H16C7.16344 0 0 7.16345 0 16V302C0 310.837 7.16346 318 16 318H228.971C234.65 318 238.398 311.588 237.467 305.985L235.989 297.087C232.026 273.236 252.334 252.386 276.281 255.717C284.927 256.92 297.5 251.076 297.5 242.347V16Z"
                    fill="#F7F7F8"
                  />
                </svg>
              </div>
              <div className="flex flex-col items-start justify-center gap-y-0.5">
                <span className="font-semibold text-grey/15">
                  Cozy Comfort Hoodie
                </span>
                <span className="font-medium text-grey/30">$39.99</span>
              </div>
            </div>
            <div className="flex flex-col gap-y-5">
              <div className="relative">
                <div className="absolute scale-90">
                  <Image
                    src={pr3}
                    alt="product-image"
                    className="h-[318px] w-[300px] object-contain"
                  />
                </div>
                <div className="absolute bottom-0 right-0">
                  <button className="flex items-center justify-center rounded-full bg-yellow/50 p-4">
                    <ShoppingCart />
                  </button>
                </div>
                <svg
                  width="298"
                  height="318"
                  viewBox="0 0 298 318"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M297.5 16C297.5 7.16344 290.337 0 281.5 0H16C7.16344 0 0 7.16345 0 16V302C0 310.837 7.16346 318 16 318H228.971C234.65 318 238.398 311.588 237.467 305.985L235.989 297.087C232.026 273.236 252.334 252.386 276.281 255.717C284.927 256.92 297.5 251.076 297.5 242.347V16Z"
                    fill="#F7F7F8"
                  />
                </svg>
              </div>
              <div className="flex flex-col items-start justify-center gap-y-0.5">
                <span className="font-semibold text-grey/15">
                  Classic Polo Shirt
                </span>
                <span className="font-medium text-grey/30">$29.99</span>
              </div>
            </div>
            <div className="flex flex-col gap-y-5">
              <div className="relative">
                <div className="absolute scale-90">
                  <Image
                    src={pr4}
                    alt="product-image"
                    className="h-[318px] w-[300px] object-contain"
                  />
                </div>
                <div className="absolute bottom-0 right-0">
                  <button className="flex items-center justify-center rounded-full bg-yellow/50 p-4">
                    <ShoppingCart />
                  </button>
                </div>
                <svg
                  width="298"
                  height="318"
                  viewBox="0 0 298 318"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M297.5 16C297.5 7.16344 290.337 0 281.5 0H16C7.16344 0 0 7.16345 0 16V302C0 310.837 7.16346 318 16 318H228.971C234.65 318 238.398 311.588 237.467 305.985L235.989 297.087C232.026 273.236 252.334 252.386 276.281 255.717C284.927 256.92 297.5 251.076 297.5 242.347V16Z"
                    fill="#F7F7F8"
                  />
                </svg>
              </div>
              <div className="flex flex-col items-start justify-center gap-y-0.5">
                <span className="font-semibold text-grey/15">Chino Pants</span>
                <span className="font-medium text-grey/30">$44.99</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

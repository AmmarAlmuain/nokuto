import ArrowUpRight from "./icons/arrow-up-right";
import Hamburger from "./icons/hamburger";
import Logo from "./icons/logo";
import ShoppingCart from "./icons/shopping-cart";

export default function Navbar() {
  return (
    <>
      <nav className="w-full">
        <div className="top-nav bg-grey/10 px-6 py-[14px] max-sm:pt-10">
          <div className="flex h-full w-full items-center justify-center">
            <div className="flex items-center justify-center gap-x-[10px] text-white">
              <span className="text-sm font-medium max-sm:text-xs">
                Subscribe to our Newsletter For Latest Collections
              </span>
              <ArrowUpRight />
            </div>
          </div>
        </div>
        <div className="bottom-nav flex items-center justify-between border-b border-white/95 px-20 py-[18px] max-lg:px-4 max-lg:py-5">
          <div className="flex gap-x-[10px] max-md:hidden">
            <button className="rounded-full bg-white/97 px-5 py-3">
              <span className="text-sm font-medium text-grey/15">Home</span>
            </button>
            <button className="rounded-full border border-white/95 px-[18px] py-3">
              <span className="text-sm font-medium text-grey/40">Products</span>
            </button>
          </div>
          <div>
            <Logo />
          </div>
          <div>
            <div className="flex items-center justify-center gap-x-[10px]">
              <button className="rounded-full bg-yellow/50 p-4">
                <ShoppingCart />
              </button>
              <button className="rounded-full border border-white/95 px-4 py-3 max-md:hidden">
                <span className="text-sm font-medium">Contact Support</span>
              </button>
              <button className="hidden max-md:flex">
                <Hamburger />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

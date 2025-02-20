"use client";

import Link from "next/link";
import ArrowUpRight from "./icons/arrow-up-right";
import Hamburger from "./icons/hamburger";
import Logo from "./icons/logo";
import ShoppingCart from "./icons/shopping-cart";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [activeRoute, setActiveRoute] = useState<number>(0);
  const pathname = usePathname();
  useEffect(() => {
    console.log(pathname);
    if (pathname === "/") {
      setActiveRoute(0);
    } else if (pathname.startsWith("/products")) {
      setActiveRoute(1);
    } else if (pathname.startsWith("/support")) {
      setActiveRoute(2);
    }
  });
  return (
    <>
      <nav className="w-full">
        <div className="top-nav bg-grey/10 px-6 py-[14px] max-sm:pt-10">
          <div className="flex h-full w-full items-center justify-center">
            <Link
              href={"https://github.com/AmmarAlmuain/nokuto"}
              target="_blank"
              className="flex items-center justify-center gap-x-[10px] text-white"
            >
              <span className="text-sm font-medium max-sm:text-xs">
                This website is for development and testing purposes; all
                content is fictional.
              </span>
              <ArrowUpRight />
            </Link>
          </div>
        </div>
        <div className="bottom-nav flex items-center justify-between border-b border-white/95 px-20 py-[18px] max-lg:px-4 max-lg:py-5">
          <div className="flex gap-x-[10px] max-md:hidden">
            <Link
              href={"/"}
              className={`rounded-full border px-5 py-3 transition-all duration-300 ${
                activeRoute === 0
                  ? "bg-yellow/50 border-yellow/50"
                  : "border-white/95 hover:bg-white/95"
              }`}
            >
              <span className="text-sm font-medium text-grey/15">Home</span>
            </Link>
            <Link
              href={"/products"}
              className={`rounded-full border px-5 py-3 transition-all duration-300 ${
                activeRoute === 1
                  ? "bg-yellow/50 border-yellow/50"
                  : "border-white/95 hover:bg-white/95"
              }`}
            >
              <span className="text-sm font-medium text-grey/15">Products</span>
            </Link>
          </div>
          <Link href={"/"}>
            <Logo className="h-14 w-14" />
          </Link>
          <div>
            <div className="flex items-center justify-center gap-x-[10px]">
              <button className="rounded-full bg-yellow/50 p-4 opacity-50 cursor-not-allowed">
                <ShoppingCart />
              </button>
              <Link
                href={"/support"}
                className={`rounded-full border px-5 py-3 transition-all duration-300 ${
                  activeRoute === 2
                    ? "bg-yellow/50 border-yellow/50"
                    : "border-white/95 hover:bg-white/95"
                }`}
              >
                <span className="text-sm font-medium text-grey/15">
                  Contact Support
                </span>
              </Link>
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

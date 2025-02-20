import Link from "next/link";
import Facebook from "./icons/brands/facebook";
import Linkedin from "./icons/brands/linkedin";
import Twitter from "./icons/brands/twitter";
import Logo from "./icons/logo";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="flex gap-x-20 border-b border-t border-white/95 px-20 max-xl:flex-col max-xl:gap-y-[30px] max-xl:px-4 max-xl:pt-[30px]">
          <div className="flex w-full flex-col items-start justify-center gap-y-6">
            <div className="flex max-xl:w-full max-xl:items-center max-xl:justify-between">
              <Link href={"/"}>
                <Logo className="h-[60px] w-[60px]" />
              </Link>
              <div className="hidden gap-x-4 max-xl:flex">
                <button className="flex h-9 w-9 items-center justify-center rounded-full bg-grey/15 text-white">
                  <Facebook />
                </button>
                <button className="flex h-9 w-9 items-center justify-center rounded-full bg-grey/15 pt-0.5 text-white">
                  <Twitter />
                </button>
                <button className="flex h-9 w-9 items-center justify-center rounded-full bg-grey/15 text-white">
                  <Linkedin />
                </button>
              </div>
            </div>
            <div className="flex w-full gap-x-2">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter Your Email"
                className="w-full rounded-[32px] border border-white/95 bg-white/99 py-[14px] pl-4 pr-[26px] placeholder:text-sm placeholder:font-medium"
              />
              <button className="flex w-full max-w-[116px] items-center justify-center rounded-[32px] bg-yellow/50 px-6 py-[14px]">
                <span className="text-sm font-semibold text-grey/15">
                  Subscribe
                </span>
              </button>
            </div>
          </div>
          <div className="h-full w-full border-l border-white/95 p-[60px] pr-0 max-xl:border-l-0 max-xl:border-t max-xl:px-[60px] max-xl:py-6">
            <div>
              <ul className="hidden items-center justify-center gap-x-6 max-xl:flex">
                <li>
                  <span className="text-sm font-medium">Home</span>
                </li>
                <li>
                  <span className="text-sm font-medium">Products</span>
                </li>
                <li>
                  <span className="text-sm font-medium">Contact</span>
                </li>
              </ul>
            </div>
            <div className="flex gap-x-[50px] max-xl:hidden">
              <ul className="flex w-48 flex-col gap-y-9">
                <Link href={"/"}>
                  <span className="text-lg font-medium">Home</span>
                </Link>
                <div>
                  <ul className="flex flex-col gap-y-[18px]">
                    {[
                      "Features",
                      "Popular Products",
                      "Testimonials",
                      "FAQ",
                    ].map((link, index) => {
                      return (
                        <Link
                          key={index}
                          href={`/#${
                            [
                              "features",
                              "popular-products",
                              "testimonials",
                              "faq",
                            ][index]
                          }`}
                        >
                          <span className="cursor-pointer text-grey/40">
                            {link}
                          </span>
                        </Link>
                      );
                    })}
                  </ul>
                </div>
              </ul>
              <ul className="flex w-48 flex-col gap-y-9">
                <li>
                  <span className="text-lg font-medium">Menswear</span>
                </li>
                <div>
                  <ul className="flex flex-col gap-y-[18px]">
                    <li>
                      <span className="cursor-pointer text-grey/40">
                        Casual
                      </span>
                    </li>
                    <li>
                      <span className="cursor-pointer text-grey/40">
                        Formal
                      </span>
                    </li>
                    <li>
                      <span className="cursor-pointer text-grey/40">Party</span>
                    </li>
                    <li>
                      <span className="cursor-pointer text-grey/40">
                        Business
                      </span>
                    </li>
                  </ul>
                </div>
              </ul>
              <ul className="flex w-48 flex-col gap-y-9">
                <li>
                  <span className="text-lg font-medium">Womenswear</span>
                </li>
                <div>
                  <ul className="flex flex-col gap-y-[18px]">
                    <li>
                      <span className="cursor-pointer text-grey/40">
                        Casual
                      </span>
                    </li>
                    <li>
                      <span className="cursor-pointer text-grey/40">
                        Formal
                      </span>
                    </li>
                    <li>
                      <span className="cursor-pointer text-grey/40">Party</span>
                    </li>
                    <li>
                      <span className="cursor-pointer text-grey/40">
                        Business
                      </span>
                    </li>
                  </ul>
                </div>
              </ul>
              <ul className="flex flex-col gap-y-9">
                <li>
                  <span className="text-lg font-medium">Kidswear</span>
                </li>
                <div>
                  <ul className="flex flex-col gap-y-[18px]">
                    <li>
                      <span className="cursor-pointer text-grey/40">
                        Casual
                      </span>
                    </li>
                    <li>
                      <span className="cursor-pointer text-grey/40">
                        Formal
                      </span>
                    </li>
                    <li>
                      <span className="cursor-pointer text-grey/40">Party</span>
                    </li>
                  </ul>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex h-20 w-full justify-between px-20 py-[30px] max-xl:h-full max-xl:flex-col max-xl:items-center max-xl:justify-center max-xl:gap-y-[14px] max-xl:px-4 max-xl:py-5">
          <div className="max-xl:flex max-xl:flex-col max-xl:items-center max-xl:justify-center">
            <button className="pr-5 text-sm max-xl:pr-0">
              Terms & Conditions
            </button>
            <button className="border-l border-white/95 pl-5 text-sm max-xl:border-none max-xl:pl-0">
              Privacy Policy
            </button>
          </div>
          <div className="flex gap-x-4 max-xl:hidden">
            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-grey/15 text-white opacity-50 cursor-not-allowed">
              <Facebook />
            </button>
            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-grey/15 pt-0.5 text-white opacity-50 cursor-not-allowed">
              <Twitter />
            </button>
            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-grey/15 text-white opacity-50 cursor-not-allowed">
              <Linkedin />
            </button>
          </div>
          <div>
            <span className="text-sm">
              © 2024 Klothink. All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

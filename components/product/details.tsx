"use client";

import ShoppingBag from "@/components/icons/shopping-bag";
import ShoppingCart from "@/components/icons/shopping-cart";
import Image from "next/image";
import { Product } from "@/lib/data";

export default function Details({ product }: { product: Product }) {
  const [activePreviewImage, setActivePreviewImage] = useState<number>(0);
  const [activeSize, setActiveSize] = useState<number>(0);
  return (
    <>
      <section className="w-full product-details">
        <div className="flex gap-x-10 max-xl:flex-col max-xl:gap-y-20">
          <div className="w-full relative max-w-[560px] max-xl:max-w-full h-[560px] flex justify-center items-center bg-white/97 rounded-2xl p-5">
            <div className="absolute max-xl:bottom-0 xl:left-0 max-xl:flex-row max-xl:mb-5 max-xl:ml-0 max-xl:gap-x-3 p-[10px] bg-white rounded-lg gap-y-3 ml-5 flex flex-col">
              {product.images.map((image, index) => {
                return (
                  <div
                    key={index}
                    className={`w-16 h-12 cursor-pointer rounded flex justify-center items-center ${
                      activePreviewImage === index
                        ? "bg-white/90"
                        : "bg-white/97"
                    }`}
                    onClick={() => {
                      if (activePreviewImage === index) {
                        setActivePreviewImage(0);
                      } else {
                        setActivePreviewImage(index);
                      }
                    }}
                  >
                    <Image
                      src={image}
                      alt="product-details-mini-image"
                      height={40}
                      width={32}
                    />
                  </div>
                );
              })}
            </div>
            <Image
              src={product.images[activePreviewImage]}
              alt="product-details-image"
              height={450}
              width={400}
            />
          </div>
          <div className="w-full flex flex-col gap-y-4">
            <div className="flex gap-x-4 justify-between max-xl:items-start max-xl:gap-y-6 max-xl:flex-col">
              <div className="flex w-full max-xl:flex-row max-xl:justify-between mal-xl:gap-x-[6px] max-xl:items-end flex-col gap-y-[10px]">
                <div className="flex flex-col max-xl:gap-y-1">
                  <div className="flex gap-x-[6px] items-center justify-start">
                    <span className="text-grey/40 max-xl:text-sm">
                      {`${product.category} ${product.subcategory}`}
                    </span>
                    <div className="px-[10px] max-xl:text-xs py-0.5 flex justify-center items-center rounded-[30px] bg-yellow/70">
                      <span>Few Left!</span>
                    </div>
                  </div>
                  <div className="max-xl:w-full">
                    <span className="font-semibold text-xl max-xl:text-lg text-grey/15">
                      {product.name}
                    </span>
                  </div>
                </div>
                <div>
                  <span className="font-bold text-[22px] text-grey/15">
                    {product.price}
                  </span>
                </div>
              </div>
              <div className="flex items-start max-sm:w-full max-sm:justify-between justify-center gap-x-[10px]">
                <button className="px-5 w-36 max-xl:w-44 text-white rounded-[32px] py-[14px] gap-x-2 flex justify-center items-center bg-grey/15">
                  <ShoppingBag className="text-white" />
                  <span className="font-medium text-sm">Buy Now</span>
                </button>
                <button className="px-5 w-36 max-xl:w-44 text-grey/15 rounded-[32px] py-[14px] gap-x-2 flex justify-center items-center border border-white/95">
                  <ShoppingCart />
                  <span className="font-medium text-sm">Add To cart</span>
                </button>
              </div>
            </div>
            <div className="w-full p-6 flex flex-col gap-y-4 rounded-[14px] border border-white/95">
              <div className="flex w-full gap-x-4">
                <div className="flex flex-col w-full">
                  <span className="font-medium max-xl:text-sm text-grey/15">
                    Material
                  </span>
                  <span className="text-grey/40 max-xl:text-sm">
                    {product.material}
                  </span>
                </div>
                <div className="w-full flex flex-col">
                  <span className="font-medium text-grey/15 max-xl:text-sm">
                    Fit
                  </span>
                  <span className="text-grey/40 max-xl:text-sm">
                    {product.fit}
                  </span>
                </div>
              </div>
              <div className="w-full flex gap-x-4">
                <div className="flex flex-col w-full gap-y-1">
                  <span className="font-medium text-grey/15 max-xl:text-sm">
                    Color
                  </span>
                  <div className="w-fit rounded-full border border-white/95 px-[9px] py-[6px] flex gap-x-1">
                    <button className="rounded-full bg-grey/15 w-5 h-5"></button>
                    <button className="rounded-full bg-[#DAA573] w-5 h-5"></button>
                    <button className="rounded-full bg-[#DAD673] w-5 h-5"></button>
                  </div>
                </div>
                <div className="flex flex-col w-full gap-y-1">
                  <span className="font-medium text-grey/15 max-xl:text-sm">
                    Sizes
                  </span>
                  <div className="flex gap-x-[6px]">
                    {product.sizes.map((size, index) => {
                      return (
                        <button
                          key={index}
                          className={`px-3 py-0.5 w-8 h-8 border flex justify-center items-center border-white/95 rounded ${
                            activeSize === index
                              ? "text-white bg-grey/15"
                              : "bg-white/97 text-grey/15"
                          }`}
                          onClick={() => {
                            if (activeSize === index) {
                              setActiveSize(0);
                            } else {
                              setActiveSize(index);
                            }
                          }}
                        >
                          <span className="uppercase text-sm">{size}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full border border-white/95 rounded-[14px] p-6 flex flex-col gap-y-4">
              <span className="text-lg font-medium text-grey/15 max-xl:text-base">
                Shipping Information
              </span>
              <div className="text-grey/40 flex">{product.shippingInfo}</div>
            </div>
            <div className="w-full border border-white/95 rounded-[14px] p-6 flex flex-col gap-y-4">
              <span className="text-lg font-medium text-grey/15 max-xl:text-base">
                Features
              </span>
              <ul>
                {product.features.map((feature, index) => {
                  return (
                    <li
                      key={index}
                      className="text-grey/40 flex max-xl:text-sm"
                    >
                      <span className="px-2">•</span> {feature}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

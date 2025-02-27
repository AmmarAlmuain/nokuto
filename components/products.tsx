"use client";

import Image from "next/image";
import { useState, useEffect, useMemo } from "react";
import { Product, products } from "@/lib/data";
import { shuffleArray } from "@/lib/utils";
import Link from "next/link";
import Plus from "./icons/plus";

export default function Products() {
  const categories = useMemo(() => ["All", "Mens", "Womens", "Kids"], []);
  const subCategories = useMemo(() => ["Casual", "Formal", "Sport"], []);
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const [activeSubCategory, setActiveSubCategory] = useState<number>(0);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    const filtered = shuffleArray(
      products.filter((product) => {
        if (categories[activeCategory] === "All") {
          return subCategories[activeSubCategory] === product.subcategory;
        }
        return (
          subCategories[activeSubCategory] === product.subcategory &&
          categories[activeCategory] === product.category
        );
      })
    ).slice(0, 5);
    setFilteredProducts(filtered);
  }, [activeCategory, activeSubCategory, categories, subCategories]);

  return (
    <>
      <section id="popular-products" className="products w-full">
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
              <Link
                href={"/products"}
                className="rounded-[32px] bg-yellow/50 px-5 py-[14px]"
              >
                <span className="whitespace-nowrap text-sm font-semibold">
                  View All Products
                </span>
              </Link>
            </div>
          </div>
          <div>
            <div className="flex w-full items-center justify-between overflow-x-auto overflow-y-hidden border-b border-t border-white/95 py-[30px] max-xl:h-[62px] h-24 max-xl:py-5">
              <div className="flex">
                {["All", "Menswear", "Womenswear", "Kidswear"].map(
                  (category, index) => {
                    return (
                      <div className="flex" key={index}>
                        <button>
                          <span
                            onClick={() => {
                              if (activeCategory === index) {
                                setActiveCategory(0);
                              } else {
                                setActiveCategory(index);
                              }
                            }}
                            className={`${
                              activeCategory === index
                                ? "font-semibold text-grey/10"
                                : "font-medium text-grey/60"
                            }`}
                          >
                            {category}
                          </span>
                        </button>
                        {index === 3 ? (
                          <></>
                        ) : (
                          <div className="divider mx-4 border-r border-white/95 max-xl:mx-[10px]"></div>
                        )}
                      </div>
                    );
                  }
                )}
              </div>
              <div className="flex gap-x-2 max-xl:hidden">
                {["Casual", "Formal", "Party"].map((subCategory, index) => {
                  return (
                    <button
                      key={index}
                      onClick={() => {
                        if (activeSubCategory === index) {
                          setActiveSubCategory(0);
                        } else {
                          setActiveSubCategory(index);
                        }
                      }}
                      className={`rounded-[32px] px-5 py-3 ${
                        activeSubCategory === index
                          ? "bg-grey/15"
                          : "border border-white/95"
                      }`}
                    >
                      <span
                        className={`text-sm font-semibold ${
                          activeSubCategory === index
                            ? "text-white"
                            : "text-grey/15"
                        }`}
                      >
                        {subCategory}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="hidden w-full items-center justify-center py-5 max-xl:flex">
              <div className="flex gap-x-2">
                {["Casual", "Formal", "Party"].map((subCategory, index) => {
                  return (
                    <button
                      key={index}
                      onClick={() => {
                        if (activeSubCategory === index) {
                          setActiveSubCategory(0);
                        } else {
                          setActiveSubCategory(index);
                        }
                      }}
                      className={`rounded-[32px] px-5 py-3 ${
                        activeSubCategory === index
                          ? "bg-grey/15"
                          : "border border-white/95"
                      }`}
                    >
                      <span
                        className={`text-sm font-semibold ${
                          activeSubCategory === index
                            ? "text-white"
                            : "text-grey/15"
                        }`}
                      >
                        {subCategory}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex items-start justify-start gap-x-[30px] overflow-x-auto pb-5">
            {filteredProducts &&
              filteredProducts.map((product, index) => (
                <div key={index} className="flex flex-col gap-y-5">
                  <Link href={`/products/${product.slug}`}>
                    <div className="w-64 h-64 relative flex justify-center items-center overflow-hidden rounded-lg">
                      <Image
                        src={product.images[0]}
                        alt="product-image"
                        layout="fill"
                        objectFit="contain"
                        className="absolute scale-90"
                      />
                    </div>
                    <div className="flex gap-x-4 justify-between">
                      <div className="flex flex-col items-start justify-center gap-y-0.5">
                        <span className="font-semibold text-grey/15 w-60">
                          {product.name}
                        </span>
                        <span className="font-medium text-grey/30">
                          {product.price}
                        </span>
                      </div>
                      <button className="flex items-center w-[52px] h-[52px] justify-center rounded-full bg-yellow/50 p-4">
                        <Plus className="font-bold" />
                      </button>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}

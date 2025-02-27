"use client";

import Plus from "@/components/icons/plus";
import ProductsHeader from "@/components/products-header";
import { Product, products } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Products() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [casualProducts, setCasualProducts] = useState<Product[]>([]);
  const [formaProducts, setFormalProducts] = useState<Product[]>([]);
  const [sportProducts, setSportProducts] = useState<Product[]>([]);
  const tabsContent = [
    {
      title: "Casual Collection",
      description:
        "Discover our versatile men's casual wear collection, where comfort meets contemporary fashion.",
      products: casualProducts,
      tab: "casual",
    },
    {
      title: "Formal Elegance",
      description:
        "Explore timeless elegance with our Formal Elegance collection, featuring refined pieces for a polished look.",
      products: formaProducts,
      tab: "formal",
    },
    {
      title: "Active Lifestyle",
      description:
        "Embrace an active lifestyle with our performance-driven men's wear, designed for comfort and flexibility.",
      products: sportProducts,
      tab: "party",
    },
  ];

  useEffect(() => {
    if (activeTab === 0) {
      setCasualProducts(
        products.filter((prodcut) => {
          return prodcut.subcategory === "Casual";
        })
      );
      setFormalProducts(
        products.filter((prodcut) => {
          return prodcut.subcategory === "Formal";
        })
      );
      setSportProducts(
        products.filter((prodcut) => {
          return prodcut.subcategory === "Sport";
        })
      );
    }
  }, [activeTab]);

  return (
    <>
      <main className="px-20 py-20 max-xl:px-4">
        <ProductsHeader activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="flex flex-col w-full gap-y-[60px]">
          {tabsContent.map((tabContent, index) => {
            return (
              <div
                key={index}
                id={tabContent.tab}
                className="flex flex-col w-full gap-y-[60px]"
              >
                {/* Here the header default message start! */}
                <div className="flex flex-col">
                  <div className="flex max-md:h-fit max-md:flex-col max-md:gap-y-1">
                    <h1 className="text-[20px] font-semibold text-grey/10 max-md:order-2 max-md:text-[28px]">
                      {tabContent.title}
                    </h1>
                  </div>
                  <div>
                    <p className="w-full max-w-6xl text-grey/40 max-md:text-sm">
                      {tabContent.description}
                    </p>
                  </div>
                </div>
                {/* Here it’s end! */}
                <div className="flex items-start justify-start gap-x-[30px] overflow-x-auto pb-5">
                  {tabContent.products &&
                    tabContent.products.map((product, index) => (
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
            );
          })}
        </div>
      </main>
    </>
  );
}

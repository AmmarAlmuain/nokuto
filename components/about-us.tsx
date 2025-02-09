"use client";

import ArrowSmallDown from "@/components/icons/arrow-small-down";
import Lifebuoy from "@/components/icons/lifebuoy";
import LightBulb from "@/components/icons/light-bulb";
import Megaphone from "@/components/icons/megaphone";
import Sparkles from "@/components/icons/sparkles";
import Sun from "@/components/icons/sun";
import Star from "@/components/star";
import { useState } from "react";

export default function AboutUs() {
  const [expendHighlight, setExpendHighlight] = useState<boolean>(false);
  const toggleExpoendHightlight = () => {
    setExpendHighlight(!expendHighlight);
  };
  const aboutUsHighlights = [
    {
      id: 1,
      icon: <Star />,
      title: "Passionate Craftsmanship",
      description:
        "Every garment at Klothink is crafted with passion, reflecting our commitment to quality and innovation.",
    },
    {
      id: 2,
      icon: <Lifebuoy />,
      title: "Fashion Forward",
      description:
        "We're trendsetters, curating styles that empower and inspire confidence.",
    },
    {
      id: 3,
      icon: <Megaphone />,
      title: "Customer-Centric Approach",
      description:
        "At Klothink, our customers are at the heart of everything we do.",
    },
    {
      id: 4,
      icon: <LightBulb />,
      title: "Global Inspiration",
      description:
        "Influenced by global trends, we bring you a diverse and dynamic collection.",
    },
    {
      id: 5,
      icon: <Sparkles />,
      title: "Empowering Your Style",
      description:
        "Beyond clothing, Klothink is a lifestyle. Join us on a journey of self-expression.",
    },
    {
      id: 6,
      icon: <Sun />,
      title: "Sustainable Practices",
      description:
        "Klothink is committed to sustainability, integrating eco-friendly practices into our production process.",
    },
  ];
  return (
    <>
      <section className="about-us">
        <div className="flex flex-col gap-y-[60px] max-xl:gap-y-10">
          {/* Here the header default message start! */}
          <div className="flex flex-col gap-y-5">
            <div className="flex h-[52px] max-md:h-fit max-md:flex-col max-md:gap-y-1">
              <h1 className="text-[38px] font-semibold uppercase text-grey/10 max-md:order-2 max-md:text-[28px]">
                The Klothink Experience.
              </h1>
              <span className="px-[10px] pt-1 text-sm font-semibold text-grey/60 max-md:order-1 max-md:px-0 max-md:pt-0">
                About Us
              </span>
            </div>
            <div>
              <p className="w-full max-w-6xl text-grey/40 max-md:text-sm">
                At Klothink, we breathe life into fashion, blending creativity
                with commitment. Our journey is fueled by a dedication to
                delivering unparalleled style and quality. Join us in redefining
                fashion and embracing a community where every purchase tells a
                story.
              </p>
            </div>
          </div>
          {/* Here its end! */}
          <div className="flex flex-col gap-y-5 rounded-2xl border border-white/97 bg-white/99 p-5">
            <div className="flex gap-x-5 max-xl:flex-col max-xl:gap-y-5">
              {aboutUsHighlights.slice(0, 3).map((highlight, index) => (
                <div
                  key={index}
                  className="w-full rounded-2xl border border-white/95 bg-white p-[30px] max-xl:p-6"
                >
                  <div className="flex flex-col gap-y-5 max-xl:gap-y-4">
                    <div className="flex gap-x-[10px]">
                      <button className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow/50">
                        {highlight.icon}
                      </button>
                      <span className="flex items-center justify-center text-lg font-medium text-grey/15 max-xl:text-base">
                        {highlight.title}
                      </span>
                    </div>
                    <p className="text-sm text-grey/40">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {!expendHighlight && (
              <div className="hidden w-full items-center justify-center gap-x-1 max-xl:flex">
                <span
                  className="text-sm font-medium text-grey/30"
                  onClick={() => toggleExpoendHightlight()}
                >
                  View All
                </span>
                <ArrowSmallDown />
              </div>
            )}
            <div
              className={`flex gap-x-5 max-xl:flex-col max-xl:gap-y-5 ${
                expendHighlight ? "max-xl:flex" : "max-xl:hidden"
              }`}
            >
              {aboutUsHighlights.slice(3, 6).map((highlight, index) => (
                <div
                  key={index}
                  className="w-full rounded-2xl border border-white/95 bg-white p-[30px] max-xl:p-6"
                >
                  <div className="flex flex-col gap-y-5 max-xl:gap-y-4">
                    <div className="flex gap-x-[10px]">
                      <button className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow/50">
                        {highlight.icon}
                      </button>
                      <span className="flex items-center justify-center text-lg font-medium text-grey/15 max-xl:text-base">
                        {highlight.title}
                      </span>
                    </div>
                    <p className="text-sm text-grey/40">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {expendHighlight && (
              <div className="w-full items-center justify-center gap-x-1 max-xl:flex">
                <span
                  className="text-sm font-medium text-grey/30"
                  onClick={() => toggleExpoendHightlight()}
                >
                  Hide Latest
                </span>
                <ArrowSmallDown className="rotate-180" />
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

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
      icon: <Star />,
      title: "Innovative Vision",
      description:
        "At Nokuto, we blend artistic vision with advanced techniques to push the boundaries of design and craftsmanship.",
    },
    {
      icon: <Lifebuoy />,
      title: "Bold Expressions",
      description:
        "Our designs are bold, offering new ways to express individuality and personal style through every piece.",
    },
    {
      icon: <Megaphone />,
      title: "Community Focused",
      description:
        "Nokuto thrives on building a community that shares a passion for fashion, sustainability, and empowerment.",
    },
    {
      icon: <LightBulb />,
      title: "Diverse Inspirations",
      description:
        "Drawing inspiration from cultures around the world, Nokuto’s collection brings unique perspectives into every creation.",
    },
    {
      icon: <Sparkles />,
      title: "Your Personal Statement",
      description:
        "We believe clothing is a reflection of self. Nokuto is here to help you communicate your personality without saying a word.",
    },
    {
      icon: <Sun />,
      title: "Eco-Conscious Values",
      description:
        "Sustainability isn’t a choice; it’s a responsibility. Nokuto commits to eco-friendly practices, from materials to manufacturing.",
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
                The Nokuto Journey.
              </h1>
              <span className="px-[10px] pt-1 text-sm font-semibold text-grey/60 max-md:order-1 max-md:px-0 max-md:pt-0">
                About Us
              </span>
            </div>
            <div>
              <p className="w-full max-w-6xl text-grey/40 max-md:text-sm">
                At Nokuto, we are driven by a passion to redefine modern
                fashion. Our journey is centered around sustainability,
                craftsmanship, and delivering a collection that speaks to your
                inner self. Join us as we create a new wave in the world of
                style.
              </p>
            </div>
          </div>
          {/* Here it’s end! */}
          <div className="flex flex-col gap-y-5 rounded-2xl border border-white/97 bg-white/99 p-5">
            <div className="flex gap-x-5 max-xl:flex-col max-xl:gap-y-5">
              {aboutUsHighlights.slice(0, 3).map((highlight, index) => (
                <div
                  key={index}
                  className="w-full rounded-2xl border border-white/95 bg-white p-[30px] max-xl:p-6"
                >
                  <div className="flex flex-col gap-y-5 max-xl:gap-y-4">
                    <div className="flex gap-x-[10px]">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow/50">
                        {highlight.icon}
                      </div>
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
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow/50">
                        {highlight.icon}
                      </div>
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

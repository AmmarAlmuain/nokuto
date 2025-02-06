import ArrowSmallDown from "@/components/icons/arrow-small-down";
import Lifebuoy from "@/components/icons/lifebuoy";
import LightBulb from "@/components/icons/light-bulb";
import Megaphone from "@/components/icons/megaphone";
import Sparkles from "@/components/icons/sparkles";
import Sun from "@/components/icons/sun";
import Star from "@/components/star";

export default function AboutUs() {
  return (
    <>
      <section className="about-us">
        <div className="flex flex-col gap-y-[60px] max-xl:gap-y-10">
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
          <div className="flex flex-col gap-y-5 rounded-2xl border border-white/97 bg-white/99 p-5">
            <div className="flex gap-x-5 max-xl:flex-col max-xl:gap-y-5">
              <div className="w-full rounded-2xl border border-white/95 bg-white p-[30px] max-xl:p-6">
                <div className="flex flex-col gap-y-5 max-xl:gap-y-4">
                  <div className="flex gap-x-[10px]">
                    <button className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow/50">
                      <Star />
                    </button>
                    <span className="flex items-center justify-center text-lg font-medium text-grey/15 max-xl:text-base">
                      Passionate Craftsmanship
                    </span>
                  </div>
                  <p className="text-sm text-grey/40">
                    Every garment at Klothink is crafted with passion,
                    reflecting our commitment to quality and innovation.
                  </p>
                </div>
              </div>
              <div className="w-full rounded-2xl border border-white/95 bg-white p-[30px] max-xl:p-6">
                <div className="flex flex-col gap-y-5 max-xl:gap-y-4">
                  <div className="flex gap-x-[10px]">
                    <button className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow/50">
                      <Lifebuoy />
                    </button>
                    <span className="flex items-center justify-center text-lg font-medium text-grey/15 max-xl:text-base">
                      Fashion Forward
                    </span>
                  </div>
                  <p className="text-sm text-grey/40">
                    We&apos;re trendsetters, curating styles that empower and
                    inspire confidence.
                  </p>
                </div>
              </div>
              <div className="w-full rounded-2xl border border-white/95 bg-white p-[30px] max-xl:p-6">
                <div className="flex flex-col gap-y-5 max-xl:gap-y-4">
                  <div className="flex gap-x-[10px]">
                    <button className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow/50">
                      <Megaphone />
                    </button>
                    <span className="flex items-center justify-center text-lg font-medium text-grey/15 max-xl:text-base">
                      Customer-Centric Approach
                    </span>
                  </div>
                  <p className="text-sm text-grey/40">
                    At Klothink, our customers are at the heart of everything we
                    do.
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden w-full items-center justify-center gap-x-1 max-xl:flex">
              <span className="text-sm font-medium text-grey/30">View All</span>
              <ArrowSmallDown />
            </div>
            <div className="flex gap-x-5 max-xl:hidden max-xl:flex-col max-xl:gap-y-5">
              <div className="w-full rounded-2xl border border-white/95 bg-white p-[30px] max-xl:p-6">
                <div className="flex flex-col gap-y-5 max-xl:gap-y-4">
                  <div className="flex gap-x-[10px]">
                    <button className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow/50">
                      <LightBulb />
                    </button>
                    <span className="flex items-center justify-center text-lg font-medium text-grey/15 max-xl:text-base">
                      Global Inspiration
                    </span>
                  </div>
                  <p className="text-sm text-grey/40">
                    Influenced by global trends, we bring you a diverse and
                    dynamic collection.
                  </p>
                </div>
              </div>
              <div className="w-full rounded-2xl border border-white/95 bg-white p-[30px] max-xl:p-6">
                <div className="flex flex-col gap-y-5 max-xl:gap-y-4">
                  <div className="flex gap-x-[10px]">
                    <button className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow/50">
                      <Sparkles />
                    </button>
                    <span className="flex items-center justify-center text-lg font-medium text-grey/15 max-xl:text-base">
                      Empowering Your Style
                    </span>
                  </div>
                  <p className="text-sm text-grey/40">
                    Beyond clothing, Klothink is a lifestyle. Join us on a
                    journey of self-expression.
                  </p>
                </div>
              </div>
              <div className="w-full rounded-2xl border border-white/95 bg-white p-[30px] max-xl:p-6">
                <div className="flex flex-col gap-y-5 max-xl:gap-y-4">
                  <div className="flex gap-x-[10px]">
                    <button className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow/50">
                      <Sun />
                    </button>
                    <span className="flex items-center justify-center text-lg font-medium text-grey/15 max-xl:text-base">
                      Sustainable Practices
                    </span>
                  </div>
                  <p className="text-sm text-grey/40">
                    Klothink is committed to sustainability, integrating
                    eco-friendly practices into our production process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

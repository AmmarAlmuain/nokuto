import Image from "next/image";
import ts from "@/assets/images/ts.png";
import ts2 from "@/assets/images/ts-2.png";
import ts3 from "@/assets/images/ts-3.png";
import dummyAvatar from "@/assets/images/dummyAvatar.svg";

const testimonials = [
  {
    id: 1,
    name: "Jhon Doe",
    comment:
      "Klothink exceeded my expectations. The gown's quality and design made me feel like a queen. Fast shipping, too!",
  },
  {
    id: 2,
    name: "Rajesh Patel",
    comment:
      "Absolutely love the style and warmth of the jacket. A perfect blend of fashion and functionality!",
  },
  {
    id: 3,
    name: "Welter Mockren",
    comment:
      "Adorable and comfortable! My daughter loves her new outfit. Thank you, Klothink, for dressing our little fashionista.",
  },
];

export default function Testimonials() {
  return (
    <>
      <section className="testimonials w-full">
        <div className="flex flex-col gap-y-[60px]">
          {/* Here the header default message start! */}
          <div className="flex gap-x-[150px] max-xl:flex-col max-xl:gap-y-6">
            <div className="flex flex-col gap-y-5">
              <div className="flex h-[52px] max-md:h-fit max-md:flex-col max-md:gap-y-1">
                <h1 className="text-[38px] font-semibold uppercase text-grey/10 max-md:order-2 max-md:text-[28px]">
                  Customers Love.
                </h1>
                <span className="px-[10px] pt-1 text-sm font-semibold text-grey/60 max-md:order-1 max-md:px-0 max-md:pt-0">
                  Testimonials
                </span>
              </div>
              <div>
                <p className="w-full max-w-6xl text-grey/40 max-md:text-sm">
                  At Klothink, our customers are the heartbeat of our brand.
                  Explore the heartfelt testimonials shared by those who have
                  experienced the magic of Klothink fashion.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center max-xl:justify-start">
              <button className="rounded-[32px] bg-yellow/50 px-5 py-[14px]">
                <span className="whitespace-nowrap text-sm font-semibold">
                  View All Testimonials
                </span>
              </button>
            </div>
          </div>
          {/* Here its end! */}
          <div className="flex gap-x-5 rounded-2xl border border-white/97 bg-white/99 p-6 max-xl:flex-col max-xl:gap-y-5 max-xl:p-5">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex w-full flex-col gap-y-[30px] rounded-2xl border border-white/95 bg-white p-10 max-xl:gap-y-5 max-xl:p-[30px]"
              >
                <div className="flex justify-between gap-x-[30px]">
                  <div className="flex w-[247px] items-center justify-start gap-x-[10px]">
                    <div className="h-[50px] w-[50px] rounded-full bg-yellow/90">
                      <Image
                        className="rounded-full"
                        src={dummyAvatar}
                        alt="testimonial-image"
                        width={50}
                        height={50}
                      />
                    </div>
                    <div className="flex h-fit flex-col items-start justify-center">
                      <span className="font-medium text-grey/15">
                        {testimonial.name}
                      </span>
                      <div className="flex gap-x-[3px]">
                        {[0, 1, 2, 3, 4].map((el) => {
                          return (
                            <div key={el}>
                              <RatingStar />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div>
                    <svg
                      width="41"
                      height="40"
                      viewBox="0 0 41 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.55599 18.7303L4.55598 18.7303L4.55503 18.7331C3.7624 21.0767 3.3623 23.3452 3.3623 25.5364V31.9417C3.3623 32.7701 4.03388 33.4417 4.86231 33.4417H13.0415C13.87 33.4417 14.5415 32.7701 14.5415 31.9417L14.5416 25.4637L14.5415 25.4596C14.5184 22.7092 14.9569 20.2092 15.8491 17.9531C16.6601 15.9336 17.6389 13.9864 18.7859 12.1114C19.2072 11.4226 19.0257 10.5099 18.3409 10.0535L13.8431 7.05637L13.8431 7.05637C13.2947 6.69091 12.5562 6.71943 12.0485 7.17179C10.5162 8.53707 9.12206 10.1627 7.86461 12.0452L7.86392 12.0462C6.47389 14.1384 5.37104 16.3668 4.55599 18.7303ZM22.4757 18.7303L22.4747 18.7331C21.6821 21.0767 21.282 23.3452 21.282 25.5364V31.9417C21.282 32.7701 21.9536 33.4417 22.782 33.4417H30.9613C31.7897 33.4417 32.4613 32.7701 32.4613 31.9417L32.4613 25.4637L32.4612 25.4596C32.4382 22.7092 32.8766 20.2092 33.7688 17.9531C34.5798 15.9336 35.5586 13.9864 36.7056 12.1114C37.1269 11.4226 36.9454 10.5099 36.2606 10.0535L31.7628 7.05637C31.2144 6.69091 30.4759 6.71943 29.9682 7.17179L30.3004 7.54454L29.9682 7.17179C28.4359 8.53708 27.0418 10.1627 25.7843 12.0452L25.7836 12.0462C24.3936 14.1384 23.2908 16.3668 22.4757 18.7303Z"
                        fill="#FFE566"
                        stroke="#FFE566"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-grey/30 max-xl:text-sm">
                    {testimonial.comment}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function RatingStar() {
  return (
    <>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.15861 1.30996C6.55219 0.697195 7.44781 0.697195 7.84139 1.30996L9.51676 3.91833C9.65218 4.12917 9.86181 4.28148 10.1042 4.34512L13.1026 5.13245C13.807 5.31742 14.0838 6.1692 13.6226 6.73287L11.6596 9.13227C11.5009 9.32622 11.4209 9.57266 11.4352 9.82282L11.613 12.9178C11.6548 13.6449 10.9302 14.1713 10.2516 13.9069L7.36304 12.7815C7.12956 12.6905 6.87044 12.6905 6.63696 12.7815L3.74839 13.9069C3.06981 14.1713 2.34523 13.6449 2.38699 12.9178L2.56476 9.82282C2.57912 9.57266 2.49905 9.32622 2.34038 9.13227L0.377388 6.73287C-0.0837613 6.1692 0.193001 5.31742 0.897396 5.13245L3.89582 4.34512C4.13819 4.28148 4.34782 4.12917 4.48324 3.91833L6.15861 1.30996Z"
          fill="#FFCE22"
        />
      </svg>
    </>
  );
}

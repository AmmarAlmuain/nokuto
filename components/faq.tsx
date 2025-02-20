"use client";

import Plus from "@/components/icons/plus";
import { questions } from "@/lib/data";
import { useState } from "react";

export default function Faq() {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  const menuButtons = [
    "all",
    "purchasing",
    "delivery",
    "returns",
    "customer care",
  ];
  const activeButtonCss = "font-semibold text-grey/10";
  const buttonCss = "font-medium text-grey/60 whitespace-nowrap";
  const [activeButton, setActiveButton] = useState<number>(0);
  const toggleActiveButton = (index: number) => {
    if (activeButton === index) {
      setActiveButton(0);
    } else {
      setActiveButton(index);
    }
  };
  const toggleQuestion = (id: number) => {
    if (activeQuestion === id) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(id);
    }
  };
  const filteredQuestions = questions.filter((question) => {
    return (
      question.category === menuButtons[activeButton] || activeButton === 0
    );
  });
  return (
    <>
      <section id="faq" className="w-full faq">
        <div className="flex w-full flex-col gap-y-[60px] max-xl:gap-y-10">
          {/* Here the header default message start! */}
          <div className="flex flex-col gap-y-5">
            <div className="flex h-[52px] max-md:h-fit max-md:flex-col max-md:gap-y-1">
              <h1 className="text-[38px] font-semibold uppercase text-grey/10 max-md:order-2 max-md:text-[28px]">
                Questions? We've Got You Covered.
              </h1>
              <span className="px-[10px] pt-1 text-sm font-semibold text-grey/60 max-md:order-1 max-md:px-0 max-md:pt-0">
                FAQ
              </span>
            </div>
            <div>
              <p className="w-full max-w-6xl text-grey/40 max-md:text-sm">
                At Nokuto, we aim to provide clarity at every step. Our FAQ
                section offers comprehensive answers to make your shopping
                experience smooth and enjoyable.
              </p>
            </div>
          </div>
          {/* Here its end! */}
          <div className="flex w-full items-center justify-start overflow-x-auto overflow-y-hidden border-b border-t border-white/95 py-[30px] max-xl:h-[62px] max-xl:py-5">
            <div className="flex">
              {menuButtons.map((text, index) => {
                return (
                  <div key={text} className="flex">
                    <button>
                      <span
                        onClick={() => toggleActiveButton(index)}
                        className={`${
                          activeButton === index ? activeButtonCss : buttonCss
                        } uppercase whitespace-nowrap`}
                      >
                        {text}
                      </span>
                    </button>
                    {index + 1 != menuButtons.length ? (
                      <div className="divider mx-4 border-r border-white/95 max-xl:mx-[10px]"></div>
                    ) : (
                      ""
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex items-start max-xl:flex-col gap-y-4 justify-start w-full">
            {Array.from({ length: 3 }).map((_, index) =>
              filteredQuestions[index * 4] ? (
                <div
                  key={index}
                  className="w-full flex flex-col px-2 max-xl:px-0 gap-y-4"
                >
                  {filteredQuestions
                    .slice(index * 4, index * 4 + 4)
                    .map((question, index) => (
                      <div key={index} className="w-full h-fit">
                        <div
                          className="flex flex-col items-center justify-between rounded-[14px] border border-white/95 p-6 transition-all"
                          onClick={() =>
                            toggleQuestion(questions.indexOf(question))
                          }
                        >
                          <div className="flex items-center justify-between w-full">
                            <h4 className="font-medium cursor-pointer text-grey/15">
                              {question.title}
                            </h4>
                            <div className="flex">
                              <div className="divider mx-1"></div>
                              <Plus
                                className={`transition-all duration-300 cursor-pointer ${
                                  activeQuestion === questions.indexOf(question)
                                    ? "rotate-45"
                                    : ""
                                }`}
                              />
                            </div>
                          </div>
                          <p
                            className={`w-full transition-all duration-300 ${
                              activeQuestion === questions.indexOf(question)
                                ? "mt-4 text-grey/60 flex"
                                : "hidden"
                            }`}
                          >
                            {question.description}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              ) : (
                <div key={index}></div>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import Plus from "@/components/icons/plus";
import { useState } from "react";

export default function Faq() {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  const menuButtons = [
    "all",
    "ordering",
    "shipping",
    "returns",
    "customer support",
  ];
  const questions = [
    {
      id: 1,
      title: "Can I modify my order after placing it?",
      category: "ordering",
      description:
        "Yes, you can modify your order within 24 hours of placing it by contacting our customer support.",
    },
    {
      id: 2,
      title: "How do I initiate a return?",
      category: "returns",
      description:
        "To initiate a return, please visit our Returns page and follow the instructions provided.",
    },
    {
      id: 3,
      title: "How can I unsubscribe from the newsletter?",
      category: "customer support",
      description:
        "You can unsubscribe from our newsletter by clicking the 'Unsubscribe' link at the bottom of any newsletter email.",
    },
    {
      id: 4,
      title: "Do you offer exchanges for products?",
      category: "customer support",
      description:
        "Yes, we offer exchanges for products within 30 days of purchase. Please visit our Exchanges page for more details.",
    },
    {
      id: 5,
      title: "How can I place an order on Klothink?",
      category: "ordering",
      description:
        "To place an order, simply add items to your cart and proceed to checkout. You can create an account or check out as a guest.",
    },
    {
      id: 6,
      title: "What payment methods do you accept?",
      category: "customer support",
      description:
        "We accept various payment methods, including credit/debit cards, PayPal, and other online payment options.",
    },
    {
      id: 7,
      title: "How can I track my order?",
      category: "ordering",
      description:
        "You can track your order by logging into your account and visiting the 'Order History' section.",
    },
    {
      id: 8,
      title: "What is your shipping policy?",
      category: "shipping",
      description:
        "Our shipping policy includes various options. Please visit our Shipping Policy page for detailed information.",
    },
    {
      id: 9,
      title: "Are there any additional fees for returns?",
      category: "returns",
      description:
        "No, there are no additional fees for returns if you follow the instructions on our Returns page.",
    },
    {
      id: 10,
      title: "How do I create an account on Klothink?",
      category: "customer support",
      description:
        "To create an account on Klothink, click on the 'Sign Up' button at the top right corner of our homepage and fill in the required details.",
    },
    {
      id: 11,
      title: "Can I change my account information?",
      category: "customer support",
      description:
        "Yes, you can change your account information by logging into your account and going to the 'Account Settings' section.",
    },
    {
      id: 12,
      title: "Are my personal details secure on Klothink?",
      category: "customer support",
      description:
        "Yes, your personal details are secure on Klothink. We use advanced security measures to protect your information.",
    },
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
      <section className="w-full faq">
        <div className="flex w-full flex-col gap-y-[60px] max-xl:gap-y-10">
          {/* Here the header default message start! */}
          <div className="flex flex-col gap-y-5">
            <div className="flex h-[52px] max-md:h-fit max-md:flex-col max-md:gap-y-1">
              <h1 className="text-[38px] font-semibold uppercase text-grey/10 max-md:order-2 max-md:text-[28px]">
                Questions? We Have Answers.
              </h1>
              <span className="px-[10px] pt-1 text-sm font-semibold text-grey/60 max-md:order-1 max-md:px-0 max-md:pt-0">
                FAQ
              </span>
            </div>
            <div>
              <p className="w-full max-w-6xl text-grey/40 max-md:text-sm">
                Ease into the world of Klothink with clarity. Our FAQs cover a
                spectrum of topics, ensuring you have the information you need
                for a seamless shopping experience.
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
                          onClick={() => toggleQuestion(question.id)}
                        >
                          <div className="flex items-center justify-between w-full">
                            <h4 className="font-medium cursor-pointer text-grey/15">
                              {question.title}
                            </h4>
                            <div className="flex">
                              <div className="divider mx-1"></div>
                              <Plus
                                className={`transition-all duration-300 cursor-pointer ${
                                  activeQuestion === question.id
                                    ? "rotate-45"
                                    : ""
                                }`}
                              />
                            </div>
                          </div>
                          <p
                            className={`w-full transition-all duration-300 ${
                              activeQuestion === question.id
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
                <></>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}

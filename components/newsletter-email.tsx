import Logo from "@/components/icons/logo";

export default function NewsLetterEmail() {
  return (
    <>
      <section className="w-full">
        <div className="flex flex-col gap-y-5 w-full max-w-xl">
          <Logo className="w-20 h-20" />
          <h1 className="font-semibold text-3xl">Welcome to Nokuto! 🌟</h1>
          <hr />
          <p className="text-sm">
            Dear Customer, Welcome to the Nokuto family! We're thrilled to have
            you on board. 🎉 <br /> As a special thank you for subscribing,
            we're excited to offer you an exclusive discount on the first
            purchase. Use the code{" "}
            <span className="font-semibold text-grey/15 underline">
              WELCOME25
            </span>{" "}
            at checkout to enjoy 10% off your order. 🛒
          </p>
          <hr />
          <p>
            Here's what you can expect from us: <br />
            <span className="font-semibold text-grey/15">New Arrivals:</span> Be
            the first to know about our latest products and collections. <br />
            <span className="font-semibold text-grey/15">
              Exclusive Offers:{" "}
            </span>
            Enjoy subscriber-only discounts and promotions.
            <br />
            <span className="font-semibold text-grey/15">
              Style Inspiration:{" "}
            </span>
            Get tips and ideas to elevate your look.
            <br />
            <span className="font-semibold text-grey/15">
              Behind-the-Scenes:{" "}
            </span>
            Peek into how we create and curate our products.
          </p>
          <hr />
          <p>
            Start Shopping: Ready to explore?{" "}
            <a
              href="https://www.nokuto.shop"
              className="text-yellow/50 underline"
            >
              Click here
            </a>{" "}
            to visit our website and start shopping with your special discount!
          </p>
        </div>
      </section>
    </>
  );
}

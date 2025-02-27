import Faq from "@/components/faq";
import Details from "@/components/product/details";
import Reviews from "@/components/product/reviews";
import { Product, products, Review } from "@/lib/data";

export default async function ProfuctDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const product = products.find((product) => {
    return product.slug === slug;
  });
  return (
    <>
      <main className="px-20 py-20 max-xl:px-4">
        <Details product={product as Product} />
        <div className="py-20 divider max-xl:py-10"></div>
        <Reviews reviews={product?.reviews as Review[]} />
        <div className="py-20 divider max-xl:py-10"></div>
        <Faq />
      </main>
    </>
  );
}

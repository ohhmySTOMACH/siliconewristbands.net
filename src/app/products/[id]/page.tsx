import { notFound } from "next/navigation";
import Banner from "@/components/Banner";
import PublicProductWithMerchiCheckout from "@/public_components/PublicProductWithMerchiCheckout";
import { merchiGetProduct } from "@/utils/merchi_entity_helpers";

export default async function Page(props: any) {
  const id = props.params.id;
  const currentProduct = await merchiGetProduct(id);
  if (!currentProduct) return notFound();
  // console.log("Log - Current Product Data: ", currentProduct);

  return (
    <main className="main">
      <Banner>
        <h1 className="pl-8 text-2xl">Products</h1>
      </Banner>
      <PublicProductWithMerchiCheckout
        productJson={currentProduct}
        hideDomainName={true}
      />
    </main>
  );
}

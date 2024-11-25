import Banner from "@/components/Banner";
import ProductTileWrapper from "@/components/ProductTileWrapper";
import LoadingFallback from "@/components/Loading";
import { Suspense } from "react";
import { merchiGetProducts } from "@/public_components/merchi_entity_helpers";

export default async function Page() {
  const productsData = await merchiGetProducts();

  return (
    <main className="main">
      <Banner>
        <h1 className="pl-8 text-2xl">Products</h1>
      </Banner>
      <Suspense fallback={<LoadingFallback />}>
        <ProductTileWrapper products={productsData} />
      </Suspense>
    </main>
  );
}

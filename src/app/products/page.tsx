import Banner from "@/components/Banner";
import ProductTileWrapper from "@/components/ProductTileWrapper";
import LoadingFallback from "@/components/Loading";
import { Suspense } from "react";
import { fetchProductList, fetchSSR } from "@/utils/merchi-ssr";
import MERCHI from "@/utils/merchi";

async function getProducts() {
  const domainId = Number(process.env.NEXT_PUBLIC_DOMAIN_ID);
  const products = MERCHI.products;
  const parameters = {
    inDomain: domainId,
    categoryId: MERCHI.getQueryStringValue("category_id"),
    limit: 30,
    offset: 0,
    order: "desc",
    sort: "id",
    q: "",
    embed: {
      categories: {},
      component: {},
      defaultJob: {},
      domain: {
        activeTheme: { mainCss: {} },
        logo: {},
      },
      draftTemplates: { file: {} },
      groupBuyStatus: {},
      groupVariationFields: { options: { linkedFile: {} } },
      images: {},
      independentVariationFields: { options: { linkedFile: {} } },
      publicFiles: {},
      featureImage: {},
    },
  };

  const data = await fetchProductList(parameters);
  return data;
}

export default async function Page() {
  let products = [];
  try {
    const data = await getProducts();
    products = data.props.data;
  } catch (error) {
    products = [];
  }

  return (
    <main className="main">
      <Banner>
        <h1 className="pl-8 text-2xl">Products</h1>
      </Banner>
      <Suspense fallback={<LoadingFallback />}>
        <ProductTileWrapper products={products} />
      </Suspense>
    </main>
  );
}

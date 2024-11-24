import Banner from "@/components/Banner";
import ProductTile from "@/components/ProductTile";
import { fetchSSR } from "@/utils/merchi-ssr";
import MERCHI from "@/utils/merchi";

async function getProducts() {
  console.log("Log-domainId type:", typeof process.env.NEXT_PUBLIC_DOMAIN_ID);
  const domainId = Number(process.env.NEXT_PUBLIC_DOMAIN_ID);
  const products = MERCHI.products;
  const embedProducts = {
    inDomain: domainId,
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

  const data = await fetchSSR(products, embedProducts);
  return data;
}

export default async function Page() {
  const data = await getProducts();
  const products = data.props.data;

  return (
    <main className="main">
      <Banner>
        <h1 className="pl-8 text-2xl">Products</h1>
      </Banner>
      <ProductTile products={products} />
    </main>
  );
}

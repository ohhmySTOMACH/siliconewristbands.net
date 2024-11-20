import Banner from "@/components/Banner";
import ProductTile from "@/components/ProductTile";
import { useSSR } from "@/utils/merchi-ssr";
import MERCHI from "@/utils/merchi";

export default async function Page() {
  async function getProducts() {
    console.log("Log-domainId type:", typeof process.env.NEXT_PUBLIC_DOMAIN_ID);
    return useSSR(
      (onSuccess: (products: any) => void, onFailed: (error: any) => void) => {
        MERCHI.products.get(onSuccess, onFailed, {
          inDomain: Number(process.env.NEXT_PUBLIC_DOMAIN_ID),
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
        });
      }
    );
  }

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

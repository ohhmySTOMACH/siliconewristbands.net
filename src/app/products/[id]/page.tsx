import MERCHI from "@/utils/merchi";
import { fetchSSR } from "@/utils/merchi-ssr";
import Banner from "@/components/Banner";
import PublicProductWithMerchiCheckout from "@/public_components/PublicProductWithMerchiCheckout";

async function getProductData(id: string) {
  const newProduct = new MERCHI.Product();
  newProduct.id(id);

  const embedProduct = {
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
  };

  const productData = await fetchSSR(newProduct, embedProduct);

  return productData;
}

export default async function Page(props: any) {
  const id = props.params.id;
  const currentProduct = await getProductData(id);

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

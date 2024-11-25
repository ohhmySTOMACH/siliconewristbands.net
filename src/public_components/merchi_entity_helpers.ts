import { Merchi } from "merchi_sdk_ts";
import { Product } from "merchi_sdk_ts/src/entities/product";
import { env } from "process";

export const revalidate = env.NEXT_PUBLIC_ONE_DAY;

const domainId = Number(env.NEXT_PUBLIC_DOMAIN_ID);

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

export async function merchiGetProduct(id: string | number, embed?: any) {
  if (!id) {
    throw new Error("Product ID is required.");
  }

  const merchi = new Merchi();
  return await merchi.Product.get(id, { embed: embed || embedProduct }).then(
    (p: any) => p.toJson()
  );
}

export const merchiGetProducts = async () => {
  const merchi = new Merchi();
  let products: any[] = [];
  try {
    const result = await merchi.Product.list({
      embed: embedProduct,
      limit: 25,
      inDomain: domainId,
    });

    products = result.items.map((product: Product) => {
      const productJSON = product.toJson();
      return productJSON;
    });
  } catch (error) {
    console.error("Error fetching products:", error);
  }
  return products;
};

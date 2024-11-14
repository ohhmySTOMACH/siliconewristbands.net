// app/page.tsx
"use server";
import MERCHI from "../utils/merchi";
import Banner from "../components/Banner";
import { useSSR } from "../utils/merchi-ssr";
import ProductTile from "@/components/ProductTile";

async function getProducts() {
  return useSSR(
    (onSuccess: (products: any) => void, onFailed: (error: any) => void) => {
      MERCHI.products.get(onSuccess, onFailed, {
        inDomain: 206,
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

export default async function Home() {
  const data = await getProducts();
  const products = data.props.data;

  return (
    <div>
      <Banner>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-4">
            <h1 className="text-2xl font-bold">We do Silicone Wristbands</h1>
            <p className="mt-2">
              We're dedicated to doing silicone wristbands - and we do them
              GREAT! Free online proofs and fast 12-day turnaround. With over 10
              years experience, we guarantee your satisfaction!
            </p>
            <div className="mt-4 mb-4 flex">
              <a
                className="btn-blue text-white py-2 px-4 rounded-xl mr-2 shadow-custom"
                href="/faq"
              >
                Visit FAQ
              </a>
              <a
                className="btn-orange text-white py-2 px-4 rounded-xl shadow-custom"
                href="/order"
              >
                Order Now
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex items-center">
            <img
              alt="Customize your silicone wristbands"
              className="rounded mx-auto w-full h-auto"
              src="/images/banner2.png"
              width={480}
              height={329}
            />
          </div>
        </div>
      </Banner>
      <div className="px-4 sm:px-16">
        <h2 className="text-text-blue text-2xl font-semibold mt-4">
          Select a Wristband from the Choices Below
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {products &&
            products.map((product: any) => (
              <ProductTile key={`product-${product.id}`} product={product} />
            ))}
        </div>
      </div>
      <div className="w-full px-2 sm:px-16 my-8">
        <div className="w-full bg-white pt-4 px-8 flex flex-col md:flex-row items-center rounded border border-gray-700 shadow-md">
          <div className="md:w-1/2">
            <img
              className="rounded lg-auto w-full"
              src="/images/groupshot.jpeg"
              alt="Lots of silicone wristbands"
            />
          </div>
          <div className="md:w-1/2 p-4">
            <h2 className="text-2xl font-bold">
              Free online proofs, fast turnaround.
            </h2>
            <p className="mt-2">
              Silicone Wristbands Australia is the fastest and easiest way to
              buy custom silicone wristbands. We offer free online proofs,
              12-day turnaround, and shipping Australia wide or pickup from our
              office in Melbourne.
            </p>
            <p className="mt-2">
              We have the finest selection of custom rubber bracelets, custom
              silicone wristbands, custom rubber wristbands, rubber band
              bracelets, personalised wristbands, and custom printed wristbands.
            </p>
            <p className="mt-2">
              For any queries or questions you can call us at
              <a
                href="tel:+61390014888"
                className="text-text-blue hover:text-black ml-1"
              >
                (03) 9001 4888
              </a>{" "}
              or email at
              <a
                href="mailto:info@siliconewristbandsaustralia.com.au"
                className="text-text-blue hover:text-black ml-1"
              >
                info@siliconewristbandsaustralia.com.au
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

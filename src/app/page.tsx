// app/page.tsx
"use server";
import MERCHI from "@/utils/merchi";
import Banner from "@/components/Banner";
import { ssrHandler } from "@/utils/merchi-ssr";
import ProductTile from "@/components/ProductTile";

const ONE_DAY = 60 * 60 * 24;
export const revalidate = ONE_DAY;

async function useProducts() {
  console.log("Log-domainId type:", typeof process.env.NEXT_PUBLIC_DOMAIN_ID);

  return ssrHandler(
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

export default async function Home() {
  const data = await useProducts();
  const products = data.props.data;

  return (
    <div>
      <Banner>
        <div className="container flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-2">
            <h1 className="text-2xl font-bold">We do Silicone Wristbands</h1>
            <p className="mt-2">
              We&#39re dedicated to doing silicone wristbands - and we do them
              GREAT! Free online proofs and fast 12-day turnaround. With over 10
              years experience, we guarantee your satisfaction!
            </p>
            <div className="mt-4 mb-4 flex flex-col gap-4 md:!gap-0 md:flex-row">
              <a
                className="btn-blue btn-xl text-white p-4 rounded-xl mr-1 shadow-custom"
                href="/faq"
              >
                Visit FAQ
              </a>
              <a
                className="btn-orange btn-xl text-white p-4 rounded-xl mr-1 shadow-custom"
                href="/products"
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
      <ProductTile products={products} />
      <div className="container w-full px-2 sm:px-16 my-8">
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

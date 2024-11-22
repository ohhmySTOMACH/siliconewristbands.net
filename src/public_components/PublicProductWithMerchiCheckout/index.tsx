"use client";

import { useState } from "react";
// import { doAddCartItem, doToggleCartOpen } from "merchi_cart/src";
import { getNextBackendUri } from "../utilities";
import MerchiProductForm from "merchi_product_form";
import dynamic from "next/dynamic";
import "@/styles/customized-product-form.css";
import "@/styles/merchi-cart-modal.css";

const ModalMerchiCheckout = dynamic(() => import("./ModalMerchiCheckout"), {
  ssr: false,
});
const ProductImages = dynamic(() => import("./ProductImages"), { ssr: false });
const ProductInformation = dynamic(() => import("./ProductInformation"), {
  ssr: false,
});

const BACKEND_URI = getNextBackendUri();

interface Props {
  currentUser?: any;
  doNotTrackInvoiceConversion?: boolean;
  doNotTrackQuoteConversion?: boolean;
  hideCalculatedPrice?: boolean;
  hideCountry?: boolean;
  hideDomainName?: boolean;
  hideDrafting?: boolean;
  hideInfo?: boolean;
  hideInvoicePdf?: boolean;
  hidePreview?: boolean;
  hideProductType?: boolean;
  hideTitle?: boolean;
  productJson: any;
  redirectAfterSuccessUrl?: string;
  redirectAfterQuoteSuccessUrl?: string;
  redirectWithValue?: boolean;
  singleColumn?: boolean;
  stripeOnly?: boolean;
}

function PublicProductWithMerchiCheckout({
  currentUser,
  hideCalculatedPrice,
  hideCountry,
  hideDomainName,
  hideDrafting,
  hideInfo,
  hidePreview,
  hideProductType = true,
  hideTitle,
  productJson,
  redirectAfterSuccessUrl,
  redirectAfterQuoteSuccessUrl,
  redirectWithValue,
}: Props) {
  const [product, setProduct] = useState(productJson || {});
  const [isOpen, setIsOpen] = useState(false);
  const [invoice, setInvoice] = useState({});
  const defaultJob = (productJson && productJson.defaultJob) || {};
  const [job, setJob] = useState({ client: currentUser || {}, ...defaultJob });
  const [isBuyNow, setIsBuy] = useState(false);

  const openCheckoutModal = (job: any, isBuyNow: boolean) => {
    setJob(job);
    setIsOpen(true);
    setIsBuy(isBuyNow);
  };

  const customErrorHandler = (error: any) => {
    console.error(
      "Custom Error - An error occurred while adding to cart:",
      error
    );
  };

  const onSuccessfulAddToCart = () => {
    (window as any).toggleCartOpen();
  };

  const addToCart = (jobJson: any) => {
    // console.log("Log - jobJson:", jobJson);

    if (window && typeof window !== "undefined") {
      (window as any).addCartItem(
        jobJson,
        onSuccessfulAddToCart,
        customErrorHandler
      );
    }
  };

  return (
    <>
      <div className="container pt-2 md:!pt-4 larger-425:px-5 flex justify-center">
        <div className="w-full p-2 sm:!p-8 flex flex-col md:flex-row flex-wrap justify-center gap-x-8 rounded-lg border border-neutral-800 bg-background">
          <div className="flex flex-1 flex-col flex-wrap w-full md:!w-1/2 content-center gap-y-10">
            {!hidePreview && product.id && <ProductImages product={product} />}
            {!hideInfo && product.id && (
              <ProductInformation product={product} />
            )}
          </div>
          <div className="flex flex-col p-0 sm:p-4 gap-y-5 flex-1 w-auto text-lg">
            <MerchiProductForm
              allowAddToCart={true}
              apiUrl={`${BACKEND_URI}v6/`}
              hideCalculatedPrice={hideCalculatedPrice}
              hideCountry={hideCountry}
              hideDomainName={hideDomainName}
              hideProductType={hideProductType}
              hideTitle={hideTitle}
              initProduct={product}
              onAddToCart={(jobJson: any) => addToCart(jobJson)}
            />
          </div>
        </div>
      </div>

      {/* <MerchiCartModal
        currentUser={currentUser}
        cartButtonWrappedInContainer={true}
        showOpenCartButton={false}
        domainId={product.domain.id}
      /> */}

      <ModalMerchiCheckout
        currentUser={currentUser}
        hideDrafting={!!hideDrafting}
        includeDomainSignup={false}
        invoice={invoice}
        isBuyNowRequest={isBuyNow}
        isOpen={isOpen}
        job={job}
        product={product}
        redirectAfterSuccessUrl={redirectAfterSuccessUrl}
        redirectAfterQuoteSuccessUrl={redirectAfterQuoteSuccessUrl}
        redirectWithValue={redirectWithValue}
        setInvoice={setInvoice}
        setJob={setJob}
        toggleMerchiCheckout={() => setIsOpen(!isOpen)}
      />
    </>
  );
}

export default PublicProductWithMerchiCheckout;

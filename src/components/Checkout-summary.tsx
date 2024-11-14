"use client";
import { useState, useEffect } from "react";
import {
  PanelCartItems,
  PanelCartShipment,
  PanelClearCart,
  PanelClientCheckout,
  PanelEditCartItem,
} from "merchi_cart/src/panels";
import { Button } from "merchi_cart/src/buttons";
// import { actionFetchTheme, initMerchiCart } from "merchi_cart/src/store";
import CartProvider, {
  PropsCart,
  useCartContext,
} from "merchi_cart/src/CartProvider";
import { shipmentFormId } from "merchi_cart/src/utilities/shipment";
import { tabIdShipment } from "merchi_cart/src/utilities/tabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import "@/styles/merchi-cart-modal.css";

export function CheckoutComponents(): JSX.Element {
  const {
    activeTabIndex,
    cart,
    domainId,
    // includeTheme,
    // initialiseCart,
    setActiveTabIndex,
    loadingTotals,
  } = useCartContext();

  console.log("Log-loadingTotals:", loadingTotals);
  console.log("Log-domainId:", domainId);

  const [isOpen, setIsOpen] = useState(false);

  const [activePanel, setActivePanel] = useState("shipping");

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  // useEffect(() => {
  //   if (initialiseCart && domainId) {
  //     if (includeTheme) {
  //       actionFetchTheme(domainId);
  //     }
  //     initMerchiCart(domainId);
  //   }
  // }, [domainId, includeTheme, initialiseCart]);

  console.log("Log-activeTabIndexId:", activeTabIndex);

  useEffect(() => {
    if (activeTabIndex === 2) {
      setActivePanel("payment");
    } else {
      setActivePanel("shipping");
    }
  }, [activeTabIndex]);

  const handleBackClick = () => {
    setActiveTabIndex(tabIdShipment);
    setActivePanel("shipping");
  };

  return (
    <>
      <div className="pt flex flex-col sm:flex-row gap-4 w-full">
        <div className="cart-summary flex flex-col w-full h-full max-w-md">
          <div>
            <button
              onClick={toggleCart}
              className="border-0 w-full flex items-center justify-between p-4 whitespace-nowrap"
            >
              <div className="flex items-center gap-2">
                <span className="font-medium text-text-blue">
                  Show order summary
                </span>
              </div>
              <div className="block md:hidden">
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="size-3.5 text-text-blue"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 15.75 7.5-7.5 7.5 7.5"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="size-3.5 text-text-blue"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                )}
              </div>
            </button>
          </div>
          <div
            className={`
              transition-all duration-300 ease-in-out
      ${isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}
      md:block md:max-h-full md:!opacity-100 overflow-hidden border-x border-b rounded-b
            `}
          >
            <div className="p-4 bg-transparent">
              <div className="space-y-4">
                <PanelCartItems />
                <PanelEditCartItem cart={cart} />
                <PanelClearCart />
              </div>
            </div>
          </div>
        </div>
        <div className="shipping-contact-payment w-full p-4">
          <div className="flex flex-row gap-1 items-center">
            <button
              className={`bg-transparent border-0 px-2 py-2 font-medium text-sm
          ${activePanel === "shipping" ? "text-text-blue" : "bg-gray-200"}`}
              onClick={() => setActivePanel("shipping")}
            >
              Shipping
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="size-3.5 text-text-blue"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
            <button
              className={`bg-transparent border-0 px-2 py-2 font-medium text-sm whitespace-nowrap
          ${activePanel === "payment" ? "text-text-blue" : "bg-gray-200"}`}
              onClick={() => setActivePanel("payment")}
            >
              Contact information
            </button>
          </div>
          <div className="checkout-info flex flex-col w-full mt-4">
            <div
              className={`flex-col ${
                activePanel === "shipping" ? "flex" : "hidden"
              } w-full`}
            >
              <PanelCartShipment />
              {/* <ButtonNextDynamic /> */}
              {/* Everytime on this page should recheck the form validation */}
              <Button
                disabled={loadingTotals}
                className="checkout-tab-button mt-4 px-4 py-2"
                form={shipmentFormId}
                type="submit"
              >
                {loadingTotals && <FontAwesomeIcon icon={faCircleNotch} spin />}
                <span style={{ marginLeft: loadingTotals ? "5px" : "0" }}>
                  {loadingTotals ? "Loading..." : "Continue to Information"}
                </span>
              </Button>
            </div>

            {/* Display Payment panel if active */}
            <div
              className={`flex-col items-center ${
                activePanel === "payment" ? "flex" : "hidden"
              } w-full`}
            >
              <PanelClientCheckout />
              {/* <button
                onClick={() => setActivePanel("confirmation")}
                className="checkout-tab-button mt-4 px-4 py-2"
              >
                Continue to Payment
              </button> */}
              <div
                className="flex items-center mt-4 text-text-blue cursor-pointer hover:text-[#0079aa]"
                onClick={handleBackClick}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="size-3.5 mr-2 text-text-blue hover:text-[#0079aa]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
                <span>Back to Shipping</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function CheckoutSummary(props: PropsCart): JSX.Element {
  return (
    <CartProvider {...props} domainId={206}>
      <CheckoutComponents />
    </CartProvider>
  );
}

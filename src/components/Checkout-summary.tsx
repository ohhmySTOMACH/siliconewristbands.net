"use client";
import { useState, useEffect } from "react";
import {
  useCartContext,
  CartProvider,
  CartTotals,
  panels,
  utilities,
  buttons,
} from "merchi_cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import "@/styles/merchi-cart-modal.css";

export function CheckoutComponents(): JSX.Element {
  const {
    activeTabIndex,
    cart,
    fetchingShipmentGroups,
    loadingTotals,
    setActiveTabIndex,
  } = useCartContext();

  const { shipmentGroups } = cart;

  const [isOpen, setIsOpen] = useState(false);

  const [activePanel, setActivePanel] = useState("shipping");

  const { refetchCart } = useCartContext();

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const toggleCart = () => {
    setIsOpen((prevIsOpen) => {
      const newIsOpen = !prevIsOpen;
      refetchCart();
      return newIsOpen;
    });
  };

  // console.log("Log-domainId:", domainId);

  console.log("Log-fetchingShipmentGroups:", fetchingShipmentGroups);
  console.log("Log-shipmentGroups length:", shipmentGroups);

  useEffect(() => {
    if (activeTabIndex === 2) {
      setActivePanel("payment");
    } else {
      setActivePanel("shipping");
    }
  }, [activeTabIndex]);

  const handleBackClick = () => {
    setActiveTabIndex(utilities.tabIdShipment);
    setActivePanel("shipping");
  };

  useEffect(() => {
    if (shipmentGroups) {
      const anySelected = shipmentGroups.some(
        (group: any) => group.selectedQuote && group.selectedQuote.id
      );
      setIsButtonDisabled(!anySelected);
    }
  }, [shipmentGroups]);

  return (
    <>
      <div className="container px-0 flex flex-col sm:flex-row gap-4 md:!gap-0 w-full">
        <div className="cart-summary flex flex-col w-full h-full max-w-md">
          <div>
            <button
              onClick={toggleCart}
              className="bg-bg border-0 w-full flex items-center justify-between p-4 whitespace-nowrap h-[68px]"
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
            <div className="py-4 bg-transparent">
              <div className="space-y-4">
                <panels.PanelCartItems />
                <panels.PanelEditCartItem cart={cart} />
                <panels.PanelClearCart />
                <CartTotals />
              </div>
            </div>
          </div>
        </div>
        <div className="shipping-contact-payment w-full">
          <div className="bg-bg flex flex-row gap-1 items-center h-[68px]">
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
              // onClick={() => setActivePanel("payment")}
            >
              Contact information
            </button>
          </div>
          <div className="checkout-info flex flex-col w-full mt-4 px-2 sm:px-4">
            <div
              className={`rounded border border-gray-700 flex-col ${
                activePanel === "shipping" ? "flex" : "hidden"
              } w-full`}
            >
              <panels.PanelCartShipment />
              {/* TODO: If no shipment group checked, disable the button */}
              <buttons.Button
                disabled={isButtonDisabled || loadingTotals}
                className="checkout-tab-button m-4 px-4 py-2"
                form={utilities.shipmentFormId}
                type="submit"
              >
                {loadingTotals && <FontAwesomeIcon icon={faCircleNotch} spin />}
                <span style={{ marginLeft: loadingTotals ? "5px" : "0" }}>
                  {loadingTotals ? "Loading..." : "Continue to Information"}
                </span>
              </buttons.Button>
            </div>

            {/* Display Payment panel if active */}
            <div
              className={`rounded border border-gray-700 flex-col items-center ${
                activePanel === "payment" ? "flex" : "hidden"
              } w-full`}
            >
              <panels.PanelClientCheckout />
              <div
                className="flex items-center my-4 text-text-blue cursor-pointer hover:text-[#0079aa]"
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

export default function CheckoutSummary(): JSX.Element {
  return (
    <CartProvider
      showCartItemInfo={false}
      domainId={Number(process.env.NEXT_PUBLIC_DOMAIN_ID)}
    >
      <CheckoutComponents />
    </CartProvider>
  );
}

"use client";
import React, { useState, useEffect } from "react";
import logo from "../../../public/images/SiliconeWristbandLogo.png";
import { FiMenu, FiX } from "react-icons/fi";
import MainNav from "./MainNav";
import { MerchiCartModal } from "merchi_cart";
import "@/styles/merchi-cart-modal.css";
import "@/styles/customized-product-form.css";
import Image from "next/image";
import CheckoutFooter from "@/components/CheckoutButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";

function HeaderNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentPath = usePathname();

  // useEffect(() => {
  //   const handleClick = () => {
  //     console.log("Cart button clicked!");

  //     const observer = new MutationObserver((mutationsList, observer) => {
  //       const modalDialog = document.querySelector(".modal-dialog");

  //       const tabPane = document.querySelector(
  //         ".modal-dialog .modal-content .merchi-tab-pane"
  //       );

  //       const editCartTabPanel = document.querySelector(
  //         ".modal-content .merchi-tab-pane .merchi-tab-panel:nth-of-type(2)"
  //       );

  //       const cartSummaryTabPanel = document.querySelector(
  //         ".modal-content .merchi-tab-pane .merchi-tab-panel:nth-of-type(3)"
  //       );

  //       console.log("Log-modalDialog:", modalDialog);
  //       console.log("Log-tabPane", tabPane);
  //       console.log("Log-secondTabPanel:", editCartTabPanel);
  //       console.log("Log-thirdTabPanel:", cartSummaryTabPanel);

  //       if (modalDialog && editCartTabPanel && cartSummaryTabPanel) {
  //         const editButton = cartSummaryTabPanel.querySelector(
  //           "div table tbody tr td button:nth-of-type(1)"
  //         );

  //         if (editButton) {
  //           console.log("Log-editButton:", editButton);

  //           // Add event listener to edit button
  //           editButton.addEventListener("click", () => {
  //             console.log("Log-Edit button clicked!");
  //             (modalDialog as HTMLElement).style.width = "90%";
  //             (modalDialog as HTMLElement).style.maxWidth = "90%";
  //           });
  //         } else {
  //           console.error("Edit button not found!");
  //         }
  //       }
  //       observer.disconnect();
  //     });
  //     observer.observe(document.body, { childList: true, subtree: true });
  //   };

  //   const cartButton = document.querySelector(".btn.cart-icon-button-class");

  //   if (!cartButton) {
  //     console.error("Cart button not found!");
  //     return;
  //   }

  //   cartButton.addEventListener("click", handleClick);

  //   // Cleanup listener on unmount
  //   return () => {
  //     cartButton.removeEventListener("click", handleClick);
  //   };
  // }, []);

  return (
    <div className="container">
      <nav className="pr-4 pb-4 sm:!pb-0 bg-transparent flex flex-col items-start md:flex-row md:items-center md:justify-center md:gap-8">
        <div className="flex flex-row justify-between w-full md:w-auto">
          <a href="/" className="flex-shrink-0">
            <Image
              alt="Custom Silicone Wristbands by Silicone Wristbands Australia"
              src={logo.src}
              height={40}
              width={200}
              priority
            />
          </a>

          {/* Burger Menu Toggle Button */}
          <button
            className="md:hidden ml-4 mt-2 text-gray-300 focus:outline-none border-gray-300 rounded-sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        <div className="flex flex-col gap-2 items-start md:items-end xl:flex-row xl:items-center w-full">
          {/* Telephone */}
          <div className="flex flex-row w-full justify-between items-center xl:order-last mt-2 xl:!mt-0">
            <a
              href="tel:+61390014888"
              className="flex flex-row items-center text-lg text-text-blue font-bold tracking-wide no-underline whitespace-nowrap"
            >
              <div className="flex items-center justify-center p-2">
                <FontAwesomeIcon
                  icon={faPhone}
                  style={{
                    borderRadius: "4px",
                    fontSize: "15px",
                  }}
                />
              </div>
              <div className="ml-1 flex">
                <p className="text-xl font-medium m-0">(03) 9001 4888</p>
              </div>
            </a>
            <div className="nav-cart-button">
              {currentPath !== "/checkouts" && (
                <MerchiCartModal
                  cartButtonWrappedInContainer={true}
                  domainId={Number(process.env.NEXT_PUBLIC_DOMAIN_ID)}
                  loading={true}
                  footer={<CheckoutFooter />}
                  showCartItemInfo={false}
                />
              )}
            </div>
          </div>

          {/* Main Menu */}
          <div
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } w-full md:flex md:items-center md:space-x-4 order-3 xl:order-2`}
          >
            <MainNav />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default HeaderNavigation;

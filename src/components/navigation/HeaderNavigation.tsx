"use client";
import React, { useState } from "react";
import logo from "../../../public/images/logo.png";
import { FiMenu, FiX } from "react-icons/fi";
import MainNav from "./MainNav";
import { MerchiCartModal } from "merchi_cart";
import "@/styles/merchi-cart-modal.css";
import "@/styles/customized-product-form.css";
import Image from "next/image";
import CheckoutFooter from "@/components/CheckoutButton";

function HeaderNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const defaultAlert = {
    icon: null,
    message: "Default message",
    show: true,
    title: "Alert Title",
    type: "info" as "info" | "success" | "danger" | "warning" | undefined,
  };

  return (
    <div>
      <nav className="px-4 sm:px-20 bg-gray-200 flex flex-col items-start md:px-32 md:flex-row md:items-center md:justify-center md:gap-8">
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  color="#009bde"
                  fill="white"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#009bde"
                  className="size-6"
                >
                  <rect width="24" height="24" rx="4" fill="#009bde" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
              </div>
              <div className="ml-1 flex">
                <p className="text-xl font-medium m-0">(03) 9001 4888</p>
              </div>
            </a>
            <div className="nav-cart-button">
              <MerchiCartModal
                cartButtonWrappedInContainer={true}
                domainId={Number(process.env.NEXT_PUBLIC_DOMAIN_ID)}
                loading={true}
                footer={<CheckoutFooter />}
              />
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

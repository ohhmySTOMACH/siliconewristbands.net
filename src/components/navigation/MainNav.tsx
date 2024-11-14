"use client";
import React from "react";
import { usePathname } from "next/navigation";

interface Props {
  pathname?: string | null;
}

export default function MainNav({ pathname }: Props) {
  // Helper function to determine if nav item is active
  const currentPath = usePathname();

  const navItemIsActive = (href: string) => {
    if (href === "/" && currentPath === "/") {
      return true;
    }

    if (href !== "/" && currentPath && currentPath.startsWith(href)) {
      return true;
    }

    return false;
  };

  return (
    <nav className="w-full md:w-auto">
      <ul className="w-full flex flex-col pl-0 md:flex-row list-none m-0">
        <li className="w-full md:flex md:items-center">
          <a
            href="/"
            className={`text-text-blue font-bold text-base p-2 md:p-4 hover:text-black ${
              navItemIsActive("/")
                ? "text-white bg-banner-blue border-none shadow-none p-0 md:!p-6"
                : ""
            }`}
          >
            Home
          </a>
        </li>
        <li className="w-full md:flex md:items-center">
          <a
            href="/order"
            className={`text-text-blue font-bold text-base p-2 md:p-4 hover:text-black whitespace-nowrap ${
              navItemIsActive("/order")
                ? "text-white bg-banner-blue border-none shadow-none p-0 md:!p-6"
                : ""
            }`}
          >
            Order Now
          </a>
        </li>
        <li className="w-full md:flex md:items-center">
          <a
            href="/about"
            className={`text-text-blue font-bold text-base p-2 md:p-4 hover:text-black ${
              navItemIsActive("/about")
                ? "text-white bg-banner-blue border-none shadow-none p-0 md:!p-6"
                : ""
            }`}
          >
            About
          </a>
        </li>
        <li className="w-full md:flex md:items-center">
          <a
            href="/faq"
            className={`block text-text-blue font-bold text-base p-2 md:p-4 hover:text-black ${
              navItemIsActive("/faq")
                ? "text-white bg-banner-blue border-none shadow-none p-2 w-full md:!p-4"
                : ""
            }`}
          >
            FAQ
          </a>
        </li>
        <li className="w-full md:flex md:items-center">
          <a
            href="/contact"
            className={`text-text-blue font-bold text-base p-2 md:p-4 hover:text-black ${
              navItemIsActive("/contact")
                ? "text-white bg-banner-blue border-none shadow-none p-0 md:!p-6 "
                : ""
            }`}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

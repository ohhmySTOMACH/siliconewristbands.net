import React from "react";

export default function Footer() {
  // TODO add links to pages
  return (
    <div className="footer-sc">
      <div className="container mx-auto px-4 sm:px-16">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex flex-col pb-2">
            <div className="flex flex-wrap">
              <a href="" className="hover:underline">
                Home
              </a>
              <span className="mx-1">|</span>
              <a href="/products" className="hover:underline">
                Order Now
              </a>
              <span className="mx-1">|</span>
              <a href="/faq" className="hover:underline">
                FAQ
              </a>
              <span className="mx-1">|</span>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </div>
            <div className="flex mt-2">
              <div className="cc-icons bitcoin w-8 h-8 bg-gray-600 rounded mr-2"></div>
              <div className="cc-icons visa w-8 h-8 bg-gray-600 rounded mr-2"></div>
              <div className="cc-icons mastercard w-8 h-8 bg-gray-600 rounded"></div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center pb-1">
            <div className="pb-1">
              © Silicone Wristbands Australia. {new Date().getFullYear()}{" "}
              |&nbsp;
            </div>
            <div>
              Powered by{" "}
              <a
                href="https://merchi.co"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Merchi
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

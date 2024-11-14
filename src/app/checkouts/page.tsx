"use client";

import CheckoutSummary from "@/components/Checkout-summary";
import { PropsCart } from "merchi_cart/src/CartProvider";

export default function Page(props: PropsCart) {
  return (
    <main className="main">
      <CheckoutSummary {...props} />
      {/* <Cart /> */}
    </main>
  );
}

"use client";

import CheckoutSummary from "@/components/Checkout-summary";
import { Cart } from "merchi_cart/src";

export default function Page() {
  return (
    <main className="main">
      <CheckoutSummary />
      {/* <Cart /> */}
    </main>
  );
}

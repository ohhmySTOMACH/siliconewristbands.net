"use client";
import PaymentSuccess from "@/components/PaymentSuccess";
import { CartProvider } from "merchi_cart";

export default function Page() {
  return (
    <main className="main">
      <div className="checkout-success container flex flex-col items-center md:pt-8">
        <CartProvider domainId={Number(process.env.NEXT_PUBLIC_DOMAIN_ID)}>
          <PaymentSuccess />
        </CartProvider>
      </div>
    </main>
  );
}

"use client";
import Banner from "@/components/Banner";
import { ContactPage } from "@/components/contact-page";

export default function Page() {
  return (
    <main className="main">
      <Banner>
        <h1 className="text-2xl">Contact Us</h1>
      </Banner>
      <ContactPage />
    </main>
  );
}

"use client";
import Banner from "@/components/Banner";
import { ContactPage } from "@/components/ContactPage";

export default function Page() {
  return (
    <main className="main">
      <Banner>
        <h1 className="pl-8 text-2xl">Contact Us</h1>
      </Banner>
      <ContactPage />
    </main>
  );
}

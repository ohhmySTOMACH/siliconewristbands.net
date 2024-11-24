import "bootstrap/dist/css/bootstrap.css";
import "@/styles/globals.css";
import HeaderNavigation from "@/components/navigation/HeaderNavigation";
import Footer from "../components/Footer";
import { WebVitals } from "@/components/WebVitals";

export const metadata = {
  title: "Silicone Wristbands | Easy Online Ordering, Free Shipping",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-100">
      <head></head>
      <body>
        <WebVitals />
        <HeaderNavigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}

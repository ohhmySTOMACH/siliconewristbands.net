import Banner from "@/components/Banner";
import FaqContent from "@/components/FaqContent";

export default function Page() {
  return (
    <main className="main">
      <Banner>
        <h1 className="pl-8 text-2xl">Frequently Asked Questions</h1>
      </Banner>
      <FaqContent />
    </main>
  );
}

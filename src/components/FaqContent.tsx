const FaqTableOfContent = () => {
  return (
    <div id="sidebar" className="w-full sm:w-1/3">
      <div className="sticky top-40">
        <ul className="p-4 nav flex flex-col space-y-2 border border-gray-300 shadow-sm rounded-md">
          <li>
            <a
              href="#What are your turn around times?"
              className="text-text-blue hover:underline"
            >
              What are your turn around times?
            </a>
          </li>
          <li>
            <a
              href="#What are the minimum order quantities for wristbands?"
              className="text-text-blue hover:underline"
            >
              What are the minimum order quantities for wristbands?
            </a>
          </li>
          <li>
            <a
              href="#Will I get to see what my wristbands look like before print?"
              className="text-text-blue hover:underline"
            >
              Will I get to see what my wristbands look like before print?
            </a>
          </li>
          <li>
            <a
              href="#Can I pick my order up?"
              className="text-text-blue hover:underline"
            >
              Can I pick my order up?
            </a>
          </li>
          <li>
            <a
              href="#Can you express deliver to my location?"
              className="text-text-blue hover:underline"
            >
              Can you express deliver to my location?
            </a>
          </li>
          <li>
            <a
              href="#Can I comprise my wristband order of different colours?"
              className="text-text-blue hover:underline"
            >
              Can I comprise my wristband order of different colours?
            </a>
          </li>
          <li>
            <a
              href="#Are my wristbands safe and secure?"
              className="text-text-blue hover:underline"
            >
              Are my wristbands safe and secure?
            </a>
          </li>
          <li>
            <a
              href="#How do I evoke the same day turn around service?"
              className="text-text-blue hover:underline"
            >
              How do I evoke the same day turn around service?
            </a>
          </li>
          <li>
            <a
              href="#Do you ship orders internationally?"
              className="text-text-blue hover:underline"
            >
              Do you ship orders internationally?
            </a>
          </li>
          <li>
            <a
              href="#How can I pay?"
              className="text-text-blue hover:underline"
            >
              How can I pay?
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
const MainContent = () => {
  return (
    <div className="sm:w-2/3 pl-4 mb-16">
      <div className="faq">
        <h3 className="text-lg font-semibold mt-6">
          <a id="What are your turn around times?"></a>What are your turn around
          times?
        </h3>
        <p>Below is the average turn around time on all our products.</p>
        <table className="min-w-full table-auto border-collapse border border-gray-300 mt-2">
          <tbody>
            <tr className="bg-gray-100">
              <td className="border-solid border-gray-300 px-4 py-2">
                Silicone (All Products)
              </td>
              <td className="border-solid border-gray-300 px-4 py-2">
                7-12 days
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="faq">
        <h3 className="text-lg font-semibold mt-6">
          <a id="What are the minimum order quantities for wristbands?"></a>What
          are the minimum order quantities for wristbands?
        </h3>
        <table className="min-w-full table-auto border-collapse border border-gray-300 mt-2">
          <tbody>
            <tr className="bg-gray-100">
              <td className="border-solid border-gray-300 px-4 py-2">
                Silicone (All Products)
              </td>
              <td className="border-solid border-gray-300 px-4 py-2">*100</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="faq">
        <h3 className="text-lg font-semibold mt-6">
          <a id="Will I get to see what my wristbands look like before print?"></a>
          Will I get to see what my wristbands look like before print?
        </h3>
        <p>
          Yes of course, our experienced graphic design team will send over your
          artwork within a few hours of submitting an order.
        </p>
      </div>

      <div className="faq">
        <h3 className="text-lg font-semibold mt-6">
          <a id="Can I pick my order up?"></a>Can I pick my order up?
        </h3>
        <p>
          Our dispatch office is located in Melbourne so give us a call if you
          need something in a hurry &amp; we should be able to help you out.
        </p>
      </div>

      <div className="faq">
        <h3 className="text-lg font-semibold mt-6">
          <a id="Can you express deliver to my location?"></a>Can you express
          deliver to my location?
        </h3>
        <p>
          Of course, express delivery and tracking is kind of our thing.
          Available Australia wide.
        </p>
      </div>

      <div className="faq">
        <h3 className="text-lg font-semibold mt-6">
          <a id="Can I comprise my wristband order of different colours?"></a>
          Can I comprise my wristband order of different colours?
        </h3>
        <p>
          You can, 99% of the time it won’t incur any further costs but we’ll
          let you know if it needs a bit of more attention than normal.
        </p>
      </div>

      <div className="faq">
        <h3 className="text-lg font-semibold mt-6">
          <a id="Are my wristbands safe and secure?"></a>Are my wristbands safe
          and secure?
        </h3>
        <p>
          Our admission wristbands are world-class in security. If you require
          something a bit more unique than your average band, ask us – we have
          some special products for the most discerning of customers.
        </p>
      </div>

      <div className="faq">
        <h3 className="text-lg font-semibold mt-6">
          <a id="How do I evoke the same day turn around service?"></a>How do I
          evoke the same day turn around service?
        </h3>
        <p>
          If you require something urgently please give us a call and we’ll let
          you know sending schedules for that day.
        </p>
      </div>

      <div className="faq">
        <h3 className="text-lg font-semibold mt-6">
          <a id="Do you ship orders internationally?"></a>Do you ship orders
          internationally?
        </h3>
        <p>
          For our more abroad customers, we can ship internationally. Please let
          us know if you have international shipping requirements.
        </p>
      </div>

      <div className="faq">
        <h3 className="text-lg font-semibold mt-6">
          <a id="How can I pay?"></a>How can I pay?
        </h3>
        <p>
          For payment we accept VISA/MASTERCARD/EFT &amp; PAYPAL. If you decide
          to pick up your wristbands, we also accept cash on arrival.
        </p>
      </div>
    </div>
  );
};

export default function FaqContent() {
  return (
    <div id="single-post">
      <div className="container mx-auto px-4 pt-10 w-full sm:px-16">
        <div className="flex flex-col sm:flex-row gap-4">
          <FaqTableOfContent />
          <MainContent />
        </div>
      </div>
    </div>
  );
}

import { useCartContext, utilities, buttons } from "merchi_cart";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

export default function PaymentSuccess() {
  const { customSuccessMessage, createCartAndCookie, fetchingCart, cart } =
    useCartContext();

  const { invoice = {} } = cart;
  const { domain, id, unpaid } = invoice;
  console.log("Log-domain:", domain);
  console.log("Log-id:", id);
  const email =
    domain && domain.company
      ? utilities.companyPrimaryAddress(domain.company)
      : null;
  const router = useRouter();

  const handleClick = async () => {
    try {
      await createCartAndCookie(() => {
        console.log("Log-Cart complete action resolved");
        router.push("/");
        console.log("Log-Navigation to homepage triggered");
      });
    } catch (error) {
      console.error("Error in setCartComplete:", error);
      return;
    }
  };

  return (
    <div className="checkout-success-content flex flex-col items-center p-4 md:w-[375px] border rounded">
      <h2>
        <FontAwesomeIcon icon={faCheckCircle} />
      </h2>
      <h3>Order #{id}</h3>
      <h4>Payment Received!</h4>
      {customSuccessMessage ? (
        <p className="merchi-cart-success-message text-center">
          {customSuccessMessage}
        </p>
      ) : (
        <p className="merchi-cart-success-message text-center">
          Your order #{id} is being processed and you should receive an email
          from us shortly. If you haven&#39;t heard from us within 24 hours
          please feel free to contact us
          {email ? ` at ${email.emailAddress}.` : "."}
        </p>
      )}
      <buttons.Button
        className="btn-blue text-white p-3 rounded-xl mr-1 shadow-custom"
        disabled={fetchingCart}
        onClick={handleClick}
      >
        Return to Homepage
      </buttons.Button>
    </div>
  );
}

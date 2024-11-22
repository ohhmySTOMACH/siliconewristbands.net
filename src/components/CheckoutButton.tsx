import React from "react";
import { useRouter } from "next/navigation";
import { useCartContext, buttons } from "merchi_cart";
import "@/styles/merchi-cart-modal.css";

interface NavigateButtonProps {
  href: string;
  hasItems: boolean;
  children: React.ReactNode;
}

const CheckoutButton: React.FC<NavigateButtonProps> = ({
  href,
  hasItems,
  children,
}) => {
  const router = useRouter();
  const { toggleCartModal } = useCartContext();

  const handleClick = () => {
    toggleCartModal();
    router.push(href);
  };

  return (
    (hasItems && (
      <button
        onClick={handleClick}
        className="checkout-button p-2 cursor-pointer"
      >
        {children}
      </button>
    )) || <div />
  );
};

const CheckoutFooter: React.FC = () => {
  const { cart } = useCartContext();
  const cartItems = cart.cartItems ? cart.cartItems : [];
  const hasItems = cartItems.length > 0;

  return (
    <div className="cart-footer flex flex-row gap-2 justify-center items-center bg-transparent pt-8">
      {hasItems && <buttons.ButtonClearCart />}
      <CheckoutButton href="/checkouts" hasItems={hasItems}>
        Proceed to Checkout
      </CheckoutButton>
    </div>
  );
};

export default CheckoutFooter;

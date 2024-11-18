import React from "react";
import { useRouter } from "next/navigation";
import { useCartContext } from "merchi_cart";

interface NavigateButtonProps {
  href: string;
  children: React.ReactNode;
}

const CheckoutButton: React.FC<NavigateButtonProps> = ({ href, children }) => {
  const router = useRouter();

  const { isCartModalOpen, toggleCartModal, cart } = useCartContext();

  const handleClick = () => {
    console.log("Log-isCartModalOpen:", isCartModalOpen);
    toggleCartModal();
    console.log("Log-isCartModalOpen:", isCartModalOpen);
    router.push(href);
  };

  const cartItems = cart.cartItems ? cart.cartItems : [];
  const hasItems = cartItems.length > 0;

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
  return (
    <div className="flex justify-center items-center bg-transparent pt-8">
      <CheckoutButton href="/checkouts">Proceed to Checkout</CheckoutButton>
    </div>
  );
};

export default CheckoutFooter;

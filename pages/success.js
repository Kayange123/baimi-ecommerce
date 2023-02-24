import React, { useEffect } from "react";
import Link from "next/link";
import { BsBagFill } from "react-icons/bs";
import { useStateContext } from "@/context/StateContext";
import { getFireWorks } from "@/utils/confetti";

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    getFireWorks();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagFill />
        </p>
        <h2>Thank you for your order</h2>
        <p className="email-msg">Check your email inbox for the receipt</p>
        <p className="description">
          for any inquiry, please email
          <a href="mailto:info@baimi-ecommerce.net" className="email">
            info@baimi-ecommerce.net
          </a>
        </p>
        <Link href="/">
          <button className="btn" type="button">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;

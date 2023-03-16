import React, {useRef} from "react";
import Link from "next/link";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShoppingCart } from 'react-icons/ai'
import { TiDeleteOutline } from 'react-icons/ti';
import { toast } from "react-hot-toast";
import { useStateContext } from "@/context/StateContext";
import { urlFor } from "@/libs/sanityClient";
import { getStripe } from "@/libs/getStripe";
 
const Cart = () => {
  const {totalPrice,onRemove, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity} = useStateContext()
  const handleCheckout = async () => {
    const stripe = await getStripe();
    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems),
    }).catch(err=> console.log(err))
    
    if (response.statusCode === 500) return;
    toast.loading('Redirecting...');

    const data = await response.json();
    
    stripe.redirectToCheckout({ sessionId: data.id });
  }
  
  const cartRef = useRef();
  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button type="button" className="cart-heading" onClick={() => setShowCart(false)}>
          <AiOutlineLeft size={25} />
          <span className="heading">Your cart</span>
          <span className="cart-num-items">({ totalQuantities } items)</span>
        </button>
        {cartItems.length < 1 ? (
          <div className="empty-cart">
            <AiOutlineShoppingCart size={180} />
            <h3>Your shopping cart is empty</h3>
            <Link href="/">
              <button className="btn" type="button" onClick={() => setShowCart(false)}>
                start Shopping
              </button>
            </Link>
          </div>
        ) : (
            <div className="product-container">
              {cartItems.map((cartItem, i) => (
                <div className="product" key={cartItem._id}>
                  <img src={urlFor(cartItem?.image[0])} className="cart-product-image" />
                  <div className="item-desc">
                    <div className="flex top">
                      <h5>{cartItem?.name }</h5>
                      <h4>$ {cartItem?.price }</h4>
                    </div>
                    <div className="flex bottom">
                      <p className="quantity-desc">
                      <span className="minus" onClick={()=> toggleCartItemQuantity(cartItem?._id, "dec")}>
                        <AiOutlineMinus />
                        </span>
                        <span className="num">{ cartItem.quantity }</span>
                        <span className="plus" onClick={()=>toggleCartItemQuantity(cartItem?._id, "inc")}>
                          <AiOutlinePlus />
                        </span>
                      </p>
                      <button className="remove-item" onClick={()=> onRemove(cartItem._id)}>
                        <TiDeleteOutline />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        )}

      {cartItems.length > 0 && (
        <div className="cart-bottom">
          <div className="total">
            <h3>Subtotal:</h3> 
            <h3>${totalPrice}</h3>
          </div>
            <div className="btn-container">
              <button className="btn" type="button" onClick={handleCheckout}>
                Checkout
              </button>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default Cart;

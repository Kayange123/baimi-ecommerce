import React, { useState, useEffect, useContext, createContext } from "react";
import { toast } from "react-hot-toast";
import { getLocalStorage } from "@/libs/getStorage";
const Context = createContext();

export const StateContext = ({ children }) => {
  const [qty, setQty] = useState(1);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  let index, foundProduct;

  const incrementQty = () => {
    setQty((prevQty) => prevQty + 1);
  };
  const decrementQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  };

  const addToCart = (product, quantity) => {
    const isInCart = cartItems.find((cartItem) => cartItem._id === product._id);
    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
    if (isInCart) {
      const updatedCartItems = cartItems.map((cartItem) => {
        if (cartItem._id === product._id)
          return {
            ...cartItem,
            quantity: cartItem.quantity + quantity,
          };
      });
      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);
    }
    toast.success(`${qty} ${product.name} added to the cart successfully`);
  };

  const toggleCartItemQuantity = (id, value) => {
    foundProduct = cartItems.find((item) => item._id === id);
    const updatedCart = cartItems.map((item) =>
      item._id === id
        ? {
            ...item,
            quantity: value === "inc" ? item.quantity + 1 : item.quantity - 1,
          }
        : item
    );
    if (value === "inc") {
      index = cartItems.findIndex((i) => i._id === id);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
      setCartItems(updatedCart);
    } else if (value === "dec") {
      if (foundProduct.quantity > 0) {
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
        setCartItems(updatedCart);
      }
    }
  };

  const onRemove = (id) => {
    const foundProduct = cartItems.find((item) => item._id === id);
    const updatedCart = cartItems.filter((item) => item._id !== id);
    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - foundProduct.price * foundProduct.quantity
    );
    setTotalQuantities(
      (prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity
    );
    setCartItems(updatedCart);
    toast.success("successful deleted");
  };
  return (
    <Context.Provider
      value={{
        showCart,
        cartItems,
        totalQuantities,
        totalPrice,
        qty,
        incrementQty,
        decrementQty,
        addToCart,
        showCart,
        setShowCart,
        setCartItems,
        setTotalPrice,
        setTotalQuantities,
        toggleCartItemQuantity,
        onRemove,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);

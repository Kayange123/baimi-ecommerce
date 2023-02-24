import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      "pk_test_51MeHPeAojg0Mmv1MpxDZs1RGjXgAANlS979dINFm6GIpZ2BqlxdJ1co6iwjzf7j1eDhnI9QxitewHeSRcOQl8Jax00ydEFJ4nZ"
    );
  }
  return stripePromise;
};

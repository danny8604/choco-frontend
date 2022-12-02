import { useEffect } from "react";
import { addToCart } from "../../components/cart/cartItem/CartSlice";
import { useAppDispatch, useAppSelector } from "./hooks";

export const useCartLocalStorage = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);
  const key = "shopping-cart";
  const data = localStorage.getItem(key);
  if (data !== null) dispatch(addToCart(JSON.parse(data)));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(cart.shoppingCart));
  }, [key, cart.shoppingCart]);

  return;
};

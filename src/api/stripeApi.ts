import { ShoppingCartItem } from "../app/type";
import { api } from "./axios";

export const postStripeCardCheckout = async (
  shoppingCart: ShoppingCartItem[],
  userToken: string
) => {
  const response = await api.post(
    "api/users/stripe",
    {
      items: shoppingCart,
    },
    {
      headers: {
        Authorization: "Bearer " + userToken,
      },
    }
  );

  return response.data.url;
};

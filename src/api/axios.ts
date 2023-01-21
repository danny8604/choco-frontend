import axios from "axios";
import { ShoppingCartItem } from "../app/type";

export const api = axios.create({
  baseURL: "http://localhost:5000/",
});

export const getFavoriteItems = async (userToken: string) => {
  const response = await api.get(`api/users/favoriteItems`, {
    headers: {
      Authorization: "Bearer " + userToken,
    },
  });

  return response.data.favoriteItems;
};

export const postFavoriteItems = async (
  userToken: string,
  productId: string
) => {
  const response = await axios.post(
    "http://localhost:5000/api/users/favoriteItems",
    {
      productId: productId,
    },
    {
      headers: {
        Authorization: "Bearer " + userToken,
      },
    }
  );

  return response.data.favoriteItems;
};

export const getUserOrder = async (userToken: string) => {
  const response = await axios.get(
    "http://localhost:5000/api/users/getUserOrders/",
    {
      headers: {
        Authorization: "Bearer " + userToken,
      },
    }
  );

  return response.data;
};

export const getSearchOrder = async (searchInput: string | undefined) => {
  const response = await axios.get(
    `http://localhost:5000/api/users/getOrders/${searchInput}`
  );

  return response.data.order;
};

export const postStripeCardCheckout = async (
  shoppingCart: ShoppingCartItem[],
  userToken: string
) => {
  const response = await axios.post(
    "http://localhost:5000/api/users/stripe",
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

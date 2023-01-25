import { AxiosRequestConfig } from "axios";
import { ShoppingCartItem } from "../app/type";
import { api, tokenAndProductId } from "./axios";

export const getFavoriteItems = async (userToken: string) => {
  const response = await api.get(`api/users/favoriteItems`, {
    headers: {
      Authorization: "Bearer " + userToken,
    },
  });

  return response.data.favoriteItems;
};

export const getFavoriteItemsPage = async (
  {
    userToken,
    pageNumber = 1,
  }: {
    userToken: string;
    pageNumber: number;
  },
  options: AxiosRequestConfig<any> = {}
) => {
  const response = await api.get(`api/users/favoriteItems/${pageNumber}`, {
    headers: {
      Authorization: "Bearer " + userToken,
    },
    signal: options.signal,
  });
  console.log(options.signal, "options");
  return response.data.favoriteItems;
};

export const postFavoriteItems = async ({
  userToken,
  productId,
}: tokenAndProductId) => {
  const response = await api.post(
    "api/users/favoriteItems",
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
  const response = await api.get("api/users/getUserOrders/", {
    headers: {
      Authorization: "Bearer " + userToken,
    },
  });

  return response.data;
};

export const getSearchOrder = async (searchInput: string | undefined) => {
  const response = await api.get(`api/users/getOrders/${searchInput}`);

  return response.data.order;
};

export const postCartRemoveItem = async ({
  userToken,
  productId,
}: tokenAndProductId) => {
  const response = await api.post(
    "api/users/removeFromCart",
    {
      productId: productId,
    },
    {
      headers: {
        Authorization: "Bearer " + userToken,
      },
    }
  );

  return response.data.cart;
};

export const postAddToCart = async ({
  productId,
  userToken,
}: tokenAndProductId) => {
  const response = await api.post(
    `api/users/addToCart/`,
    {
      productId: productId,
    },
    {
      headers: {
        Authorization: "Bearer " + userToken,
      },
    }
  );

  return response.data.cart;
};

export const postCartCheckout = async ({
  name,
  address,
  phone,
  userToken,
}: {
  name: string;
  address: string;
  phone: string;
  userToken: string | null;
}) => {
  const response = await api.post(
    "api/users/userCheckout/",
    {
      name: name,
      address: address,
      phone: +phone,
    },
    {
      headers: {
        Authorization: "Bearer " + userToken,
      },
    }
  );

  return response.data;
};

export const patchCartSelectQuantity = async ({
  productId,
  selectValue,
  userToken,
}: {
  productId: string;
  selectValue: string;
  userToken: string;
}) => {
  const response = await api.patch(
    `api/users/editItemQuantity/`,
    {
      productId: productId,
      quantity: selectValue,
    },
    {
      headers: {
        Authorization: "Bearer " + userToken,
      },
    }
  );

  return response.data.cart;
};

export const patchCartInputQuantity = async ({
  productId,
  inputValue,
  userToken,
}: {
  productId: string;
  inputValue: string;
  userToken: string;
}) => {
  const response = await api.patch(
    `api/users/editItemQuantity/`,
    {
      productId: productId,
      quantity: inputValue,
    },
    {
      headers: {
        Authorization: "Bearer " + userToken,
      },
    }
  );

  return response.data.cart;
};

export const getUserCart = async (userToken: string) => {
  const response = await api.get(`api/users/getUserCart`, {
    headers: {
      Authorization: "Bearer " + userToken,
    },
  });

  return response.data.userCart;
};

export const postUserLogin = async (email: string, password: string) => {
  const response = await api.post(`api/users/login`, {
    email: email,
    password: password,
  });

  return response.data;
};

export const postUserSignup = async (email: string, password: string) => {
  await api.post(`api/users/signup`, {
    email: email,
    password: password,
  });

  return;
};

export const postUserChangePassword = async ({
  originPassword,
  newPassword,
  confirmPassword,
  userToken,
}: {
  originPassword: string;
  newPassword: string;
  confirmPassword: string;
  userToken: string;
}) => {
  await api.post(
    `api/users/changePassword`,
    {
      originPassword: originPassword,
      newPassword: newPassword,
      confirmPassword: confirmPassword,
    },
    {
      headers: {
        Authorization: "Bearer " + userToken,
      },
    }
  );

  return;
};

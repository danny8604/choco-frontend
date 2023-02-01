import { api } from "./axios";

export const getProductsByCategory = async (category: string) => {
  const response = await api.get(`api/products/category/${category}`);

  return response.data.products;
};

export const getAllProducts = async () => {
  const response = await api.get(`api/products`);

  return response.data.products;
};

export const getProductsByPath = async (product: string) => {
  const response = await api.get(`api/products/${product}`);

  return response.data.product;
};

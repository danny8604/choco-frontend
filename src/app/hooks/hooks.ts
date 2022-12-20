import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { useGetAllProductsQuery, useGetUserInforQuery } from "../apiSlice";
import type { RootState, AppDispatch } from "../store";
import { ProductsType } from "../type";

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Fetch productApi get all product data from Firebase.
export const useProducts = () => {
  const { data, error, isLoading } = useGetAllProductsQuery("products");

  const products = { ...data };

  const productsData: ProductsType[] = [];

  for (const key in products) {
    productsData.push({
      id: products[key].id,
      price: products[key].price,
      descript: products[key].descript,
      series: products[key].series,
      path: products[key].path,
      category: products[key].category,
      designer: products[key].designer,
      img: products[key].img,
    });
  }

  return { productsData, error, isLoading };
};

// useUser Infor
export const useUser = (userId: string | null) => {
  const { data, error, isLoading } = useGetUserInforQuery(`${userId}`);

  const userData = { ...data };

  return { userData, error, isLoading };
};

// useUserCart Infor
export const useUserCart = (userId: string | null) => {
  const {
    data,
    error: cartError,
    isLoading: crtIsLoading,
  } = useGetAllProductsQuery(`users/${userId}`);

  if (!data) return;
  const userData = { ...data };
  const [userCartData] = Object.values(userData);

  return { userCartData, cartError, crtIsLoading };
};

// ProductPage Detailsmessage.
export const useDetailsMessage = (
  title: string,
  descriptTitle: string,
  descript: string
) => {
  return {
    title: title,
    descriptTitle: descriptTitle,
    descript: descript,
  };
};

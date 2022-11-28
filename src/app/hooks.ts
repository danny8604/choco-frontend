import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { useGetAllProductsQuery } from "./apiSlice";
import type { RootState, AppDispatch } from "./store";
import { ProductsType } from "../app/type";

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Fetch productApi(chair data) from Firebase.
export const useProducts = (sort: string) => {
  const { data, error, isLoading } = useGetAllProductsQuery(sort);

  const products = { ...data };

  const productsData: ProductsType[] = [];

  for (const key in products) {
    productsData.push({
      id: products[key].id,
      price: products[key].price,
      descript: products[key].descript,
      series: products[key].series,
      src: products[key].src,
      category: products[key].category,
    });
  }

  return { productsData, error, isLoading };
};

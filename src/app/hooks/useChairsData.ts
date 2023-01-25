import { useCallback, useEffect, useState } from "react";
import {
  getAllProducts,
  getProductsByCategory,
  getProductsByPath,
} from "../../api/cartApi";
import getErrorMessage from "../../components/util/getErrorMessage";
import { openUtilModal } from "../../features/utilModal/utilModalSlice";
import { ProductsType } from "../type";
import { useAppDispatch } from "./hooks";

const useChairsData = ({
  path = null,
  category = null,
}: {
  path?: string | null;
  category?: string | null;
}) => {
  const [categoryChairsData, setCategoryChairsData] = useState<ProductsType[]>(
    []
  );
  const [pathChairsData, setPathChairsData] = useState<ProductsType>();
  const [allChairsData, setAllChairsData] = useState<ProductsType[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log("Test getAllProducts re-render times");

    getAllProducts()
      .then((data) => setAllChairsData(data))
      .catch((err) =>
        dispatch(openUtilModal({ message: getErrorMessage(err) }))
      );
  }, []);

  useEffect(() => {
    if (!category) return;

    getProductsByCategory(category)
      .then((data) => setCategoryChairsData(data))
      .catch((err) =>
        dispatch(openUtilModal({ message: getErrorMessage(err) }))
      );
  }, [category]);

  useEffect(() => {
    if (!path) return;

    getProductsByPath(path)
      .then((data) => setPathChairsData(data))
      .catch((err) =>
        dispatch(openUtilModal({ message: getErrorMessage(err) }))
      );
  }, [path]);

  return { categoryChairsData, allChairsData, pathChairsData };
};

export default useChairsData;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFavoriteItemsPage } from "../../api/usersApi";
import getErrorMessage from "../../components/util/getErrorMessage";
import { openUtilModal } from "../../features/utilModal/utilModalSlice";
import { FavoriteItemType } from "../type";
import { useAppDispatch, useAppSelector } from "./hooks";

const useFavoritePage = (pageNumber: number) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { userToken, login } = useAppSelector((state) => state.login);
  const [isloading, setIsloading] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [results, setResults] = useState<FavoriteItemType[]>([]);

  useEffect(() => {
    if (!(login && userToken)) return;

    setIsloading(true);
    const controller = new AbortController();
    const { signal } = controller;
    console.log(controller, "controller");

    getFavoriteItemsPage({ userToken, pageNumber }, { signal })
      .then((data) => {
        setResults((prev) => [...prev, ...data]);
        setHasNextPage(Boolean(data.length));
        console.log(Boolean(data.length), "HasNextPage");
        console.log(data, "data");
        setIsloading(false);
      })
      .catch((err) => {
        setIsloading(false);
        if (signal.aborted) return;
        dispatch(openUtilModal({ message: getErrorMessage(err) }));
        navigate("/");
      });

    return () => controller.abort();
  }, [pageNumber, userToken, login]);

  return { hasNextPage, isloading, results };
};

export default useFavoritePage;

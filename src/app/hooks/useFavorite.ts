import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFavoriteItems, postFavoriteItems } from "../../api/usersApi";
import getErrorMessage from "../../components/util/getErrorMessage";
import { userFavoriteItems } from "../../features/login/loginSlice";
import { openUtilModal } from "../../features/utilModal/utilModalSlice";
import { ShoppingCartItem } from "../type";
import { useAppDispatch, useAppSelector } from "./hooks";

const useFavorite = (productId?: string, pageNumber: number = 1) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { userToken, login } = useAppSelector((state) => state.login);
  const [isloading, setIsloading] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [results, setResults] = useState<ShoppingCartItem[]>([]);

  // useEffect(() => {
  //   setIsloading(true);
  //   const controller = new AbortController();
  //   const { signal } = controller;

  //   const fetchFavoriteItems = async () => {
  //     try {
  //       const response = await axios.get(
  //         `http://localhost:5000/api/users/favoriteItems`,
  //         {
  //           headers: {
  //             Authorization: "Bearer " + userToken,
  //           },
  //           signal: signal,
  //         }
  //       );
  //       const data = response.data.favoriteItems;
  //       setResults(data);
  //       console.log(Boolean(data.length), "🦔🦔🦔🦔🦔🦔🦔🦔🦔");
  //       setHasNextPage(Boolean(data.length));
  //       setIsloading(false);
  //     } catch (err) {
  //       setIsloading(false);
  //       console.log(signal.aborted, "🦔🦔🦔");
  //       if (signal.aborted) return;
  //       dispatch(openUtilModal({ message: getErrorMessage(err) }));
  //       navigate("/");
  //     }
  //   };
  //   fetchFavoriteItems();

  //   return () => controller.abort();
  // }, [pageNumber]);

  // useEffect(() => {
  //   if (!(login && userToken)) return;

  //   getFavoriteItems(userToken)
  //     .then((data) => {
  //       dispatch(userFavoriteItems(data));
  //     })
  //     .catch((err) => {
  //       dispatch(openUtilModal({ message: getErrorMessage(err) }));
  //       navigate("/");
  //     });
  // }, [login, userToken]);

  const userFavoriteItemToggle = async () => {
    if (!(login && userToken && productId)) {
      navigate("/login");
      return dispatch(openUtilModal({ message: "Please you login first." }));
    }

    postFavoriteItems({ userToken, productId })
      .then((data) => {
        dispatch(userFavoriteItems(data));
      })
      .catch((err) => {
        dispatch(openUtilModal({ message: getErrorMessage(err) }));
      });
  };

  return { userFavoriteItemToggle, hasNextPage, isloading };
};

export default useFavorite;

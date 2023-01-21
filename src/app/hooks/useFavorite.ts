import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userFavoriteItems } from "../../features/login/loginSlice";
import { openUtilModal } from "../../features/utilModal/utilModalSlice";
import { useAppDispatch, useAppSelector } from "./hooks";

const useFavorite = (productId?: string) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { userToken, login } = useAppSelector((state) => state.login);

  useEffect(() => {
    if (login) {
      const fetchFavoriteItems = async () => {
        const response = await axios.get(
          `http://localhost:5000/api/users/favoriteItem/${productId}`,
          {
            headers: {
              Authorization: "Bearer " + userToken,
            },
          }
        );
        dispatch(userFavoriteItems(response.data.user.favoriteItems));
      };
      fetchFavoriteItems();
    }
  }, [login]);

  const userFavoriteItemToggle = async () => {
    if (!login) {
      navigate("/login");
      return dispatch(openUtilModal({ message: "Please you login first." }));
    }
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/favoriteItem",
        {
          productId: productId,
        },
        {
          headers: {
            Authorization: "Bearer " + userToken,
          },
        }
      );

      dispatch(userFavoriteItems(response.data.user.favoriteItems));
    } catch (err) {
      dispatch(openUtilModal({ message: "Something went wrong." }));
    }
  };

  return { userFavoriteItemToggle };
};

export default useFavorite;

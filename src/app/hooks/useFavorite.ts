import { useNavigate } from "react-router-dom";
import { postFavoriteItems } from "../../api/usersApi";
import getErrorMessage from "../../components/util/getErrorMessage";
import { userFavoriteItems } from "../../features/login/loginSlice";
import { openUtilModal } from "../../features/utilModal/utilModalSlice";

import { useAppDispatch, useAppSelector } from "./hooks";

type useFavoriteProps = {
  productId?: string;
};

const useFavorite = ({ productId }: useFavoriteProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { userToken, login } = useAppSelector((state) => state.login);

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

  return { userFavoriteItemToggle };
};

export default useFavorite;

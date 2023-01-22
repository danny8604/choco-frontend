import { Orders } from "../type";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./hooks";
import { openUtilModal } from "../../features/utilModal/utilModalSlice";
import { useNavigate } from "react-router-dom";
import { getUserOrder } from "../../api/usersApi";
import getErrorMessage from "../../components/util/getErrorMessage";

const useOrder = () => {
  const { login, userToken } = useAppSelector((state) => state.login);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [ordersResult, setOrdersResult] = useState<Orders | null>(null);

  useEffect(() => {
    if (!(login && userToken)) return;

    getUserOrder(userToken)
      .then((data) => {
        data.orders.length === 0
          ? setOrdersResult(null)
          : setOrdersResult(data);
      })
      .catch((err) => {
        dispatch(openUtilModal({ message: getErrorMessage(err) }));
        navigate("/");
      });
  }, [login, userToken]);

  return { ordersResult };
};

export default useOrder;

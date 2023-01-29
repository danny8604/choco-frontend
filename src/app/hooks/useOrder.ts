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
  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!(login && userToken)) return;
    setIsLoading(true);

    getUserOrder(userToken)
      .then((data) => {
        data.orders.length === 0
          ? setOrdersResult(null)
          : setOrdersResult(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        dispatch(openUtilModal({ message: getErrorMessage(err) }));
        navigate("/");
      });
  }, [login, userToken]);

  return { ordersResult, isloading };
};

export default useOrder;

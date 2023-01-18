import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import { Order, Orders } from "../../app/type";
import { openUtilModal } from "../../features/utilModal/utilModalSlice";
import OrderInfo from "../orderSearch/OrderInfo";
import ArrowLeftBtn from "../ui/button/ArrowLeftBtn";
import ArrowRightBtn from "../ui/button/ArrowRight";
import Button from "../ui/button/Button";
import { ArrowLeft, ArrowRight } from "../ui/icon/Arrow";
import styles from "./UserOrder.module.scss";

const UserOrder = () => {
  const dispatch = useAppDispatch();
  const { login, userToken } = useAppSelector((state) => state.login);
  const [ordersResult, setOrdersResult] = useState<Orders | null>(null);
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const perPage = 2;
  const currentPage = page + 1;
  const pageVisited = perPage * page;

  useEffect(() => {
    if (login) {
      const fetchUserOrder = async () => {
        try {
          const response = await axios.get(
            "http://localhost:5000/api/users/getUserOrders/",
            {
              headers: {
                Authorization: "Bearer " + userToken,
              },
            }
          );
          if (response.data.orders.length === 0) {
            setOrdersResult(null);
          }
          if (!(response.data.orders.length === 0)) {
            setOrdersResult(response.data);
          }
        } catch (err) {
          dispatch(openUtilModal({ message: "Something went wrong." }));
          return navigate("/");
        }
      };
      fetchUserOrder();
    }
  }, [login]);

  if (!ordersResult) {
    return (
      <div className={styles.userOrder}>
        <p>
          You don't have any orders,{" "}
          <Link to="/shop">buy something right now?</Link>
        </p>
      </div>
    );
  }

  const pageMax = Math.ceil(ordersResult.orders.length / 2);
  console.log(pageMax, "pageMax");

  return (
    <div className={styles.userOrder}>
      {ordersResult &&
        ordersResult.orders
          .slice(pageVisited, pageVisited + perPage)
          .map((item) => (
            <OrderInfo key={item._id} order={item} orderNumber={item._id} />
          ))}
      <div className={styles.btnContainer}>
        {currentPage !== 1 && (
          <ArrowLeftBtn
            clickAciton={() => {
              setPage(page - 1);
            }}
            className=""
          />
        )}
        <div className={styles.pageBtnContainer}>
          {currentPage === pageMax && currentPage - 2 > 0 && (
            <Button
              className={""}
              btnMessage={currentPage - 2}
              clickAciton={() => {
                if (currentPage === 1) {
                  return;
                }
                setPage(page - 2);
              }}
            />
          )}
          {currentPage !== 1 && (
            <Button
              className={""}
              btnMessage={currentPage - 1}
              clickAciton={() => {
                if (currentPage === 1) {
                  return;
                }
                setPage(page - 1);
              }}
            />
          )}
          <Button
            className={`${"active"}`}
            btnMessage={currentPage}
            clickAciton={() => {
              if (currentPage) {
                return;
              }
              setPage(page);
            }}
          />
          {currentPage !== pageMax && (
            <Button
              className={""}
              btnMessage={currentPage + 1}
              clickAciton={() => {
                {
                  setPage(page + 1);
                }
              }}
            />
          )}
          {currentPage == 1 && pageMax >= 3 && (
            <Button
              className={""}
              btnMessage={currentPage + 2}
              clickAciton={() => {
                {
                  setPage(page + 2);
                }
              }}
            />
          )}
        </div>
        {currentPage !== pageMax && (
          <ArrowRightBtn
            clickAciton={() => {
              setPage(page + 1);
            }}
            className=""
          />
        )}
      </div>
    </div>
  );
};

export default UserOrder;

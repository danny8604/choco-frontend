import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../app/hooks/useAuth";
import useOrder from "../../app/hooks/useOrder";
import OrderInfo from "../orderSearch/OrderInfo";
import ArrowLeftBtn from "../ui/button/ArrowLeftBtn";
import ArrowRightBtn from "../ui/button/ArrowRight";
import Button from "../ui/button/Button";
import Loading from "../ui/loading/Loading";
import Pagination from "../ui/pagination/Pagination";
import styles from "./UserOrder.module.scss";

const UserOrder = () => {
  const { ordersResult, isloading } = useOrder();
  const perPage = 2;
  const pageMax =
    ordersResult && Math.ceil(ordersResult.orders.length / perPage);

  if (isloading) return <Loading />;

  return (
    <>
      {!ordersResult && (
        <div className={styles.text}>
          <p>
            You don't have any orders,{" "}
            <Link to="/shop">buy something right now?</Link>
          </p>
        </div>
      )}
      {ordersResult && pageMax && (
        <Pagination perPage={perPage} pageMax={pageMax} result={ordersResult} />
      )}
    </>
  );
};

export default UserOrder;

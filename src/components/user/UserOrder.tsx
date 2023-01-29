import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../app/hooks/useAuth";
import useOrder from "../../app/hooks/useOrder";
import OrderInfo from "../orderSearch/OrderInfo";
import ArrowLeftBtn from "../ui/button/ArrowLeftBtn";
import ArrowRightBtn from "../ui/button/ArrowRight";
import Button from "../ui/button/Button";
import Loading from "../ui/loading/Loading";
import styles from "./UserOrder.module.scss";

const UserOrder = () => {
  const { ordersResult, isloading } = useOrder();
  const [page, setPage] = useState(1);
  const perPage = 2;
  const pageVisited = perPage * page;
  const pageMax = ordersResult && Math.ceil(ordersResult.orders.length / 2);
  console.log(ordersResult, "ordersResult");

  const nextPage = () => setPage((page) => page + 1);
  const prevPage = () => setPage((page) => page - 1);

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
        <div className={styles.userOrder}>
          <div>
            {ordersResult &&
              ordersResult.orders
                .slice(pageVisited - perPage, pageVisited)
                .map((item) => (
                  <OrderInfo
                    key={item._id}
                    order={item}
                    orderNumber={item._id}
                  />
                ))}
          </div>
          {/* <Pagination perPage={2} pageMax={4} /> */}
          <div className={styles.btnContainer}>
            {page !== 1 && <ArrowLeftBtn clickAciton={() => prevPage()} />}
            <div className={styles.pageBtnContainer}>
              {page === pageMax && page - 2 > 0 && (
                <Button
                  btnMessage={page - 2}
                  clickAciton={() => setPage(page - 2)}
                />
              )}
              {page !== 1 && (
                <Button
                  btnMessage={page - 1}
                  clickAciton={() => setPage(page - 1)}
                />
              )}
              <Button
                className={"active"}
                btnMessage={page}
                clickAciton={() => setPage(page)}
              />
              {page !== pageMax && (
                <Button
                  btnMessage={page + 1}
                  clickAciton={() => setPage(page + 1)}
                />
              )}
              {page == 1 && pageMax >= 3 && (
                <Button
                  btnMessage={page + 2}
                  clickAciton={() => setPage(page + 2)}
                />
              )}
            </div>
            {page !== pageMax && (
              <ArrowRightBtn clickAciton={() => nextPage()} />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default UserOrder;

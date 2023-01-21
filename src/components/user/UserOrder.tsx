import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import useOrder from "../../app/hooks/useOrder";
import OrderInfo from "../orderSearch/OrderInfo";
import ArrowLeftBtn from "../ui/button/ArrowLeftBtn";
import ArrowRightBtn from "../ui/button/ArrowRight";
import Button from "../ui/button/Button";
import styles from "./UserOrder.module.scss";

const UserOrder = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { ordersResult } = useOrder();
  const [page, setPage] = useState(0);
  const perPage = 2;
  const currentPage = page + 1;
  const pageVisited = perPage * page;
  const showPage = searchParams.get("page");
  console.log(ordersResult, "🐧🐧🐧🐧🐧🐧");
  console.log(showPage, "showPage");

  const pageMax = ordersResult && Math.ceil(ordersResult.orders.length / 2);

  console.log(pageMax, "pageMax");
  return (
    <>
      {!ordersResult && (
        <div className={styles.userOrder}>
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
                .slice(pageVisited, pageVisited + perPage)
                .map((item) => (
                  <OrderInfo
                    key={item._id}
                    order={item}
                    orderNumber={item._id}
                  />
                ))}
          </div>
          <div className={styles.btnContainer}>
            {currentPage !== 1 && (
              <ArrowLeftBtn
                clickAciton={() => {
                  setSearchParams({ page: `${currentPage - 1}` });
                  setPage(page - 1);
                }}
              />
            )}
            <div className={styles.pageBtnContainer}>
              {currentPage === pageMax && currentPage - 2 > 0 && (
                <Button
                  btnMessage={currentPage - 2}
                  clickAciton={() => {
                    setSearchParams({ page: `${currentPage - 2}` });
                    if (currentPage === 1) {
                      return;
                    }
                    setPage(page - 2);
                  }}
                />
              )}
              {currentPage !== 1 && (
                <Button
                  btnMessage={currentPage - 1}
                  clickAciton={() => {
                    setSearchParams({ page: `${currentPage - 1}` });
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
                  setSearchParams({ page: `${currentPage}` });

                  if (currentPage) {
                    return;
                  }
                  setPage(page);
                }}
              />
              {currentPage !== pageMax && (
                <Button
                  btnMessage={currentPage + 1}
                  clickAciton={() => {
                    {
                      setSearchParams({ page: `${currentPage + 1}` });
                      setPage(page + 1);
                    }
                  }}
                />
              )}
              {currentPage == 1 && pageMax >= 3 && (
                <Button
                  btnMessage={currentPage + 2}
                  clickAciton={() => {
                    {
                      setSearchParams({ page: `${currentPage + 2}` });
                      setPage(page + 2);
                    }
                  }}
                />
              )}
            </div>
            {currentPage !== pageMax && (
              <ArrowRightBtn
                clickAciton={() => {
                  setSearchParams({ page: `${currentPage + 1}` });
                  setPage(page + 1);
                }}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default UserOrder;

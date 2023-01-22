import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks/hooks";
import InfoItem from "../../features/infoModal/InfoItem";
import OrderInfo from "../orderSearch/OrderInfo";
import FavoriteBtn from "../ui/button/FavoriteBtn";
import styles from "./UserOrder.module.scss";

const UserFavoriteItems = () => {
  const { favoriteItems } = useAppSelector((state) => state.login);
  console.log(favoriteItems, "favoriteItems");
  return (
    <>
      {!Boolean(favoriteItems.length) && (
        <div>
          <p>You don't have any favorite items.</p>
        </div>
      )}
      {favoriteItems.map((item) => {
        return (
          <InfoItem
            key={item.productId._id}
            productId={item.productId}
            quantity={item.quantity}
            showFavoriteBtn
            showSeries
          />
        );
      })}
    </>
  );
};

export default UserFavoriteItems;

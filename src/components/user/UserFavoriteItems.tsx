import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks/hooks";
import styles from "./UserOrder.module.scss";

const UserFavoriteItems = () => {
  const { favoriteItems } = useAppSelector((state) => state.login);
  console.log(favoriteItems, "favoriteItems");
  return (
    <>
      {favoriteItems.map((item) => {
        return <p key={item.productId._id}>{item.productId.productName}</p>;
      })}
    </>
  );
};

export default UserFavoriteItems;

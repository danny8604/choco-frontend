import { useCartElementState } from "@stripe/react-stripe-js";
import useFavorite from "../../../app/hooks/useFavorite";
import { Star } from "../icon/Star";
import { useState, useEffect } from "react";
import styles from "./FavoriteBtn.module.scss";
import { useAppSelector } from "../../../app/hooks/hooks";

type StarBtnProps = {
  productId: string;
};

const FavoriteBtn = ({ productId }: StarBtnProps) => {
  const { userFavoriteItemToggle, isLoading } = useFavorite({ productId });
  const { favoriteItems } = useAppSelector((state) => state.login);
  const existed = favoriteItems.find(
    (item) => item.productId._id === productId
  );

  const favoriteHandler = () => {
    userFavoriteItemToggle();
  };

  return (
    <button
      className={`${styles.favoriteBtn} ${existed && styles.favoriteItem}`}
      disabled={isLoading}
      onClick={() => favoriteHandler()}
    >
      <Star />
    </button>
  );
};

export default FavoriteBtn;

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
  const { userFavoriteItemToggle } = useFavorite(productId);
  const { favoriteItems } = useAppSelector((state) => state.login);
  const existed = favoriteItems.find((item) => item.productId === productId);

  const favoriteHandler = async () => await userFavoriteItemToggle();

  return (
    <button
      className={`${styles.favoriteBtn} ${existed && styles.favoriteItem}`}
      onClick={() => favoriteHandler()}
    >
      <Star />
    </button>
  );
};

export default FavoriteBtn;

import styles from "./ProductAddToCartBtn.module.scss";
import { ProductsType } from "../../../app/type";
import useCart from "../../../app/hooks/useCart";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks/hooks";
import { openUtilModal } from "../../../features/utilModal/utilModalSlice";

type ProductAddToCartBtnProps = {
  props: ProductsType;
};

const ProductAddToCartBtn = ({ props }: ProductAddToCartBtnProps) => {
  const [disabledBtn, setDisabledBtn] = useState(false);
  useAppDispatch();
  const { shoppingCart } = useAppSelector((state) => state.cart);
  const { cartAddToCart, cartFindById } = useCart();

  useEffect(() => {
    const product = cartFindById(props._id);
    product && product.quantity >= 20
      ? setDisabledBtn(true)
      : setDisabledBtn(false);
  }, [shoppingCart]);

  const addToCartHandler = async () => {
    await cartAddToCart(props._id);
  };

  return (
    <div className={styles.buttonContainer}>
      <button disabled={disabledBtn} onClick={() => addToCartHandler()}>
        {disabledBtn ? "OUT OF STOCK" : "ADD TO CART"}
      </button>
    </div>
  );
};

export default ProductAddToCartBtn;

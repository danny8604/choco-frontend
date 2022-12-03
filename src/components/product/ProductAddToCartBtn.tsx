import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import { ShoppingCartItem, ProductsType } from "../../app/type";
import {
  addToCart,
  updateTotalPriceAndQuantity,
} from "../cart/cartItem/CartSlice";
import styles from "./ProductAddToCartBtn.module.scss";

type ProductAddToCartBtnProps = {
  props: ProductsType;
};

const ProductAddToCartBtn = ({ props }: ProductAddToCartBtnProps) => {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const addToCartItem: ShoppingCartItem = {
    id: props.id,
    img: props.img.imgA,
    price: props.price,
    quantity: 1,
  };

  const addToCartHandler = () => {
    dispatch(addToCart(addToCartItem));
    dispatch(updateTotalPriceAndQuantity());
  };

  return (
    <div className={styles.buttonContainer}>
      <button onClick={() => addToCartHandler()}>ADD TO CART</button>
    </div>
  );
};

export default ProductAddToCartBtn;

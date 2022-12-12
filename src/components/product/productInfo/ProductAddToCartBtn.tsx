import { useAppDispatch } from "../../../app/hooks/hooks";
import { ShoppingCartItem, ProductsType } from "../../../app/type";
import {
  addToCart,
  updateTotalPriceAndQuantity,
} from "../../../features/cart/cartItem/cartSlice";
import { openCartModal } from "../../../features/cartModal/cartModalSlice";
import { openBackdrop } from "../../../features/backdrop/backdropSlice";
import styles from "./ProductAddToCartBtn.module.scss";

type ProductAddToCartBtnProps = {
  props: ProductsType;
};

const ProductAddToCartBtn = ({ props }: ProductAddToCartBtnProps) => {
  const dispatch = useAppDispatch();
  const addToCartItem: ShoppingCartItem = {
    id: props.id,
    img: props.img.imgA,
    price: props.price,
    path: props.path,
    quantity: 1,
  };

  const addToCartHandler = () => {
    dispatch(addToCart(addToCartItem));
    dispatch(updateTotalPriceAndQuantity());
    dispatch(openBackdrop());
    dispatch(openCartModal());
  };

  return (
    <div className={styles.buttonContainer}>
      <button onClick={() => addToCartHandler()}>ADD TO CART</button>
    </div>
  );
};

export default ProductAddToCartBtn;

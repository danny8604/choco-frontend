import styles from "./ProductAddToCartBtn.module.scss";
import { ProductsType } from "../../../app/type";
import useCart from "../../../app/hooks/useCart";

type ProductAddToCartBtnProps = {
  props: ProductsType;
};

const ProductAddToCartBtn = ({ props }: ProductAddToCartBtnProps) => {
  const { cartAddToCart } = useCart();

  const addToCartHandler = async () => {
    cartAddToCart(props._id);
  };

  return (
    <div className={styles.buttonContainer}>
      <button onClick={() => addToCartHandler()}>ADD TO CART</button>
    </div>
  );
};

export default ProductAddToCartBtn;

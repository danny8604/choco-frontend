import styles from "./ProductAddToCartBtn.module.scss";
import { ProductsType } from "../../../app/type";
import useCart from "../../../app/hooks/useCart";

type ProductAddToCartBtnProps = {
  props: ProductsType;
};

const ProductAddToCartBtn = ({ props }: ProductAddToCartBtnProps) => {
  const { cartAddToCart, disabledBtn } = useCart(props._id);

  const addToCartHandler = () => cartAddToCart(props._id);

  return (
    <div className={styles.buttonContainer}>
      <button disabled={disabledBtn} onClick={() => addToCartHandler()}>
        {disabledBtn ? "OUT OF STOCK" : "ADD TO CART"}
      </button>
    </div>
  );
};

export default ProductAddToCartBtn;
